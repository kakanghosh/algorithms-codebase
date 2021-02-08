const dataSet = [1, 1, 1, 3, 2, 2, 3];
//const dataSet = [0, 1, 3, 1, 3, 3];
let counter = 0;
function longestSubArray(numbers, low, high) {
  const set = new Set();
  for (let index = low; index <= high; index++) {
    const element = numbers[index];
    set.add(element);
  }
  const arr = Array.from(set);
  if (
    arr.length == 2 &&
    Math.abs(arr[0] - arr[1]) == 1 &&
    high - low + 1 > counter
  ) {
    counter = high - low + 1;
  }
  if (high < numbers.length - 1) {
    longestSubArray(numbers, low, high + 1);
  }
}

function makeSubArray(dataSet, start) {
  longestSubArray(dataSet, start, start + 1);
  if (start < dataSet.length - 1) {
    makeSubArray(dataSet, start + 1);
  }
}

makeSubArray(dataSet, 0);

console.log(counter);
