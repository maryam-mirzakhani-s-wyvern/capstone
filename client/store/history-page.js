//ACTION TYPE
const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY'

//ACTIONS
export const toggleCategory = category => ({type: TOGGLE_CATEGORY, category})

// INITIAL STATE
const defaultState = {
  displayChart: {
    sleep: true,
    social: true,
    meals: false,
    exercise: false,
    work: false,
    relax: false,
    sun: false
  },
  dayToView: {},
  timePeriod: 'all'
}

// REDUCER
export default function(state = defaultState, action) {
  switch (action.type) {
    case TOGGLE_CATEGORY:
      console.log(action.category)
      const updatedDisplayChart = state.displayChart
      updatedDisplayChart[action.category] = !updatedDisplayChart[
        action.category
      ]
      return {...state, displayChart: updatedDisplayChart}
    default:
      return state
  }
}
