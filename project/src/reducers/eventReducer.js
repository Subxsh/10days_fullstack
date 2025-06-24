export const initialState = {
  events: [],
  loading: false,
}

export const eventReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_EVENTS':
      return {
        ...state,
        events: action.payload,
      }
    case 'ADD_EVENT':
      return {
        ...state,
        events: [...state.events, action.payload],
      }
    case 'UPDATE_EVENT':
      return {
        ...state,
        events: state.events.map(event =>
          event.id === action.payload.id ? action.payload.updatedEvent : event
        ),
      }
    case 'DELETE_EVENT':
      return {
        ...state,
        events: state.events.filter(event => event.id !== action.payload),
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      }
    default:
      return state
  }
}