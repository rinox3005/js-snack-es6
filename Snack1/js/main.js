'use strict';

// creo un array di oggetti
const bikes = [
    // { model: 'Mountain Bike', weight: 17 },
    // { model: 'City Bike', weight: 12.7 },
    // { model: 'BMX Bike', weight: 27 },
    // { model: 'Canyon Spectral Bike', weight: 9.1 },
    // { model: 'Eleglide Bike', weight: 7.3 },
    // { model: 'Carbon Bike', weight: 21 },
];

// inserisco in un array tutti i valori dei pesi
const weight = bikes.map(bikes => bikes.weight);

// ordino i valori dell'array appena creato in ordine crescente 
weight.sort(function (a, b) {
    return a - b;
});

// prendo il valore in posizione 0 dell'array appena creato che corrisponderá al numero piú basso e quindi al peso minore
const lighterBike = bikes.filter((bikes) => bikes.weight === weight[0]);

// stampo in console l'oggetto che corrisponde alla bici o alle bici con il peso minore
console.log(lighterBike);

// controllo se non ci sono bici presenti in lista
if (lighterBike.length === 0) {
    console.log(`There are no bikes in the list`);
}

// ciclo dentro il nuovo array per stampare le informazioni al suo interno tramite template literal
lighterBike.forEach((bike) => {
    console.log(`The lightest bike is the ${[bike.model]} with a weight of ${bike.weight} kg`);
})
