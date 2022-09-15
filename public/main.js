const menu = document.querySelector('#menu')
const nav = document.querySelector('#nav')


menu.addEventListener('click', () =>{
  nav.classList.toggle("hidden")
  menu.classList.toggle("menu__active")
})

const swiper = new Swiper ('.swiper',{
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    pagination: {
    el: '.swiper-pagination',
  },
})

