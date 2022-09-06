'use strict';

// Récuperation des elements du DOM
const btnDebut = document.getElementById('btn-debut');
const btnFin = document.getElementById('btn-fin');
const container = document.getElementById('container');
const btnInfo = document.getElementById('btn-info');

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