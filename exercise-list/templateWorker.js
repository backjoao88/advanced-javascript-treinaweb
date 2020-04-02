/**
 *  Author: João Paulo Back
 *  Use of generators. Creating your own generator.
 *  Worker that handle the renderization of items in the list.
 *  It waits for a message that contains the data to be renderized and then
 *  perform the render.When it finish the renderization, it sends a message 
 *  containing the data renderized to the interface handler.
 * 
 */


self.onmessage = function ({
  data
}) {
  const template = render(data);
  postMessage(template);
}

function render(
  data
) {
  let html = '';
  data.forEach(item => {
    html += `
      <li>
        <h2>${item.name}</h2>
        <h3>${item.id}</h3>
      </li>
    `;

  });
  return html;
}