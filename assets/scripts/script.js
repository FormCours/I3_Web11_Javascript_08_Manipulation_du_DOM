'use strict';

// Récuperation des elements du DOM
const btnDebut = document.getElementById('btn-debut');
const btnFin = document.getElementById('btn-fin');
const container = document.getElementById('container');

// Ajout d'un element au "fin" du container
btnFin.addEventListener('click', () => {

    // Création d'élément HTML
    // → Celle-ci n'est pas ajouter dans la page Web !!!!
    const balise = document.createElement('p');
    console.log(balise);    // <p></p>

    // Modifier la balise créée
    balise.setAttribute('title', 'demo');
    console.log(balise);    // <p title="demo"></p>

    balise.innerText = 'Ajout !!!';
    console.log(balise);    // <p title="demo">Ajout !!!</p>

    balise.classList.add('jennifer');
    console.log(balise);    // <p title="demo" class="jennifer">Ajout !!!</p>

    // Ajouter la balise créée dans la div "container"
    container.appendChild(balise);
});