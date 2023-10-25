function calculateAverage(numbers) {
  let sum = numbers.reduce((accumulator, number) => {
    return accumulator + number;
  }, 0);
  return sum / numbers.length;
}
