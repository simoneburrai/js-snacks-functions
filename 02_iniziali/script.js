/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
//Inizializzo la funzione.
function arrayInitials (array) {
    //inizializzo un array vuoto
    let newArray = [];
    //per ogni elemento dell'array inserito tramite argomento prendo la prima
    //lettera e la inserisco nell'array vuoto.
    for(i=0; i < array.length; i++) {
        newArray.push((array[i])[0]);
    }
    return newArray;
}


// Invoca la funzione qui e stampa il risultato in console
console.log(arrayInitials(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]