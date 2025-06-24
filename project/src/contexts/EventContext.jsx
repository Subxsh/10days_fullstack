import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { eventReducer, initialState } from '../reducers/eventReducer'
import { loadEventsFromStorage, saveEventsToStorage } from '../utils/storage'

const EventContext = createContext()

export const useEvents = () => {
  const context = useContext(EventContext)
  if (!context) {
    throw new Error('useEvents must be used within an EventProvider')
  }
  return context
}

export const EventProvider = ({ children }) => {
  const [state, dispatch] = useReducer(eventReducer, initialState)

  useEffect(() => {
    const savedEvents = loadEventsFromStorage()
    if (savedEvents.length > 0) {
      dispatch({ type: 'LOAD_EVENTS', payload: savedEvents })
    }
  }, [])

  useEffect(() => {
    saveEventsToStorage(state.events)
  }, [state.events])

  const addEvent = (event) => {
    dispatch({ type: 'ADD_EVENT', payload: event })
  }

  const updateEvent = (id, updatedEvent) => {
    dispatch({ type: 'UPDATE_EVENT', payload: { id, updatedEvent } })
  }

  const deleteEvent = (id) => {
    dispatch({ type: 'DELETE_EVENT', payload: id })
  }

  const setLoading = (loading) => {
    dispatch({ type: 'SET_LOADING', payload: loading })
  }

  return (
    <EventContext.Provider
      value={{
        events: state.events,
        loading: state.loading,
        addEvent,
        updateEvent,
        deleteEvent,
        setLoading,
      }}
    >
      {children}
    </EventContext.Provider>
  )
}