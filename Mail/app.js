/*Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
(non usare includes() o indexOf)*/

// creo una variabile per l'input e-mail
const inputEmail = prompt("Inserisci la tua e-mail");

// creo un array per la lista di chi può accedere
const userAllowed = ["pippo@gmail.com","pluto@gmail.com","paperino@gmail.com"]

console.log(userAllowed)

//controllo che l'input sia nella lista
for (let i = 0; i < userAllowed.length; i++) {
    const element = userAllowed[i]
    console.log(element)
    if (element === inputEmail) {
        alert("Welcome")
        const userEmail = document.getElementById("userEmail");
        userEmail.innerHTML = `La tua e-mail è: ${inputEmail}`;
    }
};





