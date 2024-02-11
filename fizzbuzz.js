// Write a function that prints "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both

function fizzBuzz(n) {
  // Iterate from 1 to n
  for (let i = 1; i <= n; i++) {
    // Check for multiples of 3 and 5 first, using logical OR for efficiency
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// Example usage:
fizzBuzz(15);

