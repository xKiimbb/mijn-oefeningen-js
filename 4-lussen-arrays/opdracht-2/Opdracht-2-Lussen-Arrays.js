// 1) Schrijf een functie genaamd telOp.
// 2) De functie accepteert een array van getallen.
// 3) De functie geeft de som van alle getallen in de array terug.
// 4) Test de functie met de array [5, 10, 15] en print het resultaat.

function telOp(array) {
  let Totaal = 0;
  for (let i = 0; i < array.length; i++) {
    Totaal += array[i];
  }
  return Totaal;
}

console.log(telOp([5, 10, 15]));
