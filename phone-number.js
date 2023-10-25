function createPhoneNumber(numbers) {
    let first = numbers.slice(0, 3).join("");
    let second = numbers.slice(3, 6).join("");
    let last = numbers.slice(6, 10).join("")
    return `(${first}) ${second}-${last}`
  }