const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split('\n');
  for (let i = 0; i < arr.length; i++){
    arr[i].split(' ')
  }

  return arr;
}
document.forms['myFormId'].addEventListener('submit', (event) => {
    event.preventDefault();
    // TODO do something here to show user that form is being submitted
    fetch(event.target.action, {
        method: 'POST',
        body: new URLSearchParams(new FormData(event.target)) // event.target is the form
    }).then((resp) => {
        return resp.json(); // or resp.text() or whatever the server sends
    }).then((body) => {
        // TODO handle body
    }).catch((error) => {
        // TODO handle error
    });
});
let logins = syncReadFile("logins.txt");
if (logins[0] == )