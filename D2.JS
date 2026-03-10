/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const n1 = 7
const n2 = 15

if( n1 > n2 ){
  console.log("n1 e più grande")
 
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const NumeroIntero = 7

if(NumeroIntero !==5){
  console.log("not equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const NumeroDivisibile = 20
if( NumeroDivisibile % 5===0){
  console.log ("divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const Number1= 16
const Number2= 4 

if (
  Number1 === 8)
 {
  console.log ("condizione verificata")
 }

 if (
  Number2 === 8)
 {
  console.log ("condizione verificata")
 }

 if (
  Number1 + Number2 === 8)
 {
  console.log ("condizione verificata")
 }

//Number1 === 8 || Number2 === 8 || Number1 + Number2 === 8 ) 


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totalShoppingCart = 49
let totaleDaPagare 
if( totalShoppingCart > 50 ) {
    totaleDaPagare=totalShoppingCart
  } else  {
    totaleDaPagare=totalShoppingCart + 10 
  }
    console.log("totale da pagare", totaleDaPagare)
  

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//const totalShoppingCart = 49
//const discountTotal = totalShoppingCart *0.8
//let totaleDaPagare 
//if( discountTotal > 50 ) {
//   totaleDaPagare=discountTotal
//  } 
//  else if {
//    totaleDaPagare=discountTotal + 10 
//  }
//  console.log("totale da pagare", totaleDaPagare)

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 10
let b = 5
let c = 12

if(a < b){
    [a, b] = [b, a]
}
if( a < c){
    [a, c]=[c, a]
}
if(b < c){
    [b, c]=[c, b]
}
console.log (a, b, c,)
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const valore = 6

if( typeof valore === "number"){
  console.log( "e un numero")
} else{
  console.log("non e un numero")
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const number3 = 5
if ( number3 % 2 === 0){
  console.log("il numero e pari")
} else {
  console.log("il tuo numero e dispari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 10
  if (val < 10 && val >= 5 ) {
      console.log("Meno di 5")
    }
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: "Toronto",
}

me.skills.pop()
me.skills.splice(2, 1)



/* SCRIVI QUI LA TUA RISPOSTA */


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// ho scritto tutto sopra insieme
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num =[ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ]

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/num.pop()
num.push(100)

/* SCRIVI QUI LA TUA RISPOSTA */
