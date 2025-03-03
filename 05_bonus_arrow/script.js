/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const personName = 'Mario';



// Dichiara la funzione qui.
const greetingWithName = name =>{
    const date = new Date();
    console.log(date);
    const hour = date.getHours();
    if (hour >= 0 && hour < 13){
        console.log(`Buongiorno ${name}, il buongiorno si vede dal mattino`);
    } else if (hour >= 13 && hour < 17){
        console.log(`Buon Pomeriggio ${name}, oggi fai una siesta?`);
    } else if (hour >= 17 && hour <= 23){
        console.log(`Buonasera ${name}, hai già cenato?`);
    }
    
}

// Invoca la funzione qui e stampa il risultato in console

greetingWithName(personName);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.