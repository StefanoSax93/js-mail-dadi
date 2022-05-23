/*Creare un array con un numero a piacere di elementi.
Stampare a schermo, con un ciclo, gli ultimi 5 elementi dell’array.
Attenzione #1: quanti elementi minimo dovrà contenere l’array?
Attenzione #2: il ciclo deve essere costruito per estrarre gli ultimi elementi da qualsiasi array,
anche se non conosciamo a priori quanti elementi contiene.*/

let randomArray = [1,2,3,,4,5,6,7,8,9];
let l = randomArray.length;

for (let i = l-5; i < l; i++) {
    let list = document.getElementById("list")
    list.innerHTML += `${i}`
}
