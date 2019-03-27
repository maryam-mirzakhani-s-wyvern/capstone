export function relaxSocial(input) {
  if (input === 'Not at all') {
    return 0
  } else if (input === 'Less than usual') {
    return 0.33
  } else if (input === 'Usual amount') {
    return 0.66
  } else if (input === 'More than usual') {
    return 1
  }
}

export function exercise(input) {
  if (input === false) {
    return 0
  } else if (input === true) {
    return 1
  }
}

export function sleep(input) {
  if (input === '0-2') {
    return 0
  } else if (input === '2-4') {
    return 0.25
  } else if (input === '4-6') {
    return 0.5
  } else if (input === '6-8') {
    return 0.75
  } else if (input === '8+') {
    return 1
  }
}

export function comparison() {
  let comparisonArr = []
  for (let i = 0; i < morningArray.length; ++i) {
    if (morningArray[i][0] === 'relax' || morningArray[i][0] === 'social') {
      const relaxSocialResult =
        relaxSocial(eveningArray[i][1]) - relaxSocial(morningArray[i][1])
      comparisonArr.push([labels[i], relaxSocialResult])
    } else if (morningArray[i][0] === 'exercise') {
      const exerciseResult =
        exercise(eveningArray[i][1]) - exercise(morningArray[i][1])
      comparisonArr.push([labels[i], exerciseResult])
    } else if (morningArray[i][0] === 'sleep') {
      const sleepResult = sleep(eveningArray[i][1]) - sleep(morningArray[i][1])
      comparisonArr.push([labels[i], sleepResult])
    } else {
      comparisonArr.push([labels[i], eveningArray[i][1] - morningArray[i][1]])
    }
  }
  return comparisonArr
}

/*eslint-disable */
export function moods() {
  const comparisonArr = comparison()
  let moods = []

  for (let i = 0; i < comparisonArr.length; ++i) {
    if (comparisonArr[i][1] > 0) {
      if (
        comparisonArr[i][0] === 'pleasant' ||
        comparisonArr[i][0] === 'energy' ||
        comparisonArr[i][0] === 'tension'
      ) {
        moods.push(
          `Your ${comparisonArr[i][0]} levels are higher than you had expected.`
        )
      }
    } else if (comparisonArr[i][1] < 0) {
      if (
        comparisonArr[i][0] === 'pleasant' ||
        comparisonArr[i][0] === 'energy' ||
        comparisonArr[i][0] === 'tension'
      ) {
        moods.push(
          `Your ${comparisonArr[i][0]} levels are lower than you had expected.`
        )
      }
    }
  }
  return moods
}

export function habits() {
  const comparisonArr = comparison()
  let habits = []

  for (let i = 0; i < comparisonArr.length; ++i) {
    if (comparisonArr[i][1] > 0) {
      if (comparisonArr[i][0] === 'exercise') {
        habits.push('You exercised more than you had anticipated.')
      }
      if (comparisonArr[i][0] === 'meals') {
        habits.push('You ate more than you had anticipated.')
      }
      if (comparisonArr[i][0] === 'relax') {
        habits.push('You relaxed more than you had anticipated.')
      }
      if (comparisonArr[i][0] === 'sleep') {
        habits.push('You slept more than you had anticipated.')
      }
      if (comparisonArr[i][0] === 'social') {
        habits.push('You socialized more than you had anticipated.')
      }
      if (comparisonArr[i][0] === 'sun') {
        habits.push('There was more sun than you had anticipated.')
      }
      if (comparisonArr[i][0] === 'work') {
        habits.push('Your outlook on work was better than you had anticipated.')
      }
    } else if (comparisonArr[i][1] < 0) {
      if (comparisonArr[i][0] === 'exercise') {
        habits.push('You exercised less than you had anticipated.')
      }
      if (comparisonArr[i][0] === 'meals') {
        habits.push('You ate less than you had anticipated.')
      }
      if (comparisonArr[i][0] === 'relax') {
        habits.push('You relaxed less than you had anticipated.')
      }
      if (comparisonArr[i][0] === 'sleep') {
        habits.push('You slept less than you had anticipated.')
      }
      if (comparisonArr[i][0] === 'social') {
        habits.push('You socialized less than you had anticipated.')
      }
      if (comparisonArr[i][0] === 'sun') {
        habits.push('There was less sun than you had anticipated.')
      }
      if (comparisonArr[i][0] === 'work') {
        habits.push('Your outlook on work was worse than you had anticipated.')
      }
    } else if (comparisonArr[i][1] === 0) {
      habits.push(
        `There was no difference in ${comparisonArr[i][0]} outlook today.`
      )
    }
  }
  return habits
}
/*eslint-enable */

module.exports = {
  relaxSocial,
  exercise,
  sleep,
  comparison,
  moods,
  habits
}
