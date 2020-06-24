let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.push(11);
numbers.push(12, 13);

/* Acrescenta um novo elemento ao array na primeira posição  */
Array.prototype.insertFirstPosition = value => {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
};

numbers.insertFirstPosition(-1);

numbers.unshift(-2);
numbers.unshift(-4, -3);

/* Remover um elemento do final do array */
numbers.pop();

for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i + 1];
}

/* Remover um elemento do início do array */
Array.prototype.reIndex = function(myArray) {
  const newArray = [];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] !== undefined) {
      newArray.push(myArray[i]);
    }
  }
  return newArray;
};

// remove a primeira posição manualmente e executa reIndex
Array.prototype.removeFirstPosition = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
  return this.reIndex(this);
};

numbers = numbers.removeFirstPosition();

numbers.shift();

/* Adicionando e removendo elementos de uma posição específica */
numbers.splice(5, 3); // remove 3 elementos a partir da posição 5

numbers.splice(5, 0, 2, 3, 4); // insere os números de 2 a 4 a partir da posição 5

/* Array bidimensional e multidimensional */
let averageTemp = [];
averageTemp[0] = [72, 75, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 73];

function printMatrix(myMatrix) {
  for (let i = 0; i < myMatrix.length; i++) {
    for (let j = 0; j < myMatrix[i].length; j++) {
      //console.log(myMatrix[i][j]);
    }
  }
}

printMatrix(averageTemp);
// console.table(averageTemp);

const matrix3x3x3 = [];
for (let i = 0; i < 3; i++) {
  matrix3x3x3[i] = []; // precisamos inicializar cada array
  for (let j = 0; j < 3; j++) {
    matrix3x3x3[i][j] = [];
    for (let z = 0; z < 3; z++) {
      matrix3x3x3[i][j][z] = i + j + z;
    }
  }
}

for (let i = 0; i < matrix3x3x3.length; i++) {
  for (let j = 0; j < matrix3x3x3[i].length; j++) {
    for (let z = 0; z < matrix3x3x3[i][j].length; z++) {
      // console.log(matrix3x3x3[i][j][z]);
    }
  }
}

const zero = 0;
const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -1];

let numbers1 = negativeNumbers.concat(zero, positiveNumbers);

const isEven = x => x % 2 === 0;

let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

n.every(isEven); // itera pelos elementos do array até que a função devolva false
n.some(isEven); // itera pelos elementos do array até que a função devolva true
// n.forEach(x => console.log(x % 2 === 0));

const myMap = n.map(isEven);

const evenNumbers = n.filter(isEven);

n.reduce((previous, current) => previous + current);

for (const num of n) {
  console.log(num % 2 === 0 ? "even" : "odd");
}

let iterator = n[Symbol.iterator]();
for (const num of iterator) {
  console.log("iterator", num);
}

/* métodos entries, keys e values de array */
let aEntries = n.entries(); // obtém um iterator de chave/valor
console.log(aEntries.next().value); // [0, 1] - posição 0, valor 1

aEntries = n.entries();
for (const n of aEntries) {
  console.log(n);
}

const aKeys = n.keys();
console.log(aKeys.next());

const aValues = n.values();
console.log(aValues.next());

// Método from
let num2 = Array.from(n);
let evens = Array.from(n, x => x % 2 == 0);

// Método Array.of
let num3 = Array.of(1); // let num3 = [1];
let num4 = Array.of(1, 2, 3, 4, 5, 6); // let num4 = [1,2,3,4,5,6];

let numbersCopy = Array.of(...num4); // Array.from(num4);

// Método fill
num4.fill(0);
num4.fill(2, 1);
num4.fill(1, 3, 5);

let ones = Array(6).fill(1);

// Método copyWithin
let copyArray = [1, 2, 3, 4, 5, 6];
copyArray.copyWithin(0, 3);
console.log(copyArray);

copyArray = [1, 2, 3, 4, 5, 6];
copyArray.copyWithin(1, 3, 5);

n.reverse();
n.sort((a, b) => a - b);
/*
O código acima é o mesmo que:

function compare(a,b) {
    if(a < b) {
        return -1;
    }else if(a > b) {
        return 1;
    }
    return 0;
}
n.sort(compare);
*/
console.log(n);
