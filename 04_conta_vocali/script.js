/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


//Dichiara la funzione qui.
const vocal = (param) => {
let count = 0;
for (let i = 0; i < param.length; i++) {
let result = param[i];
if (result === 'a'|| result === 'e' || result ==='i' || result === 'o' || result === 'u' || result === 'A'|| result === 'E' || result ==='I' || result === 'O' || result === 'U'){
    count ++;
}
}
    return count;
}

vocal(word)
console.log(vocal(word))

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'javascript': 3 (a, a, i)