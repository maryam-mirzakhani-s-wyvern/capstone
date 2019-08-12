//ACTION TYPE
const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY'
const DISPLAY_LIST_VIEW = 'DISPLAY_LIST_VIEW'
const SET_TIME_VIEW = 'SET_TIME_VIEW'
const SET_DAY_TO_VIEW = 'SET_DAY_TO_VIEW'

//ACTIONS
export const toggleCategory = category => ({type: TOGGLE_CATEGORY, category})
export const setTimeView = timeView => ({type: SET_TIME_VIEW, timeView})
export const displayListView = bool => ({type: DISPLAY_LIST_VIEW, bool})
export const setDayToView = entry => ({type: SET_DAY_TO_VIEW, entry})

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

// object cloning helper function
function cloneObj(obj) {
  let keys = Object.keys(obj)
  let newObj = {}
  keys.forEach(key => (newObj[key] = obj[key]))
  return newObj
}

// REDUCER
export default function(state = defaultState, action) {
  switch (action.type) {
    case TOGGLE_CATEGORY:
      // make a clone of the display chart and edit this clone
      const updatedDisplayChart = cloneObj(state.displayChart)
      updatedDisplayChart[action.category] = !updatedDisplayChart[
        action.category
      ]
      return {...state, displayChart: updatedDisplayChart}
    case SET_TIME_VIEW:
      return {...state, timeView: action.timeView}
    case DISPLAY_LIST_VIEW:
      return {...state, listView: action.bool}
    case SET_DAY_TO_VIEW:
      return {...state, dayToView: action.entry}
    default:
      return state
  }
}
