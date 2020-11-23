const oddsAndEvens = [13, 3, 4, 10, 7, 2];
let array = [];

for (let index = 0; index < oddsAndEvens.length; index++) {
  for (let indexI = 0; indexI < oddsAndEvens.length; indexI++) {
    if (oddsAndEvens[index] < oddsAndEvens[indexI]) {
      oddsAndEvens.push(oddsAndEvens[index]);
    }
  }
}

console.log(array);
