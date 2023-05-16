let list = document.querySelectorAll('ul li')
let header = document.querySelector('header')

function active() {
  list.forEach((i) => 
  i.classList.remove('active'))
  this.classList.add('active')
}

list.forEach((i) => 
i.addEventListener('click', active))

// Modal script

const openTrailer = document.getElementById('openTrailer')
const modalContainer2 = document.getElementById('modalContainer2')
const closeTrailer = document.getElementById('closeTrailer')
const iframe = document.getElementsByTagName('iframe')[0]

openTrailer.addEventListener('click', () => {
  modalContainer2.classList.add('show')
})

closeTrailer.addEventListener('click', () => {
  modalContainer2.classList.remove('show')
  iframe.setAttribute('src', '')
  iframe.setAttribute('src', 'https://www.youtube.com/embed/jN7NkKDwAI4?controls=0')
})