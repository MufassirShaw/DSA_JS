const { swapArrayItems } = require('../utils')

//* Selection Sort
//* best case: O(n ^ 2) , average case: O(n ^ 2) , worst case: O(n ^ 2)

/*
 * Find the smallest element in the array and place it at the begining of the unsorted part of array
 * repeat this arr.length times for every item
 */

const selectionSort = (arr = []) => {
  if (!Array.isArray(arr)) {
    throw new Error('Argument should be an array')
  }

  for (let i = 0; i < arr.length; i++) {
    let nextMin = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[nextMin]) {
        nextMin = j
      }
    }
    if (i !== nextMin) {
      swapArrayItems(arr, nextMin, i)
    }
  }
  return arr
}

const a = [8, 6, 2, 1, 12, -1]

const sorted = selectionSort(a)
console.log(sorted) // [-1,1,2,6,8,12]
