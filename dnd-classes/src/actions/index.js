import axios from 'axios'

export const GET_CLASSES = 'GET_CLASSES'
export const FETCH_DATA = 'FETCH_DATA'

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA })
  axios
    .get('http://dnd5eapi.co/api/classes/')
    .then(res => {
      console.log(res)
      dispatch({ type: GET_CLASSES, payload: res.data })
    })
    .err(err => {
      console.log(err)
    })
}
