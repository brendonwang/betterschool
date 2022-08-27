let coins = document.getElementById("coins");

function getText(){
    // read text from URL location
    var request = new XMLHttpRequest();
    request.open('GET', 'https://betterschool.glitch.me/coins.txt', true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var type = request.getResponseHeader('Content-Type');
            if (type.indexOf("text") !== 1) {
                return request.responseText;
            }
        }
    }
}
function getText2(){
    // read text from URL location
    var request = new XMLHttpRequest();
    request.open('GET', 'https://betterschool.glitch.me/username.txt', true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var type = request.getResponseHeader('Content-Type');
            if (type.indexOf("text") !== 1) {
                return request.responseText;
            }
        }
    }
}
let arr = []
fetch("https://betterschool.glitch.me/coins.txt").then((r)=>{r.text().then((d)=>{arr = (d.split('\n')).split(' ')})})

let username = "";
fetch("https://betterschool.glitch.me/username.txt").then((r)=>{r.text().then((d)=>{username = d})})

for (let i = 0; i < arr.length; ++i){
  if (arr[i][0] == username){
    coins.innerText = arr[i][1]
  }
}