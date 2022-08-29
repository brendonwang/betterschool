function reset() {
  localStorage.value = 0;
  localStorage.bought = "";
  document.getElementById('coins').innerText = localStorage.value;
  localStorage.selected = "https://cdn.glitch.global/3501ec51-0efe-4944-b3f1-a842653a5553/poke-removebg-preview.png?v=1661644487585";
  localStorage.achievements = "";
}