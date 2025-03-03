/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'pappa';


// Dichiara la funzione qui.
const vocalsCounter = word => {
    word= word.toLowerCase();
    let counter = 0;
    for(i=0; i< word.length; i++){
        const letter = word[i];
        const vocal = letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" ;
        if (vocal){
            counter++;
        }
    }
    return counter;
}

// Invoca la funzione qui e stampa il risultato in console

console.log("Il numero di vocali è ", vocalsCounter(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)