let name = document.querySelector('.card h1')
let age = document.querySelector('.card span')

name.addEventListener('click', () => {
    let nom = prompt('entrez votre nom')
    name.firstChild.textContent = nom
    let newAge = prompt('Entrez votre age')
    age.lastChild.textContent =  newAge
})



let logo = document.querySelector('#logo')

logo.addEventListener('click', () => {
    let newLogo = prompt('Entrez le chemin de la nouvelle photo:')
    logo.src = newLogo
})