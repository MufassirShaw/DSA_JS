export const swapArrayItems = (arr, i, j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
