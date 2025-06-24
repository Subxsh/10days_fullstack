export const validateEvent = (event) => {
  const errors = {}

  if (!event.title?.trim()) {
    errors.title = 'Title is required'
  }

  if (!event.description?.trim()) {
    errors.description = 'Description is required'
  }

  if (!event.date) {
    errors.date = 'Date is required'
  } else {
    const eventDate = new Date(event.date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    if (eventDate < today) {
      errors.date = 'Event date cannot be in the past'
    }
  }

  if (!event.time) {
    errors.time = 'Time is required'
  }

  if (!event.location?.trim()) {
    errors.location = 'Location is required'
  }

  if (!event.category?.trim()) {
    errors.category = 'Category is required'
  }

  if (event.maxAttendees && (isNaN(event.maxAttendees) || event.maxAttendees < 1)) {
    errors.maxAttendees = 'Max attendees must be a positive number'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

export const validateContact = (contact) => {
  const errors = {}

  if (!contact.name?.trim()) {
    errors.name = 'Name is required'
  }

  if (!contact.email?.trim()) {
    errors.email = 'Email is required'
  } else if (!/\S+@\S+\.\S+/.test(contact.email)) {
    errors.email = 'Email is invalid'
  }

  if (!contact.message?.trim()) {
    errors.message = 'Message is required'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}