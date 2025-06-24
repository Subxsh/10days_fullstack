import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Calendar } from 'lucide-react'
import toast from 'react-hot-toast'
import { useEvents } from '../contexts/EventContext'
import { useDebounce } from '../hooks/useDebounce'
import { getEventStatus } from '../utils/dateUtils'
import EventCard from '../components/Events/EventCard'
import EventFilters from '../components/Events/EventFilters'
import LoadingSpinner from '../components/UI/LoadingSpinner'
import SkeletonCard from '../components/UI/SkeletonCard'
import Modal from '../components/UI/Modal'

const EventsList = () => {
  const { events, deleteEvent, loading } = useEvents()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, eventId: null, eventTitle: '' })

  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(events.map(event => event.category))]
    return uniqueCategories.sort()
  }, [events])

  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
                           event.description.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
                           event.location.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      
      const matchesCategory = !selectedCategory || event.category === selectedCategory
      
      const eventStatus = getEventStatus(event.date, event.time)
      const matchesStatus = selectedStatus === 'all' || eventStatus === selectedStatus
      
      return matchesSearch && matchesCategory && matchesStatus
    })
  }, [events, debouncedSearchTerm, selectedCategory, selectedStatus])

  const handleDeleteClick = (eventId, eventTitle) => {
    setDeleteModal({ isOpen: true, eventId, eventTitle })
  }

  const handleDeleteConfirm = () => {
    deleteEvent(deleteModal.eventId)
    setDeleteModal({ isOpen: false, eventId: null, eventTitle: '' })
    toast.success('Event deleted successfully')
  }

  const handleDeleteCancel = () => {
    setDeleteModal({ isOpen: false, eventId: null, eventTitle: '' })
  }

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="skeleton h-8 w-48"></div>
          <div className="skeleton h-10 w-32"></div>
        </div>
        <div className="skeleton h-32 w-full mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            All Events
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'} found
          </p>
        </div>
        <Link
          to="/events/create"
          className="btn-primary inline-flex items-center space-x-2 mt-4 sm:mt-0"
        >
          <Plus className="h-5 w-5" />
          <span>Create Event</span>
        </Link>
      </div>

      {/* Filters */}
      <EventFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
        categories={categories}
      />

      {/* Events Grid */}
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onDelete={handleDeleteClick}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Calendar className="h-24 w-24 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
            {events.length === 0 ? 'No events yet' : 'No events match your filters'}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {events.length === 0 
              ? 'Get started by creating your first event'
              : 'Try adjusting your search or filter criteria'
            }
          </p>
          {events.length === 0 && (
            <Link
              to="/events/create"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <Plus className="h-5 w-5" />
              <span>Create Your First Event</span>
            </Link>
          )}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={deleteModal.isOpen}
        onClose={handleDeleteCancel}
        title="Delete Event"
        size="sm"
      >
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Are you sure you want to delete "{deleteModal.eventTitle}"? This action cannot be undone.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleDeleteCancel}
              className="btn-secondary"
            >
              Cancel
            </button>
            <button
              onClick={handleDeleteConfirm}
              className="btn-danger"
            >
              Delete Event
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default EventsList