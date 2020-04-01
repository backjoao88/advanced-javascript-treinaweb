/**
 *  Author: João Paulo Back
 *  Use of iterators. Iterating over a string of characters.
 * 
 */

(function () {
  const str = 'TreinaWeb';
  const iterator = str[Symbol.iterator]();
  for (number of iterator) {
    console.log(number)
  }
})();