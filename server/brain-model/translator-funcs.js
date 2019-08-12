// TRANSLATOR FUNCS
const sleepTranslator = sleepStr => {
  if (sleepStr === '0-2') return 0
  if (sleepStr === '2-4') return 0.25
  if (sleepStr === '4-6') return 0.5
  if (sleepStr === '6-8') return 0.75
  if (sleepStr === '8+') return 1
}

const usualTranslator = str => {
  if (str === 'Not at all' || str === 'None at all') return 0
  if (str === 'Less than usual') return 1 / 3
  if (str === 'Usual amount') return 2 / 3
  if (str === 'More than usual') return 1
}

const zeroToFourTranslator = num => {
  num = Number(num)
  return num / 4
}

const zeroToFiveTranslator = num => {
  num = Number(num)
  return num / 5
}

const yesOrNoTranslator = str => {
  if (str === 'Yes' || str === true) return 1
  if (str === 'No' || str === false) return 0
}

//MAIN TRANSLATE FUNC

const jsonToBrainData = entry => ({
  sleep: sleepTranslator(entry.sleep),
  social: usualTranslator(entry.social),
  meals: zeroToFourTranslator(entry.meals),
  exercise: yesOrNoTranslator(entry.exercise),
  work: zeroToFiveTranslator(entry.work),
  relax: usualTranslator(entry.relax),
  sun: zeroToFiveTranslator(entry.sun)
})

function jsontoTrainingData(entry) {
  const input = jsonToBrainData(entry)
  const output = {
    pleasant: entry.actualpleasant,
    energy: entry.actualenergy,
    tension: entry.actualtension
  }
  return {input, output}
}
function loadTrainingData(file) {
  const data = fs.readFileSync(file)
  const parsed = JSON.parse(data)
  return parsed.map(entry => jsontoTrainingData(entry))
}

module.exports = {jsonToBrainData, jsontoTrainingData, loadTrainingData}
