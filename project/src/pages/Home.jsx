import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Users, Clock, TrendingUp, Plus, ArrowRight } from 'lucide-react'
import { useEvents } from '../contexts/EventContext'
import { getEventStatus } from '../utils/dateUtils'
import EventCard from '../components/Events/EventCard'

const Home = () => {
  const { events } = useEvents()

  const upcomingEvents = events.filter(event => 
    getEventStatus(event.date, event.time) === 'upcoming'
  ).slice(0, 3)

  const todayEvents = events.filter(event => 
    getEventStatus(event.date, event.time) === 'today'
  )

  const totalEvents = events.length
  const pastEvents = events.filter(event => 
    getEventStatus(event.date, event.time) === 'past'
  ).length

  const stats = [
    {
      name: 'Total Events',
      value: totalEvents,
      icon: Calendar,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20',
    },
    {
      name: 'Upcoming Events',
      value: upcomingEvents.length,
      icon: Clock,
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/20',
    },
    {
      name: 'Today\'s Events',
      value: todayEvents.length,
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20',
    },
    {
      name: 'Past Events',
      value: pastEvents,
      icon: Users,
      color: 'text-gray-600',
      bgColor: 'bg-gray-100 dark:bg-gray-900/20',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to{' '}
          <span className="text-primary-600">EventHub</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Your ultimate event management solution. Create, organize, and manage events with ease.
          Never miss an important event again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/events/create"
            className="btn-primary inline-flex items-center justify-center space-x-2"
          >
            <Plus className="h-5 w-5" />
            <span>Create Event</span>
          </Link>
          <Link
            to="/events"
            className="btn-secondary inline-flex items-center justify-center space-x-2"
          >
            <span>View All Events</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat) => (
          <div key={stat.name} className="card p-6">
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.name}
                </p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Today's Events */}
      {todayEvents.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Today's Events
            </h2>
            <Link
              to="/events"
              className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center space-x-1"
            >
              <span>View all</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {todayEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                showActions={false}
              />
            ))}
          </div>
        </div>
      )}

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Upcoming Events
            </h2>
            <Link
              to="/events"
              className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center space-x-1"
            >
              <span>View all</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                showActions={false}
              />
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {totalEvents === 0 && (
        <div className="text-center py-12">
          <Calendar className="h-24 w-24 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
            No events yet
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Get started by creating your first event
          </p>
          <Link
            to="/events/create"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <Plus className="h-5 w-5" />
            <span>Create Your First Event</span>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Home