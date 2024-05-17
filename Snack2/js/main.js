'use strict';

// creo un array di oggetti
const teams = [
    { club: 'Milan', points: 0, fouls: 0 },
    { club: 'Inter', points: 0, fouls: 0 },
    { club: 'Juventus', points: 0, fouls: 0 },
    { club: 'Ternana', points: 0, fouls: 0 },
    { club: 'Palermo', points: 0, fouls: 0 },
    { club: 'Atalanta', points: 0, fouls: 0 },
    { club: 'Borussia Dortmund', points: 0, fouls: 0 }
];

// assegno ai valori delle chiavi punti e falli i numeri generati randomicamente
Object.keys(teams).forEach((club) => {
    teams[club].points = randomNumGen(1, 80);
    teams[club].fouls = randomNumGen(1, 100);
})
// creo un nuovo array di oggetti che contengono soltanto le chiavi-valori club e fouls
const newTeams = teams.map(({ club, fouls }) => ({ club, fouls }));

// stampo in console le informazioni contenute nel mio nuovo array di oggetti
newTeams.forEach((team) => {
    console.log(`The club ${team.club} ended this season with ${team.fouls} total team fouls`);
})

//funzione generazione numero random
function randomNumGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}