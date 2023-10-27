const checkPrime = number => {
  let squareRoot = Math.sqrt(number)
    for(let i = 2; i <= squareRoot; i++) {
        if(number % i === 0) return false;
    }
    return number > 1;
}