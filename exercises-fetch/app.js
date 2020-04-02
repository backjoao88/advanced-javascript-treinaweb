/**
 *  Author: João Paulo Back
 *  Use of generators. Creating your own generator.
 * 
 * Example of a async/await use and example of the method fetch.
 * 
 */

(async function () {
  let response = await fetch('https://api.github.com/search/repositories?q=javascript', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  });
  let data = await response.json();
  console.log(data);
})();