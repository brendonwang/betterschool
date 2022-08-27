import * as fs from 'fs';
let coin = document.getElementById("coins");
async function fetchFile(file) {
  const response = await fetch(file);
  const exam = await response.text();
  return exam;
}
// fetchFile("/coins.json").then((value) => {
//   let arr = [];
//   let prev = "";
//   for (const e of value) {
//     if (e == "\n") {
//       arr.push(prev);
//       prev = "";
//     } else {
//       prev += e;
//     }
//   }
//   arr.push(prev);
//   let username = fetchFile("/username.txt").then((result) => {
//     for (let i = 0; i < value.length; ++i) {
//       let arr2 = [];
//       prev = "";
//       for (const e of arr[i]) {
//         if (e == ' ') {
//           arr2.push(prev);
//           prev = "";
//         } else {
//           prev += e;
//         }
//       }
//       arr2.push(prev);
//       if (arr2[0] == result) {
//         coin.innerText = arr2[1];
//         break;
//       }
//     }
//   });
// });
fetchFile('/coins.json').then((value)=>{
  value = JSON.parse(value);
  fetchFile("/username.txt").then((result) => {
  if (value[result] == undefined) {
    value[result] = 0;
  } else {
    coin.innerText = value[result];
  }
  console.log(value);
  });
  fs.writeFile("coins.txt", value)
});


// let username = fetchFile("/username.txt").then(result => {});

// for (let i = 0; i < arr.length; ++i) {
//   arr[i].split(" ");
//   if (arr[i][0] == username) {
//     coin.innerText = arr[i][1];
//   }
// }
