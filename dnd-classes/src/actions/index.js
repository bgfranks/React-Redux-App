import axios from 'axios'

export const GET_CLASSES = 'GET_CLASSES'
export const FETCH_DATA = 'FETCH_DATA'

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA })
  axios
    .get('https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/classes/')
    .then(res => {
      console.log(res.data.results)
      dispatch({ type: GET_CLASSES, payload: res.data.results })
    })
    .catch(err => {
      console.log(err)
    })
}
