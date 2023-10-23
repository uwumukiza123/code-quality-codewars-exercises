function romamNumeralEncoder(number) {
  const romanNumbers = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    },
    output = "";

  for (let roman in romanNumbers) {
    while (number >= romanNumbers[roman]) {
      output += roman;
      number -= romanNumbers[roman];
    }
  }
  return output;
}
