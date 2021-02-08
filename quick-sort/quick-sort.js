function quickSort(numbers, low, high) {
  if (low < high) {
    const pi = partition(numbers, low, high);
    quickSort(numbers, low, pi - 1);
    quickSort(numbers, pi + 1, high);
  }
}

function partition(numbers, low, high) {
  const pivot = numbers[low];
  let start = low;
  let end = high;
  while (start < end) {
    while (start < numbers.length - 1 && numbers[start] <= pivot) {
      start++;
    }
    while (numbers[end] > pivot) {
      end--;
    }
    if (start < end) {
      swap(numbers, start, end);
    }
  }
  swap(numbers, low, end);
  return end;
}

function swap(numbers, i, j) {
  const temp = numbers[i];
  numbers[i] = numbers[j];
  numbers[j] = temp;
}

module.exports = quickSort;
