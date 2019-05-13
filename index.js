function findMinAndRemove(array){
  let min = array[0]
  let minIndex = 0
  for (let i = 0; i < array.length; i++){
    let currentElement = array[i]
    if (currentElement < min){
      min = currentElement
      minIndex = i
    }
  }
  array.splice(minIndex,1)
  return min
}

function insertionSort(array){
  let min
  let sorted = []
  while (array.length != 0){
    min = findMinAndRemove(array)
    sorted.push(min)
  }
  return sorted
}
