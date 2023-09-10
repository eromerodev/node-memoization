# Memoization

Memoization is a technique used to optimize recursive or repeated function calls by storing the results of expensive function calls and returning the cached result when the same inputs occur again. 

### memoizee

`memoizee` is a popular library for memoization in JavaScript. To get started, you'll need to install the library first:

```sh
npm install memoizee
```

## Example

In this example, we import the memoize function from the memoizee library and use it to create a memoized version of the `sum` function. The memoize function automatically handles caching and memoization for us.

#### How to Test

```sh
# Install dependencies
npm i

# Run
node index.js
or 
make run
```

When you run this script, you'll see that the first call to `sum` calculates and caches the result, and subsequent calls with the same arguments retrieve the result from the cache.