let images = ["https://cdn.glitch.global/3501ec51-0efe-4944-b3f1-a842653a5553/poke-removebg-preview.png?v=1661644487585", "https://cdn.glitch.global/3501ec51-0efe-4944-b3f1-a842653a5553/alolandugtrio-removebg-preview.png?v=1661659527596", "https://cdn.glitch.global/3501ec51-0efe-4944-b3f1-a842653a5553/piplups-removebg-preview.png?v=1661694429183","https://cdn.glitch.global/3501ec51-0efe-4944-b3f1-a842653a5553/charizard-removebg-preview.png?v=1661655124850","https://cdn.glitch.global/3501ec51-0efe-4944-b3f1-a842653a5553/palkia2-removebg-preview.png?v=1661646060005", "https://cdn.glitch.global/3501ec51-0efe-4944-b3f1-a842653a5553/dialga-removebg-preview.png?v=1661639887650", "https://cdn.glitch.global/3501ec51-0efe-4944-b3f1-a842653a5553/giratina-removebg-preview.png?v=1661645527761", "https://cdn.glitch.global/3501ec51-0efe-4944-b3f1-a842653a5553/martinis-removebg-preview.png?v=1661694567838", "https://cdn.glitch.global/3501ec51-0efe-4944-b3f1-a842653a5553/rayray-removebg-preview.png?v=1661712158271", "https://cdn.glitch.global/3501ec51-0efe-4944-b3f1-a842653a5553/arceus-removebg-preview.png?v=1661639967015"];
let prices = ['0', '20', '30', '50', '70', '100', '250', '500', '1000','2000'];
if (localStorage.bought == undefined || localStorage.bought == ""){
  localStorage.bought = JSON.stringify(["https://cdn.glitch.global/3501ec51-0efe-4944-b3f1-a842653a5553/poke-removebg-preview.png?v=1661644487585"]);
}
let bought = JSON.parse(localStorage.bought)

var i = 0;

function left() {
  const avatar = document.getElementById("avatar")
  const buyButton = document.getElementById("buy")

  i--;
  if (i == -1) {
    i = images.length - 1;
  }
  if (!(bought.includes(images[i]))){
    document.getElementById('no').style.display = "inline";
    buyButton.innerText = "Buy: "+prices[i]+" coins";

  } else{
    document.getElementById('no').style.display = "none"
    localStorage.selected = images[i];
    document.getElementById('avatar-nav').src = localStorage.selected;
    document.getElementById('buy').innerText = "Bought";
  
  }
  avatar.src = images[i];
  console.log(i);
}
function right() {
  const avatar = document.getElementById("avatar")
  const buyButton = document.getElementById("buy")


  i++;
  if (i == images.length) {
    i = 0;
  }
  if (!(bought.includes(images[i]))){
    document.getElementById('no').style.display = "inline";
    buyButton.innerText = "Buy: "+prices[i]+" coins";

  } else{
    document.getElementById('no').style.display = "none"
    localStorage.selected = images[i];
    document.getElementById('avatar-nav').src = localStorage.selected;
    document.getElementById('buy').innerText = "Bought";
  
  }
  avatar.src = images[i];

}
function buy() {

  if (!(bought.includes(images[i]))){
    console.log(images[i]);
    if (parseInt(prices[i]) <= localStorage.value) {
      bought.push(images[i]);

      localStorage.value -= parseInt(prices[i]);
      document.getElementById('no').style.display = "none";
      document.getElementById('coins').innerText = localStorage.value;
      document.getElementById('buy').innerText = "Bought";
      localStorage.selected = images[i]
      document.getElementById('avatar-nav').src = localStorage.selected;
      localStorage.bought = JSON.stringify(bought);
    }
  
  } else{
    document.getElementById('buy').innerText = "Bought";
  }
}
function getcoins(){
  localStorage.value = "99999";
  document.getElementById('coins').innerText = localStorage.value;
}
document.getElementById('poke').style.display = "none";

function shop(){
  document.getElementById('shop').style.display = "none";
  document.getElementById('poke').style.display = "block";
}