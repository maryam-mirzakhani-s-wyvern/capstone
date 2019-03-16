import axios from 'axios'

/**
 * ACTION TYPES
 */
const GOT_MORNING_ENTRY = 'GOT_MORNING_ENTRY'

/**
 * INITIAL STATE
 */
const defaultState = {
  currentMorningEntry: {}
}

/**
 * ACTION CREATORS
 */
const gotMorningEntry = entry => ({type: GOT_MORNING_ENTRY, entry})

/**
 * THUNK CREATORS
 */
export const postMorningEntry = entryInfo => async dispatch => {
  try {
    const res = await axios.post('/api/morning-entries/', entryInfo)
    dispatch(gotMorningEntry(res.data))
  } catch (error) {
    console.error(error)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultState, action) {
  switch (action.type) {
    case GOT_MORNING_ENTRY:
      return {...state, currentMorningEntry: action.entry}
    default:
      return state
  }
}
