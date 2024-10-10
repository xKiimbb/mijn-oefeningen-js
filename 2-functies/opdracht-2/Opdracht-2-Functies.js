// 1) Schrijf een functie genaamd isEven.
// 2) De functie accepteert één parameter, getal.
// 3) De functie geeft true terug als het getal even is, anders false.
// 4) Test de functie met de getallen 4 en 5 en print de resultaten.

function isEven(getal) {
  if (getal % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(4));
console.log(isEven(5));
