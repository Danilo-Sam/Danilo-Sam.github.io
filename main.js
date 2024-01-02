let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let close = document.getElementById('close')

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

close.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})