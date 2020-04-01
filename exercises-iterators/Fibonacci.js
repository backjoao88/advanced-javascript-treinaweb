/**
 *  Author: João Paulo Back
 *  Use of iterators. Creating your own iterator.
 * 
 * This iterator generates the fibonacci numbers. 
 * This loop doens't have a stop condition.
 * It will show the first seven numbers of the sequence.
 * 
 */


(function () {
  const Fibonacci = {
    [Symbol.iterator]() {
      let n1 = 1;
      let n2 = 1;
      return {
        [Symbol.iterator]() {
          return this;
        },
        next() {
          const current = n2;
          n2 = n1;
          n1 = n1 + current;
          return {
            value: current,
            done: false
          }
        }
      }
    }
  }
  const fib = Fibonacci[Symbol.iterator]();
  console.log(fib.next());
  console.log(fib.next());
  console.log(fib.next());
  console.log(fib.next());
  console.log(fib.next());
  console.log(fib.next());
  console.log(fib.next());
})();