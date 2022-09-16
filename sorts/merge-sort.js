/*
 * Merge sort: best case = average case = worst case = n log(n)
 *
 * Divide and conquer algorithm
 * Divide the array into part till array.length > 2
 * Sort the sublist and merge the sublists while keeping the sorting intact
 */

const mergeLists = (a = [], b = []) => {
  const final = []
  while (a.length && b.length) {
    if (a[0] < b[0]) {
      final.push(a.shift())
    } else {
      final.push(b.shift())
    }
  }

  return [...final, ...a, ...b]
}

const mergeSort = (arr = []) => {
  //* 0 ⛔ stop condition
  if (arr.length <= 2) {
    return arr
  }

  // * 1 divide the array in two equal parts
  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid, arr.length)

  //* 2 do the same for each parts recurrsively
  const a = mergeSort(left)
  const b = mergeSort(right)

  //* 3 merge and sort the parts
  const sorted = mergeLists(a, b)

  //* 4 return the sorted array
  return sorted
}

const unSortedArray = [4, 8, 1, 2, 6, 10, 0, -1]
const sorted = mergeSort(unSortedArray)

console.log(sorted)
