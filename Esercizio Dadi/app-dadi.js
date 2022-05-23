/*Generare più  numeri random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
C’è forse un array da qualche parte?
Se dobbiamo confrontare qualcosa che “cosa” ci serve?*/

//creo 2 liste di numeri(una per il giocatore e una per il computer)

const listaGiocatore = [];
const listaComputer = [];
//creo 2 variabili che contengano la somma dei numeri casuali
let totaleGiocatore = 0;
let totaleComputer = 0;
//creo un ciclo per ottenere le 2 somme
for (let i = 0; i < 6; i++) {
    listaGiocatore[i] = Math.floor(Math.random() * 6) + 1;
    listaComputer[i] = Math.floor(Math.random() * 6) + 1;
    totaleGiocatore += listaGiocatore[i];
    totaleComputer += listaComputer[i];
}

//non capisco perchè non funziona con querySelector
let risultato = document.getElementById("risultato");
risultato.innerHTML = `Giocatore: ${totaleGiocatore}  VS  Computer: ${totaleComputer}`

if (totaleGiocatore > totaleComputer) {
    alert("Congratulazioni:Hai vinto!")
}else if (totaleGiocatore < totaleComputer) {
    alert("Peccato :Hai perso!")
}else {
    alert("Un pareggio: poteva andare peggio!")
}
