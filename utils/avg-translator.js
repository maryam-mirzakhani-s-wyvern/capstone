//MAIN TRANSLATE FUNC

const brainDataToDB = entry => ({
  sleep: backwardSleepTranslator(entry.sleep),
  social: usualTranslator(entry.social),
  meals: mealTranslator(entry.meals),
  exercise: yesOrNoTranslator(entry.exercise),
  work: zeroToFiveTranslator(entry.work),
  relax: usualTranslator(entry.relax),
  sun: zeroToFourTranslator(entry.sun),
  actualpleasant: entry.pleasant,
  actualtension: entry.tension,
  actualenergy: entry.energy
})

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

const yesOrNoTranslator = num => {
  return `${num.toFixed(2) * 100} % of the time`
}

export default brainDataToDB
