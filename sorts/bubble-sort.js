import { swapArrayItems } from '../utils'

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
  let idxToSort = 0
  while (idxToSort < array.length - 1) {
    let idxToSearch = 0

    while (idxToSearch < array.length - 1) {
      if (array[idxToSearch] > array[idxToSearch + 1]) {
        swapArrayItems(array, idxToSearch, idxToSearch + 1)
      }
      idxToSearch++
    }

    idxToSort++
  }

  return array
}

export { bubbleSort }
