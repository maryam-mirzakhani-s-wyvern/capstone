// TRANSLATOR FUNCS
const backwardSleepTranslator = num => {
  return `${(num * 8).toFixed(2)} hours`
}

const usualTranslator = num => {
  if (num === 0) return 'Not at all'
  if (num <= 0.25) return 'Very little'
  if (num <= 0.33) return 'Less than usual'
  if (num <= 0.5) return 'Somewhat less than usual'
  if (num <= 0.66) return 'Usual amount'
  if (num <= 0.75) return 'Somewhat more than usual'
  if (num <= 1) return 'More than usual'
}

const zeroToFourTranslator = num => {
  num = Number(num)
  return `${(num * 4).toFixed(2)} / 4`
}

const mealTranslator = num => {
  num = Number(num)
  return `${(num * 4).toFixed(2)}`
}

const zeroToFiveTranslator = num => {
  num = Number(num)
  return `${(num * 5).toFixed(2)} / 5`
}

const percentageTranslator = num => {
  return `${Math.round(num * 100)} %`
}

//MAIN TRANSLATE FUNC
const brainDataToDB = entry => ({
  sleep: backwardSleepTranslator(entry.sleep),
  social: usualTranslator(entry.social),
  meals: mealTranslator(entry.meals),
  exercise: percentageTranslator(entry.exercise),
  work: zeroToFiveTranslator(entry.work),
  relax: usualTranslator(entry.relax),
  sun: zeroToFourTranslator(entry.sun),
  pleasant: percentageTranslator(entry.pleasant),
  tension: percentageTranslator(entry.tension),
  energy: percentageTranslator(entry.energy)
})

export default brainDataToDB
