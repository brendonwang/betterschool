avatarimg = document.getElementById('avatar-nav');
if (localStorage.selected == undefined || localStorage.selected == ""){
  localStorage.selected = "https://cdn.glitch.global/3501ec51-0efe-4944-b3f1-a842653a5553/poke-removebg-preview.png?v=1661644487585"
}
console.log(avatarimg)
avatarimg.src = localStorage.selected;