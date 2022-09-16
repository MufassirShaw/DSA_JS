const { swapArrayItems } = require('../utils')

//* Bubble Sort
//* best case: O(n ^ 2) , average case: O(n ^ 2) , worst case: O(n ^ 2)

/*
 * check if the current element is greater than the next element and if so, swap them
 * repeat this process n times for each item in the array
 */

const bubbleSort = (array = []) => {
  if (!array.length || !Array.isArray(array)) {
    throw new Error('Please provide an array')
  }
  let i = 0
  const total = array.length - 1
  while (i < total) {
    let j = 0

    while (j < total - i) {
      if (array[j] > array[j + 1]) {
        swapArrayItems(array, j, j + 1)
      }
      j++
    }

    i++
  }

  return array
}

const a = [8, 6, 2, 1, 0, 12, -1]

const sorted = bubbleSort(a)
console.log(sorted) // [-1,1,2,6,8,12]
