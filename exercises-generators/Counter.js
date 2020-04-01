/**
 *  Author: João Paulo Back
 *  Use of generators. Creating your own generator.
 * 
 * This function will execute as usual until it find the first "yield".
 * Yield means that the function will return a value and then it will be paused.
 * 
 * The next() method receive the returned value by yield.
 * 
 */


(function () {
  function* myCounter() {
    let i = 0;
    while (true) {
      yield i++;
    }
  }

  let counter = myCounter();
  let counterValue = 0;
  counterValue = counter.next();
  console.log(counterValue);
  counterValue = counter.next();
  console.log(counterValue);
  counterValue = counter.next();
  console.log(counterValue);
  counterValue = counter.next();
  console.log(counterValue);
  counterValue = counter.next();
  console.log(counterValue);

})();