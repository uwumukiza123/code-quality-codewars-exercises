function checkPrime(number) {
  let isPrime = false;
  for (let initial = 2; initial < number; initial++) {
    if (number % initial == 0) {
      isPrime = false;
      return isPrime;
    } else {
      isPrime = true;
    }
  }
  return isPrime;
}
