const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;
for (let index = 3; index < 20; index++) {
  console.log("index", index);
  console.log("index - 1", fibonacci[index - 1]);
  console.log("index - 2", fibonacci[index - 2]);
  fibonacci[index] = fibonacci[index - 1] + fibonacci[index - 2];
}
for (let index = 1; index < fibonacci.length; index++) {
  console.log(fibonacci[index]);
  console.log(fibonacci);
}
