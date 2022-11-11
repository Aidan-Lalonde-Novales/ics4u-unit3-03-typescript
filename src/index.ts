/**
 * This program calculates a factorial using recursion.
 *
 * By:      Aidan Lalonde-Novales
 * Version: 1.0
 * Since:   2022-11-09
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

/**
 * Calulates a factorial using recursion.
 *
 * @param {number} userInt input from main
 * @returns {number} accurate calculation
 */
function factorial(userInt: number): number {
  if (userInt < 0) {
    return -1
  } else if (userInt === 0) {
    return 1
  } else {
    return userInt * factorial(userInt - 1)
  }
}

// Input
const userInput = prompt('enter factorial: ')
const userInt = parseInt(userInput)

// Process and Output
if (!isNaN(userInt)) {
  console.log(`\n${userInt}! = ${factorial(userInt)}`)
} else {
  console.log('\nPlease enter an integer next time.')
}

console.log('\nDone.')
