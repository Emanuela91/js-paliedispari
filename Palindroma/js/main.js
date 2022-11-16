// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Dare output relativo.

let parola = prompt("inserisci una parola:");
let risultato = palindroma(parola);


// uso la funzione per stabilire la parola palindroma
function palindroma(revert){
    let parolaInversa = '';

    let i = revert.lenght - 1;

    while (i >= 0){
        parolaInversa += revert[i];
        i--;
    }

    return parolaInversa;
   
};

// controllo se la parola è uguale o no
if(parola == risultato){
    console.log('la parola è palindroma');
    } else {
    console.log('la parola non è palindroma');
}