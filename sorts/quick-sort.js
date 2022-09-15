import { swapArrayItems } from '../utils'

/*
 * Quick sort: best case : n log(n) , average case: n log(n) , worst case: n ^ 2
 *
 * Divide and conquer algorithm
 * 1. Pick an element, called a pivot, from the array.
 * 2. Put it in a sorted position so that items on it's left are < than it's value and items on it's right are >= than it's value.
 * 3. Repeat this process for the left and right side of the pivot.
 *
 */

const findPivotWithFirstIdx = (array, start, end) => {
  let pivot = array[start]
  let i = start + 1, // start at one element after the pivot
    j = end // last index of the array i.e array.length - 1

  while (i < j) {
    // increment i unless you find array[i] >= pivot
    while (array[i] < pivot) {
      i++
    }

    // decrement j until you find array[j] <= pivot
    while (array[j] > pivot) {
      j--
    }

    if (i < j) {
      swapArrayItems(array, i, j)
    }
  }

  // swap pivot with the last element < pivot e.g j

  swapArrayItems(array, start, j)

  return i
}

/**
 *
 * @param {*} array
 * @param {*} left
 * @param {*} right
 * @returns index of the pivot element
 */
const findPivotWithLastIdx = (array = [], start, end) => {
  const pivotValue = array[end]
  let i = start - 1
  for (let j = start; j <= end - 1; j++) {
    if (array[j] < pivotValue) {
      i++
      swapArrayItems(array, i, j)
    }
  }
  // swap pivot value with i+1

  swapArrayItems(array, end, i + 1)

  return i + 1
}

/**
 *
 * @param {*} array
 * @param {*} start
 * @param {*} end
 * @returns sorted array
 */

export const quicksort = (array = [], start, end) => {
  if (!Array.isArray(array)) {
    throw new Error('Please provide an array')
  }

  if (start >= end) {
    return
  }

  const pivot = findPivotWithLastIdx(array, start, end)

  quicksort(array, start, pivot - 1)
  quicksort(array, pivot + 1, end)

  return array
}
