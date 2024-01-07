// Toggle Menu
function menuToggle(){

  const menuToggle = document.getElementById("menuToggle");
  const navigation = document.getElementById("navigation");

  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}

// Dark Mode
let body = document.querySelector('body');
let dark = document.querySelector('#dark');

dark.onclick = function (){

  if(dark.checked == true){
    body.classList.add('darkMode');
  } else {
    body.classList.remove('darkMode');
  }
}