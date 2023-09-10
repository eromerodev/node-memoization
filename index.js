const memoize = require('memoizee');

// Example function to be memoized
const sum = (a, b) => {
  console.log(`Calculating sum of ${a} and ${b}`);
  return a + b;
};

// Create a memoized version of the sum function
const memoizedSum = memoize(sum);

// Test the memoized function
console.log(memoizedSum(2, 3)); // Calculate and cache the result
console.log(memoizedSum(2, 3)); // Retrieve the result from the cache
console.log(memoizedSum(4, 5)); // Calculate and cache a new result
console.log(memoizedSum(4, 5)); // Retrieve the new result from the cache