let coins = document.getElementById("coins");
let arr = []
fetch("https://betterschool.glitch.me/coins.txt").then((r)=>{r.text().then((d)=>{arr = (d.split('\n'))})})
let username = "";
fetch("https://betterschool.glitch.me/username.txt").then((r)=>{r.text().then((d)=>{username = d})})

for (let i = 0; i < arr.length; ++i){
  arr[i].split(' ')
  if (arr[i][0] == username){
    coins.innerText = arr[i][1]
  }
}