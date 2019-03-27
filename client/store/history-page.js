//ACTION TYPE
const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY'
const DISPLAY_LIST_VIEW = 'DISPLAY_LIST_VIEW'
const SET_TIME_VIEW = 'SET_TIME_VIEW'

//ACTIONS
export const toggleCategory = category => ({type: TOGGLE_CATEGORY, category})
export const setTimeView = timeView => ({type: SET_TIME_VIEW, timeView})
export const displayListView = bool => ({type: DISPLAY_LIST_VIEW, bool})

// INITIAL STATE
const defaultState = {
  displayChart: {
    energy: true,
    pleasant: true,
    tension: true,
    sleep: false,
    social: false,
    meals: false,
    exercise: false,
    work: false,
    relax: false,
    sun: false
  },
  dayToView: {},
  timeView: 'all history',
  listView: false
}

// REDUCER
export default function(state = defaultState, action) {
  switch (action.type) {
    case TOGGLE_CATEGORY:
      const updatedDisplayChart = state.displayChart
      updatedDisplayChart[action.category] = !updatedDisplayChart[
        action.category
      ]
      return {...state, displayChart: updatedDisplayChart}
    case SET_TIME_VIEW:
      return {...state, timeView: action.timeView}
    case DISPLAY_LIST_VIEW:
      return {...state, listView: action.bool}
    default:
      return state
  }
}
