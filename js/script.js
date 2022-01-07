const muBurger = document.querySelector('.burger')
const myMenu = document.querySelector('.menu')

muBurger.addEventListener('click', () => {
    myMenu.classList.toggle('show')
    document.body.classList.toggle('o-hidden')
})

menuLinks.forEach(oneLink => {
    oneLink.addEventListener('click', () => {
        myMenu.classList.remove('show')
        document.body.classList.toggle('o-hidden')
    })
})