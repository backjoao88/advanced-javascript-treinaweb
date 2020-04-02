/**
 *  Author: João Paulo Back
 *  Use of generators. Creating your own generator.
 * 
 * Javascript functions that generates a list with informations about GitHub repositories.
 * 
 */



/**
 * Function that calls the worker present on templateWorker.js file.
 * This worker handle the renderization of the items in the list.
 * 
 */

const TemplateWorker = (function () {
  const templateWorker = new Worker('./templateWorker.js');
  return templateWorker;
})();


/**
 * Function responsible to handle the template of the list.
 * 
 */

const Template = (function ($templateWorker) {

  let listItems = [];
  let listElement = document.querySelector('#listElement');

  let setList = function (list) {
    listItems = list;
    render();
  }

  function render() {
    $templateWorker.postMessage(listItems);
    $templateWorker.onmessage = function ({
      data
    }) {
      listElement.innerHTML = data;
    }
  }

  return {
    setList: setList
  }
})(TemplateWorker);

/**
 * Function responsible to fetch and handle the data of the list.
 * 
 */

const Data = (function ($template) {

  const searchInput = document.querySelector('#search');
  searchInput.addEventListener('keyup', search);

  async function search(event) {
    if (event && event.keyCode == 13) {
      const searchQuery = searchInput.value;
      const response = await fetch(`https://api.github.com/search/repositories?q=${searchQuery}`);
      const data = await response.json();
      $template.setList(data.items);
    }
  }
})(Template);