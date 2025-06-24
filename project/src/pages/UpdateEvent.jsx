import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useEvents } from '../contexts/EventContext'
import EventForm from '../components/Events/EventForm'
import LoadingSpinner from '../components/UI/LoadingSpinner'

const UpdateEvent = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { events, updateEvent } = useEvents()
  const [event, setEvent] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const foundEvent = events.find(e => e.id === id)
    if (foundEvent) {
      setEvent(foundEvent)
    } else {
      toast.error('Event not found')
      navigate('/events')
    }
  }, [id, events, navigate])

  const handleSubmit = async (formData) => {
    setIsLoading(true)
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const updatedEvent = {
        ...event,
        ...formData,
        updatedAt: new Date().toISOString(),
      }
      
      updateEvent(id, updatedEvent)
      toast.success('Event updated successfully!')
      navigate(`/events/${id}`)
    } catch (error) {
      toast.error('Failed to update event. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (!event) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <LoadingSpinner size="lg" className="py-12" />
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Update Event
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Modify the event details below
        </p>
      </div>

      <div className="card p-8">
        <EventForm
          initialData={event}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </div>
    </div>
  )
}

export default UpdateEvent