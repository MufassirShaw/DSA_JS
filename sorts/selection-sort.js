import { swapArrayItems } from '../utils'

//* Selection Sort
//* best case: O(n ^ 2) , average case: O(n ^ 2) , worst case: O(n ^ 2)

/*
 * Swap the current item with a smaller item
 * repeat this arr.length times for every item
 */

const selectionSort = (arr = []) => {
  if (!Array.isArray(arr)) {
    throw new Error('Argument should be an array')
  }

  let minIdx
  for (let i = 0; i < arr.length; i++) {
    minIdx = i
    for (let j = 0; j < arr.length; j++) {
      const element = arr[j]
      if (element > arr[minIdx]) {
        minIdx = j
      }
      swapArrayItems(arr, minIdx, i)
    }
  }
  return arr
}

const a = [8, 6, 2, 1, 12, -1]

const sorted = selectionSort(a)
console.log(sorted) // [-1,1,2,6,8,12]