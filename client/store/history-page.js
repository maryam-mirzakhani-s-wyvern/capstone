// INITIAL STATE
const defaultState = {
  display: {actualtension: 0.5, actualpleasant: 0.5, actualenergy: 0.5},
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
