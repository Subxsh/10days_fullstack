import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useEvents } from '../contexts/EventContext'
import EventForm from '../components/Events/EventForm'

const CreateEvent = () => {
  const navigate = useNavigate()
  const { addEvent } = useEvents()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (formData) => {
    setIsLoading(true)
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const newEvent = {
        id: Date.now().toString(),
        ...formData,
        createdAt: new Date().toISOString(),
      }
      
      addEvent(newEvent)
      toast.success('Event created successfully!')
      navigate('/events')
    } catch (error) {
      toast.error('Failed to create event. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Create New Event
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Fill in the details below to create a new event
        </p>
      </div>

      <div className="card p-8">
        <EventForm
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </div>
    </div>
  )
}

export default CreateEvent