/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
const bothLetter = (nomiPersone, imput) => {

    let filterName = []

   for (let i = 0; i < nomiPersone.length; i++) {

    let list = nomiPersone[i]

        if (list [0] === imput) {
            filterName.push(list)
        } 
   }
   return filterName;
   
}

bothLetter(names, 'A');
console.log(bothLetter(names,'A'));
// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]