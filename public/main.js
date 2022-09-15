const menu = document.querySelector('#menu')
const nav = document.querySelector('#nav')

menu.addEventListener('click', () =>{
  nav.classList.toggle("hidden")
  menu.classList.toggle("menu__active")
})