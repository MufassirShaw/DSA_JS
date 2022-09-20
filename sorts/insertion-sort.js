const { swapArrayItems } = require('../utils')

//* Insertion Sort
//* best case: O(n) , average case: O(n ^ 2) , worst case: O(n ^ 2)

/*
 * Take an element from the right and put it on sort left by pushing array to the right
 * repeat this arr.length times for every item
 *
 * [8,6^,2,1]
 * [6,8,2^,1]
 * [6,2^,8,1]
 * [2,6,8,1^]
 * [2,6,1^,8]
 * ...
 */

const insertionSort = (arr = []) => {
  if (!Array.isArray(arr)) {
    throw new Error('Argument should be an array')
  }
  let idx = 1

  while (idx < arr.length) {
    for (let i = idx; i > 0 && arr[i] < arr[i - 1]; i--) {
      swapArrayItems(arr, i, i - 1)
    }
    idx++
  }

  return arr
}

const a = [8, 6, 2, 1, 12, -1]

const sorted = insertionSort(a)
console.log(sorted) // [-1,1,2,6,8,12]
