/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const chosenLetter = "n";

// Dichiara la funzione qui.
function arraySameInitialWords (array, letter) {
    let newArray = [];
    for (i=0; i< array.length; i++) {;
        const currentWord = array[i].toLowerCase();
        if (currentWord[0] === chosenLetter){
            newArray.push(currentWord);
        }
    }
    if (newArray.length === 0){
        console.log("Non ci sono parole che iniziano per", letter);
    }
    else {
        return newArray;
    }
   
}

// Invoca la funzione qui e stampa il risultato in console

console.log(arraySameInitialWords(names, chosenLetter));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]