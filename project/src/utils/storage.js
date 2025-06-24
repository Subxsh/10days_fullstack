const STORAGE_KEY = 'eventManagementApp_events'

export const loadEventsFromStorage = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch (error) {
    console.error('Error loading events from storage:', error)
    return []
  }
}

export const saveEventsToStorage = (events) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events))
  } catch (error) {
    console.error('Error saving events to storage:', error)
  }
}