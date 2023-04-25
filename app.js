let name = document.querySelector('.text h1')
let age = document.querySelector('.text span')

name.addEventListener('click', () => {
    let newName = prompt('entrez votre nom et prénom')
    name.firstChild.textContent = newName
    let newAge = prompt('Entrez votre age')
    age.lastChild.textContent = newAge
})



const image = document.querySelector('#logo')
const input = document.querySelector('input')

input.addEventListener('change', (e) => {
    image.src = URL.createObjectURL(e.target.files[0])
})
