import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, MapPin, Users, Edit, Trash2, Eye } from 'lucide-react'
import { formatDate, getEventStatus } from '../../utils/dateUtils'

const EventCard = ({ event, onDelete, showActions = true }) => {
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
    <div className="card p-6 hover:shadow-lg transition-shadow duration-200 animate-fade-in">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white line-clamp-2">
          {event.title}
        </h3>
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[status]}`}>
          {statusLabels[status]}
        </span>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
        {event.description}
      </p>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{formatDate(event.date)}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <Clock className="h-4 w-4 mr-2" />
          <span>{event.time}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <MapPin className="h-4 w-4 mr-2" />
          <span>{event.location}</span>
        </div>
        
        {event.maxAttendees && (
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Users className="h-4 w-4 mr-2" />
            <span>Max {event.maxAttendees} attendees</span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <span className="inline-block px-2 py-1 text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/20 dark:text-primary-400 rounded">
          {event.category}
        </span>

        {showActions && (
          <div className="flex space-x-2">
            <Link
              to={`/events/${event.id}`}
              className="p-2 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200"
              title="View details"
            >
              <Eye className="h-4 w-4" />
            </Link>
            
            <Link
              to={`/events/edit/${event.id}`}
              className="p-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200"
              title="Edit event"
            >
              <Edit className="h-4 w-4" />
            </Link>
            
            <button
              onClick={() => onDelete(event.id)}
              className="p-2 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors duration-200"
              title="Delete event"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default EventCard