import axios from 'axios'

// ACTION TYPES
const GOT_MORNING_ENTRY = 'GOT_MORNING_ENTRY'

// ACTION CREATORS
const gotMorningEntry = entry => ({type: GOT_MORNING_ENTRY, entry})

// THUNK CREATORS
export const postMorningEntry = entryInfo => async dispatch => {
  try {
    const res = await axios.post('/api/morning-entries/', entryInfo)
    dispatch(gotMorningEntry(res.data))
  } catch (error) {
    console.error(error)
  }
}

export const fetchMorningEntry = date => async dispatch => {
  try {
    const res = await axios.get(`/api/morning-entries/${date}`)
    dispatch(gotMorningEntry(res.data))
  } catch (error) {
    console.error(error)
  }
}

// INITIAL STATE
const defaultState = {
  entryToPost: {},
  postedEntry: {}
}

// REDUCER
export default function(state = defaultState, action) {
  switch (action.type) {
    case GOT_MORNING_ENTRY:
      return {...state, postedEntry: action.entry}
    default:
      return state
  }
}
