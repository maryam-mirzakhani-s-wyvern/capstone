import axios from 'axios'

// ACTION TYPES
const GOT_EVENING_ENTRY = 'GOT_EVENING_ENTRY'
const GOT_ALL_ENTRIES = 'GOT_ALL_ENTRIES'

// ACTION CREATORS
const gotEveningEntry = entry => ({type: GOT_EVENING_ENTRY, entry})
const gotAllEntries = entries => ({type: GOT_ALL_ENTRIES, entries})

// THUNK CREATORS
export const postEveningEntry = entryInfo => async dispatch => {
  try {
    const res = await axios.post('/api/evening-entries', entryInfo)
    dispatch(gotEveningEntry(res.data))
  } catch (error) {
    console.error(error)
  }
}

export const getAllEntries = () => async dispatch => {
  try {
    const res = await axios.get('/api/evening-entries/')
    dispatch(gotAllEntries(res.data))
  } catch (error) {
    console.error(error)
  }
}

export const fetchThisEvening = () => async dispatch => {
  try {
    const res = await axios.get('/api/evening-entries/today')
    dispatch(gotEveningEntry(res.data))
  } catch (error) {
    console.error(error)
  }
}

// INITIAL STATE
const defaultState = {
  entryToPost: {actualtension: 0.5, actualpleasant: 0.5, actualenergy: 0.5},
  postedEntry: {},
  allEntries: []
}

// REDUCER
export default function(state = defaultState, action) {
  switch (action.type) {
    case GOT_EVENING_ENTRY:
      return {...state, postedEntry: action.entry}
    case GOT_ALL_ENTRIES:
      return {...state, allEntries: action.entries}
    default:
      return state
  }
}
