/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

//const userName = prompt('inserisci un nome utente');
const userName = 'Mario';


// Dichiara la funzione qui.

    const myFunct = (saluto) => { 
    saluto = `ciao ${userName}`
    return saluto;
} 

/*
    function myFunct (saluto) { 
    saluto = `ciao ${userName}`
    return saluto;
} /*

// dichiaro la mia funzione che verificherà che venga inserita una stringa, e restituisca un saluto


// Invoca la funzione qui e stampa il risultato in console

console.log(myFunct(userName));


//Risultato atteso se si passa 'Mario': // ciao Mario
