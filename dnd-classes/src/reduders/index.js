import { GET_CLASSES, FETCH_DATA } from '../actions'

const initialState = {
  classes: [],
  isFetchingData: false,
  error: '',
}

export const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
      }
    case GET_CLASSES:
      return {
        ...state,
        classes: action.payload,
      }
    default:
      return state
  }
}
