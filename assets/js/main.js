//Esercizio 1
//Dichiara una variabile chiamata 'number' e assegnale il valore 100. Stampa il valore della variabile in console.

let number = 100; //number
console.log(number);

//Esercizio 2
//Dichiara una costante chiamata 'PI' e assegnale il valore di "3.14". Stampa il valore della costante in console.

const PI = 3.14; //number
console.log(PI);

//Esercizio 2/B
//Prova ad assegnare alla costante chiamata 'PI' il valore di "3.1416". Sai dire cosa succede?

/*  PI = 3.1416; //Una costante non è riassegnabile e quindi si ottiene un errore
    console.log(PI);
*/

//Esercizio 2/C
/*  Dichiara una variabile chiamata 'radius' e assegnale il valore "8".
    Moltiplica radius x 2 e x 'PI' e assegna il valore a una variabile di nome 'circle'.
    Stampa il valore della variabile circle in console.
*/

let radius = 8;
let circle = radius * 2 * PI;
console.log(circle); //Number

//Esercizio 3
/*  Dichiara una variabile chiamata 'name' e
    assegnale il valore "Carlo".
    Successivamente, modifica il valore della variabile in "Marco".
    Stampa il nuovo valore in console. */

let name = "Carlo"; //String
name = "Marco"; //String
console.log(name);

//Esercizio 4
/*  Dichiara una variabile chiamata 'temperature' e assegnale il valore "22.5".
    Successivamente, aumenta il suo valore di "5" e stampa il nuovo valore in console. 
*/

let temperature = 22.5;
temperature += 5;
console.log(+ temperature);