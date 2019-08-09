// TRANSLATOR FUNCS
const backwardSleepTranslator = sleepStr => {
  if (sleepStr === 0) return '0-2'
  if (sleepStr === 0.25) return '2-4'
  if (sleepStr === 0.5) return '4-6'
  if (sleepStr === 0.75) return '6-8'
  if (sleepStr === 1) return '8+'
}

const usualTranslator = str => {
  if (str === 0) return 'Not at all'
  if (str === 0.33) return 'Less than usual'
  if (str === 0.66) return 'Usual amount'
  if (str === 1) return 'More than usual'
}

const zeroToFourTranslator = num => {
  num = Number(num)
  return num * 4
}

const zeroToFiveTranslator = num => {
  num = Number(num)
  return num * 5
}

const yesOrNoTranslator = str => {
  if (str === 1) return 'Yes'
  if (str === 0) return 'No'
}

// Main translator function
const brainDataToDB = entry => ({
  sleep: backwardSleepTranslator(entry.sleep),
  social: usualTranslator(entry.social),
  meals: zeroToFourTranslator(entry.meals),
  exercise: yesOrNoTranslator(entry.exercise),
  work: zeroToFiveTranslator(entry.work),
  relax: usualTranslator(entry.relax),
  sun: zeroToFourTranslator(entry.sun),
  actualpleasant: entry.pleasant,
  actualtension: entry.tension,
  actualenergy: entry.energy
})

module.exports = brainDataToDB
