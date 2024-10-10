// 1) Declareer een variabele genaamd a met de waarde 10.
// 2) Declareer een variabele genaamd b met de waarde 20.
// 3) Wissel de waarden van a en b zonder nieuwe variabelen te declareren.
// 4) Print de waarden van a en b na het wisselen.

let a = 10;
let b = 20;

a = a + b;
b = a - b;
a = a - b;

console.log(a);
console.log(b);
