/**
 *  Author: João Paulo Back
 *  Use of iterators. Creating your own iterator.
 * 
 * This iterator generates even numbers. When a odd number is generated,
 * the loop stop.
 * 
 */


(function () {
  const RandomNumbers = {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      const number = Math.floor(Math.random() * 5),
        isEven = (number % 2);
      return {
        value: number,
        done: !isEven
      }
    }
  }
  const numbers = RandomNumbers[Symbol.iterator]();
  console.log([...numbers])
})();