let coin = document.getElementById("coins");
async function fetchFile(file) {
  const response = await fetch(file);
  const exam = await response.text();
  return exam;
}
let arr = [];
fetchFile("/coins.txt").then(value => {
  value;
  console.log(value[5]);
  let username = fetchFile("/username.txt").then(result => {
    for(let i = 0; i < value.length; ++i){
      arr[i].split();
      if (arr[i][0] == result){
        coin.innerText = arr[i][1];
        break;
      }
    }
  })
  ;});
// let username = fetchFile("/username.txt").then(result => {});


// for (let i = 0; i < arr.length; ++i) {
//   arr[i].split(" ");
//   if (arr[i][0] == username) {
//     coin.innerText = arr[i][1];
//   }
// }
