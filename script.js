const divideAsync = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("Error: Division by zero is not allowed");
    } else {
      resolve(a / b);
    }
  });
};

// टेस्ट केस
const testCases = [
  [10, 2],
  [10, 0]
];

testCases.forEach(([a, b], index) => {
  console.log(`Example ${index + 1}`);
  console.log(`Dividing ${a} by ${b}...`);
  
  divideAsync(a, b)
    .then(result => console.log(`Result: ${result}`))
    .catch(error => console.log(error));
});