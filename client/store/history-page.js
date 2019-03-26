// INITIAL STATE
const defaultState = {
  displayChart: {
    showSleep: false,
    showSocial: false,
    showMeals: false,
    showExercise: false,
    showWork: false,
    showRelax: false,
    showSun: false
  },
  dayToView: {},
  timePeriod: 'all'
}

// REDUCER
export default function(state = defaultState, action) {
  switch (action.type) {
    default:
      return state
  }
}
