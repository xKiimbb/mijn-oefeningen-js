// 1) Schrijf een functie genaamd groet.
// 2) De functie accepteert één parameter, tijd.
// 3) Als tijd kleiner is dan 12, print "Goedemorgen".
// 4) Als tijd tussen 12 en 18 is, print "Goedemiddag".
// 5) Als tijd groter of gelijk is aan 18, print "Goedenavond".

function groet(tijd) {
  if (tijd < 12) {
    return "Goedemorgen";
  } else if (tijd < 18) {
    return "Goedemiddag";
  } else {
    return "Goedenavond";
  }
}

console.log(groet(5));
console.log(groet(15));
console.log(groet(20));
