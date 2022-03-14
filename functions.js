module.exports = {
  returnTwo,
  greeting,
  add,
};

function returnTwo() {
  let x = 2;
  return x;
}

function greeting(name) {
  let result = `Hello ${name}`;
  return result;
}

function add(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

// module.exports = {
//   returnTwo: () => 2,

//   greeting: (name) =>`hello ${name}`,

//   add: (num1,num2) => num1+num2
