function getSum(arrayOfNumbers) {
  let sum = arrayOfNumbers.shift();
  if (arrayOfNumbers.length > 0) {
    sum += getSum(arrayOfNumbers);
  }
  return sum;
}
