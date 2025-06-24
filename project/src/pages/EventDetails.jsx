import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Edit, 
  Trash2, 
  Download, 
  Printer, 
  Share2,
  ArrowLeft 
} from 'lucide-react'
import toast from 'react-hot-toast'
import { useEvents } from '../contexts/EventContext'
import { formatDateTime, getEventStatus } from '../utils/dateUtils'
import { generateEventPDF, printEventDetails } from '../utils/pdfUtils'
import LoadingSpinner from '../components/UI/LoadingSpinner'
import Modal from '../components/UI/Modal'

const EventDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { events, deleteEvent } = useEvents()
  const [event, setEvent] = useState(null)
  const [deleteModal, setDeleteModal] = useState(false)

  useEffect(() => {
    const foundEvent = events.find(e => e.id === id)
    if (foundEvent) {
      setEvent(foundEvent)
    } else {
      toast.error('Event not found')
      navigate('/events')
    }
  }, [id, events, navigate])

  const handleDelete = () => {
    deleteEvent(id)
    setDeleteModal(false)
    toast.success('Event deleted successfully')
    navigate('/events')
  }

  const handleDownloadPDF = async () => {
    try {
      await generateEventPDF(event)
      toast.success('PDF downloaded successfully')
    } catch (error) {
      toast.error('Failed to generate PDF')
    }
  }

  const handlePrint = () => {
    printEventDetails()
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: event.description,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      toast.success('Event link copied to clipboard')
    }
  }

  if (!event) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <LoadingSpinner size="lg" className="py-12" />
      </div>
    )
  }

  const status = getEventStatus(event.date, event.time)
  const statusColors = {
    upcoming: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    today: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
    past: 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400',
  }

  const statusLabels = {
    upcoming: 'Upcoming',
    today: 'Today',
    past: 'Past',
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate('/events')}
        className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6 transition-colors duration-200"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Events</span>
      </button>

      {/* Event Details Card */}
      <div className="card p-8 mb-6" id="event-details">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-6">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                {event.title}
              </h1>
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${statusColors[status]}`}>
                {statusLabels[status]}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              {event.description}
            </p>
          </div>
        </div>

        {/* Event Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Date & Time</p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {formatDateTime(event.date, event.time)}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {event.location}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-5 w-5 bg-primary-100 dark:bg-primary-900/20 rounded flex items-center justify-center">
                <div className="h-2 w-2 bg-primary-600 rounded-full"></div>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Category</p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {event.category}
                </p>
              </div>
            </div>

            {event.maxAttendees && (
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Max Attendees</p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {event.maxAttendees}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Timestamps */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div>
              <span className="font-medium">Created:</span>{' '}
              {new Date(event.createdAt).toLocaleString()}
            </div>
            {event.updatedAt && (
              <div>
                <span className="font-medium">Last updated:</span>{' '}
                {new Date(event.updatedAt).toLocaleString()}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <Link
          to={`/events/edit/${event.id}`}
          className="btn-primary inline-flex items-center space-x-2"
        >
          <Edit className="h-4 w-4" />
          <span>Edit Event</span>
        </Link>

        <button
          onClick={handleDownloadPDF}
          className="btn-secondary inline-flex items-center space-x-2"
        >
          <Download className="h-4 w-4" />
          <span>Download PDF</span>
        </button>

        <button
          onClick={handlePrint}
          className="btn-secondary inline-flex items-center space-x-2"
        >
          <Printer className="h-4 w-4" />
          <span>Print</span>
        </button>

        <button
          onClick={handleShare}
          className="btn-secondary inline-flex items-center space-x-2"
        >
          <Share2 className="h-4 w-4" />
          <span>Share</span>
        </button>

        <button
          onClick={() => setDeleteModal(true)}
          className="btn-danger inline-flex items-center space-x-2"
        >
          <Trash2 className="h-4 w-4" />
          <span>Delete Event</span>
        </button>
      </div>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={deleteModal}
        onClose={() => setDeleteModal(false)}
        title="Delete Event"
        size="sm"
      >
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Are you sure you want to delete "{event.title}"? This action cannot be undone.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setDeleteModal(false)}
              className="btn-secondary"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
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

export default EventDetails