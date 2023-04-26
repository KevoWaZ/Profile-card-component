// Récupérer l'élément du DOM pour le corps de la page
const body = document.querySelector('body');

// Ajouter une classe pour cacher le contenu pendant la première seconde
body.classList.add('hidden');

// Attendre 0.2 seconde avant de supprimer la classe pour afficher le contenu
setTimeout(() => {
    body.classList.remove('hidden');
}, 200);


// Récupérer les éléments du DOM
const name = document.querySelector('.text h1');
const age = document.querySelector('.text span');
const image = document.querySelector('#logo');
const input = document.querySelector('input');

window.onload = () => {
    // Vérifier s'il y a des données stockées pour le nom, l'âge et l'image
    const storedName = localStorage.getItem('name');
    const storedAge = localStorage.getItem('age');
    const storedImage = localStorage.getItem('image');
    if (storedName && storedAge) {
        name.firstChild.textContent = storedName;
        age.lastChild.textContent = storedAge;
    }
    if (storedImage) {
        image.src = storedImage;
    }

    // Ajouter un événement au clic sur le nom pour changer les valeurs et les stocker
    name.addEventListener('click', () => {
        const newName = prompt('Entrez votre nom et prénom');
        const newAge = prompt('Entrez votre âge');

        // Vérifier si le nom et l'âge ont été saisis avant de mettre à jour le contenu et de stocker les nouvelles valeurs
        if (newName && newAge) {
            name.firstChild.textContent = newName;
            age.lastChild.textContent = newAge;

            localStorage.setItem('name', newName);
            localStorage.setItem('age', newAge);
        }
    });

    // Ajouter un événement pour changer l'image en fonction du fichier sélectionné par l'utilisateur et la stocker
    input.addEventListener('change', (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.addEventListener('load', () => {
            image.src = reader.result;
            localStorage.setItem('image', reader.result);
        });

        reader.readAsDataURL(file);
    });
};
