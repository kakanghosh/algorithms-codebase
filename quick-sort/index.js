const quickSort = require('./quick-sort');
const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.question('Input Numbers\n', (numberString) => {
  const numbers = numberString.split(' ').map((n) => +n);
  readLine.close();
  quickSort(numbers, 0, numbers.length - 1);
  console.log(numbers);
});
