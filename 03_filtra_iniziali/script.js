/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
//inizializzo una variabile contenente una lettera
const chosenLetter = "n";

// Dichiara la funzione qui.
function arraySameInitialWords (array, letter) {
    //creo un array vuoto
    let newArray = [];
    //per ogni elemento dll'array inserito tramite argomento controllo se 
    //la prima lettera dell'elemento corrispondente alla lettera inserita tramite
    //argomento. Se è vero allora inserico l'elemento all'interno dell'array vuoto
    for (i=0; i< array.length; i++) {;
        const currentWord = array[i].toLowerCase();
        if (currentWord[0] === chosenLetter){
            newArray.push(currentWord);
        }
    }
    //Controllo se l'array è vuoto, in tal caso non c'è corrispondenza tra la
    //lettera inserita tramite argomento
    //  e la la prima lettera di ogni elemento dell'array.
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