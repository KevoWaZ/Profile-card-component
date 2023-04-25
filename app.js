let name = document.querySelector('.text h1')
let age = document.querySelector('.text span')

name.addEventListener('click', () => {
    let newName = prompt('entrez votre nom et prénom')
    name.firstChild.textContent = newName
    let newAge = prompt('Entrez votre age')
    age.lastChild.textContent = newAge
})



let logo = document.querySelector('#logo')

logo.addEventListener('click', () => {
    let newLogo = prompt('Entrez le chemin de la nouvelle photo:')
    logo.src = newLogo
})
