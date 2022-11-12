/**
 * This program finds an item using binary search.
 *
 * By:      Aidan Lalonde-Novales
 * Version: 1.0
 * Since:   2022-11-12
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

/**
 * Binary Search Function.
 *
 * @param {number[]} numArray - all numbers to be searched through.
 * @param {number} target - number being requested by the user.
 * @param {number} min - lowest point in the array.
 * @param {number} max - highest point in the array.
 * @returns {number} the array index that matches the target.
 */
function binarySearch(
  numArray: number[],
  target: number,
  min: number,
  max: number
): number {
  // base case to prevent infinite loop
  if (min > max) {
    return -1
  }

  const middle = Math.floor((min + max) / 2)

  // true if target equals the matching index
  if (numArray[middle] === target) {
    return middle
  // searches in the lower half if middle > target
  } else if (numArray[middle] > target) {
    return binarySearch(numArray, target, min, middle - 1)
  // searches in the upper half if middle < target
  } else {
    return binarySearch(numArray, target, middle + 1, min)
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
