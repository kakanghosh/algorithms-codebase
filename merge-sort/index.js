const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.question('Input Numbers\n', (numberString) => {
  const numbers = numberString.split(' ').map((n) => +n);
  readLine.close();
  mergeSort(numbers, 0, numbers.length - 1);
  console.log(numbers);
});

function mergeSort(numbers, lowerBound, upperBound) {
  if (lowerBound < upperBound) {
    const mid = Math.floor((lowerBound + upperBound) / 2);
    mergeSort(numbers, lowerBound, mid);
    mergeSort(numbers, mid + 1, upperBound);
    merge(numbers, lowerBound, mid, upperBound);
  }
}

function merge(numbers, lowerBound, midPoint, upperBound) {
  let { i, j, arr } = compareWithTwoSubArray(
    numbers,
    lowerBound,
    midPoint,
    upperBound
  );
  arr = checkIfAnySubArrayIsLeft(numbers, arr, midPoint, upperBound, i, j);
  copySortedSubArrayToOriginalArray(numbers, arr, lowerBound, upperBound);
  // console.log(numbers);
}

function compareWithTwoSubArray(numbers, lowerBound, midPoint, upperBound) {
  let i = lowerBound;
  let j = midPoint + 1;
  let arr = [];
  // i range lower bound to mid
  // j range mid + 1 to upper bound
  while (i <= midPoint && j <= upperBound) {
    if (numbers[i] <= numbers[j]) {
      arr.push(numbers[i]);
      i++;
    } else {
      arr.push(numbers[j]);
      j++;
    }
  }
  return { i, j, arr };
}

function checkIfAnySubArrayIsLeft(numbers, arr, midPoint, upperBound, i, j) {
  if (i > midPoint) {
    // if left side sub array is done
    while (j <= upperBound) {
      arr.push(numbers[j]);
      j++;
    }
  } else {
    // if right side sub array is done
    while (i <= midPoint) {
      arr.push(numbers[i]);
      i++;
    }
  }
  return arr;
}

function copySortedSubArrayToOriginalArray(
  numbers,
  arr,
  lowerBound,
  upperBound
) {
  for (let i = lowerBound; i <= upperBound; i++) {
    numbers[i] = arr.shift();
  }
}
