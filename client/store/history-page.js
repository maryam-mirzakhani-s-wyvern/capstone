//ACTION TYPE
const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY'
const SET_TIME_VIEW = 'SET_TIME_VIEW'

//ACTIONS
export const toggleCategory = category => ({type: TOGGLE_CATEGORY, category})
export const setTimeView = timeView => ({type: SET_TIME_VIEW, timeView})

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
  timeView: 'all history'
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
    default:
      return state
  }
}
