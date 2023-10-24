function calculateFactorial(number) {
  number <= 1 ? 1 : number * calculateFactorial(number - 1);
}
