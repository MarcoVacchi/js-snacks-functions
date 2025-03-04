/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

const firstLetter = (myList) => {

let arrResult = []

for (let i = 0; i < myList.length; i++) {
    result = myList[i];
    arrResult.push(result[0]);
}
    return arrResult;
} 


// devo creare un array che sostituisca il vecchio array prendendo solo le iniziali di ogni parola del primo array



// Invoca la funzione qui e stampa il risultato in console
console.log(firstLetter(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]