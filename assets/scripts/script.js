'use strict';

// Récuperation des elements du DOM
const btnDebut = document.getElementById('btn-debut');
const btnFin = document.getElementById('btn-fin');
const container = document.getElementById('container');
const btnInfo = document.getElementById('btn-info');
const btnModern = document.getElementById('btn-modern');

// Ajout d'un element au "fin" du container
let count = 0;
btnFin.addEventListener('click', () => {

    // Création d'élément HTML
    // → Celle-ci n'est pas ajouter dans la page Web !!!!
    const balise = document.createElement('p');
    console.log(balise);    // <p></p>

    // Modifier la balise créée
    balise.setAttribute('title', 'demo');
    console.log(balise);    // <p title="demo"></p>

    balise.innerText = `Ajout ${count} !!!`;
    console.log(balise);    // <p title="demo">Ajout !!!</p>

    balise.classList.add('jennifer');
    console.log(balise);    // <p title="demo" class="jennifer">Ajout !!!</p>

    // Ajouter la balise créée dans la div "container"
    container.appendChild(balise);

    // Incrementation du compteur
    count++;    // Alternative : count = count + 1;
});

// Les méthodes pour obtenir les elements d'une balise
btnInfo.addEventListener('click', () => {

    // - Toutes balises contenues dans la balise parent
    const allBalise = container.children;
    console.log(allBalise);

    // - La premiere balise enfant de la balise parent
    const premiereBalise = container.firstElementChild;
    console.log(premiereBalise);

    // - La derniere balise enfant de la balise parent
    const derniereBalise = container.lastElementChild;
})

// Ajouter un element au debut de la 'liste'
// → En tant que premiere enfant de la balise
btnDebut.addEventListener('click', () => {

    // Créer la balise suivante : 
    // <p>Heure : <span class="vert">11:08:30<span><p>

    // - La balise principal
    const nouvelleBalise = document.createElement('p');
    nouvelleBalise.innerText = 'Heure : ';

    // - La balise interne (heure)
    const heureBalise = document.createElement('span');
    heureBalise.classList.add('vert');

    const now = new Date();
    heureBalise.innerText = now.toLocaleTimeString();

    // - Combinaison des 2 balises
    nouvelleBalise.appendChild(heureBalise);

    // Ajouter la balise en tant que premier element
    const premiereBalise = container.firstElementChild;
    container.insertBefore(nouvelleBalise, premiereBalise);
});

btnModern.addEventListener('click', () => {
    // Depuis fin 2016, il est possible d'utiliser : 
    //  - append(...)  → Ajout en dernier element
    //  - prepend(...) → Ajout en premier element
    // Ces deux méthode accepte les Nodes HTML et le text

    const balise1 = document.createElement('p');
    balise1.innerText = 'Jennifer';
    container.prepend(balise1);

    const balise2 = document.createElement('p');
    balise2.innerText = 'Gaelle';
    container.append(balise2);
})

