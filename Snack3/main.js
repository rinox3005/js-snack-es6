'use strict';

const animals = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
];

const mammiferi = animals.filter((animals, i) => animals.classe === 'mammiferi').map(mammiferi => mammiferi.nome);

console.log(mammiferi);

// const nomeMammiferi = mammiferi;

// console.log(nomeMammiferi);