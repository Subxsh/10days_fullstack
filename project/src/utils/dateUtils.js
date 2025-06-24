export const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export const formatDateTime = (dateString, timeString) => {
  const date = new Date(`${dateString}T${timeString}`)
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export const isEventUpcoming = (dateString, timeString) => {
  const eventDate = new Date(`${dateString}T${timeString}`)
  return eventDate > new Date()
}

export const isEventToday = (dateString) => {
  const eventDate = new Date(dateString)
  const today = new Date()
  return eventDate.toDateString() === today.toDateString()
}

export const getEventStatus = (dateString, timeString) => {
  const eventDate = new Date(`${dateString}T${timeString}`)
  const now = new Date()
  
  if (eventDate > now) {
    return 'upcoming'
  } else if (eventDate.toDateString() === now.toDateString()) {
    return 'today'
  } else {
    return 'past'
  }
}