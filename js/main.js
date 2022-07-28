// Detectar idioma del navegador

const pais = document.querySelector('.pais')
let language = navigator.language
window.onload = function () {
  let pagActual = window.location.pathname
  if (language == 'en' && !pagActual.includes('indexEN')) {
    window.location.href = 'indexEN.html'
  } else if (language == 'es' && !pagActual.includes('index.html')) {
    window.location.href = 'index.html'
  } else {
    console.log(navigator.language)
  }
}
const api_Key = 'a46af953702c497ab6022616221507'
const request_URL = 'https://api.weatherapi.com/v1/'
const IP = `${request_URL}ip.json?key=${api_Key}&q=auto:ip`
const yourCountry = async () => {
  try {
    const response = await fetch(IP)
    const data = await response.json()
    if (response.status === 200) {
      pais.innerHTML = data.country_name
      console.log(data.country_name)
    }
  } catch (error) {
    console.error(error)
  }
}
yourCountry()

// Barra lateral

const navbarDiv = document.querySelector('.navbar__div')
const navbarDivLi = document.querySelector('.navbar__div-li')
const menuSidebar = document.getElementById('sidebar__menu')
const pathMenuSidebar = document.querySelector('.sidebar__menu-path')
const containerSidebar = document.querySelector('.container-sidebar')
const sidebar = document.querySelector('.sidebar')
document.addEventListener('click', e => {
  const click = e.target
  if (
    click == navbarDiv ||
    click == menuSidebar ||
    click == navbarDivLi ||
    click == sidebar ||
    click == pathMenuSidebar
  ) {
    containerSidebar.style.display = 'block'
  } else {
    containerSidebar.style.display = 'none'
  }
})

// Menú despegable de aplicaciones

const menu = document.getElementById('menu')
const svgMenu = document.querySelector('.svg-menu')
const menuAplicacionesPath = document.querySelector('.menu-aplicaciones__path')
const menuAplicaciones = document.getElementById('menu-aplicaciones')
document.addEventListener('click', e => {
  const click = e.target
  if (click == menu || click == svgMenu || click == menuAplicacionesPath) {
    menuAplicaciones.classList.toggle('menu-aplicaciones__display')
  } else if (
    click != menu &&
    click != svgMenu &&
    click != menuAplicacionesPath
  ) {
    menuAplicaciones.classList.remove('menu-aplicaciones__display')
  }
})

// Función de buscar en el motor de búsqueda de Google

document.onkeyup = function (event) {
  let tecla = event.keyCode
  if (tecla === 13) {
    window.location.href =
      'https://www.google.com/search?q=' +
      document.getElementById('buscador').value
  }
}

// Botón buscar con Google

const googleSearchButton = document.getElementById('google-search-button')
googleSearchButton.addEventListener('click', e => {
  window.location.href =
    'https://www.google.com/search?q=' +
    document.getElementById('buscador').value
})

// Botón me siento con suerte

const meSientoConSuerte = document.getElementById('i-feel-lucky')
meSientoConSuerte.addEventListener('click', e => {
  window.open('https://www.google.com/doodles')
})

// Menú despegable de preferencias

const preferences = document.getElementById('preferences')
const menuPreferencias = document.querySelector('.menu-preferencias')
document.addEventListener('click', e => {
  const click = e.target
  if (click == preferences) {
    menuPreferencias.classList.toggle('menu-preferencias__display')
  } else if (click != preferences) {
    menuPreferencias.classList.remove('menu-preferencias__display')
  }
})

// Modo oscuro

const theme = document.getElementById('theme')
const theme2 = document.getElementById('theme2')
const themeMode = [...document.querySelectorAll('.theme__mode')]
theme.addEventListener('click', e => {
  const body = document.body
  body.classList.toggle('dark')
  themeMode.forEach(function (element) {
    element.classList.toggle('theme__dark-mode')
  })
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'true')
  } else {
    localStorage.setItem('theme', 'false')
  }
})
theme2.addEventListener('click', e => {
  const body = document.body
  body.classList.toggle('dark')
  themeMode.forEach(function (element) {
    element.classList.toggle('theme__dark-mode')
  })
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'true')
  } else {
    localStorage.setItem('theme', 'false')
  }
})
if (localStorage.getItem('theme') === 'true') {
  document.body.classList.add('dark')
  themeMode.forEach(function (element) {
    element.classList.add('theme__dark-mode')
  })
  theme.innerHTML = 'Dark mode: on'
  theme2.innerHTML = 'Dark mode: on'
} else if (localStorage.getItem('theme') === 'false') {
  document.body.classList.remove('dark')
  themeMode.forEach(function (element) {
    element.classList.remove('theme__dark-mode')
  })
  theme.innerHTML = 'Dark mode: off'
  theme2.innerHTML = 'Dark mode: off'
}
function darkMode () {
  if (
    theme.innerHTML == 'Dark mode: off' &&
    theme2.innerHTML == 'Dark mode: off' &&
    language == 'en'
  ) {
    theme.innerHTML = 'Dark mode: on'
    theme2.innerHTML = 'Dark mode: on'
  } else if (
    theme.innerHTML == 'Dark mode: on' &&
    theme2.innerHTML == 'Dark mode: on' &&
    language == 'en'
  ) {
    theme.innerHTML = 'Dark mode: off'
    theme2.innerHTML = 'Dark mode: off'
  }
}

if (localStorage.getItem('theme') === 'true') {
  document.body.classList.add('dark')
  themeMode.forEach(function (element) {
    element.classList.add('theme__dark-mode')
  })
  theme.innerHTML = 'Tema oscuro: Activado'
  theme2.innerHTML = 'Tema oscuro: Activado'
} else if (localStorage.getItem('theme') === 'false') {
  document.body.classList.remove('dark')
  themeMode.forEach(function (element) {
    element.classList.remove('theme__dark-mode')
  })
  theme.innerHTML = 'Tema oscuro: Desactivado'
  theme2.innerHTML = 'Tema oscuro: Desactivado'
}
function modoOscuro () {
  if (
    theme.innerHTML == 'Tema oscuro: Desactivado' &&
    theme2.innerHTML == 'Tema oscuro: Desactivado' &&
    language == 'es'
  ) {
    theme.innerHTML = 'Tema oscuro: Activado'
    theme2.innerHTML = 'Tema oscuro: Activado'
  } else if (
    theme.innerHTML == 'Tema oscuro: Activado' &&
    theme2.innerHTML == 'Tema oscuro: Activado' &&
    language == 'es'
  ) {
    theme.innerHTML = 'Tema oscuro: Desactivado'
    theme2.innerHTML = 'Tema oscuro: Desactivado'
  }
}
