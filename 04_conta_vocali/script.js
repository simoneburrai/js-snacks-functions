/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'precipitevolissimevolmente';


// Dichiara la funzione qui.
function vocalsCounter (word) {
    // la parola diventa tutta minuscola
    word= word.toLowerCase();
    //creo un contatore per il numero di vocali presenti all'interno della parola
    let counter = 0;
    //per ogni lettera della parola inserita controllo se ogni lettera della parola
    // è una vocale
    for(i=0; i< word.length; i++){
        const letter = word[i];
        //creo un valore booleano per la vocale, se true allora è una vocale
        const vocal = letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" ;
        if (vocal){
            //se è una vocale allora aumento il contatore
            counter++;
        }
    }
    return counter;
}

// Invoca la funzione qui e stampa il risultato in console

console.log("Il numero di vocali è ", vocalsCounter(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)