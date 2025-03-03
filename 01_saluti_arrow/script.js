/* Scrivi una funzione che accetti una stringa contenente un nome 
e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario'; 


// Dichiara la funzione qui.
const greetingWithName = name => {
    console.log(`Ciao ${name}, è un piacere conoscerti`);
}


// Invoca la funzione qui e stampa il risultato in console

greetingWithName(userName);

//Risultato atteso se si passa 'Mario': // ciao Mario
