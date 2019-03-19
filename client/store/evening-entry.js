import axios from 'axios'

// ACTION TYPES
const GOT_EVENING_ENTRY = 'GOT_EVENING_ENTRY'

// ACTION CREATORS
const gotEveningEntry = entry => ({type: GOT_EVENING_ENTRY, entry})

// THUNK CREATORS
export const postEveningEntry = entryInfo => async dispatch => {
  try {
    const res = await axios.post('/api/evening-entries/', entryInfo)
    dispatch(gotEveningEntry(res.data))
  } catch (error) {
    console.error(error)
  }
}
// export const postEveningEntry = (anything) => ("something dumb")

// INITIAL STATE
const defaultState = {
  entryToPost: {},
  postedEntry: {}
}

// REDUCER
export default function(state = defaultState, action) {
  switch (action.type) {
    case GOT_EVENING_ENTRY:
      return {...state, postedEntry: action.entry}
    default:
      return state
  }
}
