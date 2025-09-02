// console.log("Start");

// function waitThreeSeconds() {
//     const start = Date.now();

//     console.log(start);
//     // while (Date.now() - start < 5000) {
//     //     // Busy wait for 3 seconds (blocks everything)
//     // }
// }

// waitThreeSeconds();

// console.log("End");

// const now = new Date();

// console.log(now.getFullYear())    // 2025
// console.log(now.getMonth())       // 8 (September)
// console.log(now.getDate())        // 2
// console.log(now.getDay())         // 2 (0 = Sunday, 6 = Saturday)
// console.log(now.getHours())       // e.g., 14
// console.log(now.getMinutes())     // e.g., 33
// console.log(now.getSeconds())     // e.g., 59
// console.log(now.getMilliseconds())// e.g., 123



// const months = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
// ];

// const date = new Date();
// const monthName = months[date.getMonth()];

// console.log(monthName); // e.g., "September"



// console.log("Start");

// setTimeout(() => {
//     console.log("2 seconds later");
// }, 2000);

// console.log("End");


// callback

// function greet(name) {
//     console.log(`Hello, ${name}!`);
// }

// function processUserInput(greet) {// parameter
//     const name = "sarfraaz";
//     greet(name); // <- This is the "callback"
// }

// processUserInput(greet);// argument






// function printMessage(message) {
//     console.log(message);
// }

// function show(callback) {
//     callback("This is synchronous");
// }

// show(printMessage);













// fetch("https://jsonplaceholder.typicode.com/todos/")
//     .then(function (response) {
//         return response.blob();
//     })
//     .then(function (data) {
//         console.log(data);
//     });


// function calculate(a, b, sarfraaz) {
//     const result = a + b;
//     sarfraaz(result);
// }

// calculate(5, 10, function (sum) {console.log("Sum is:", sum); });












// function doMath(num1, num2, operation) {
//   // TODO: call the operation with num1 and num2
//   return operation(num1, num2, 6); // 6 , 7

// }

// // Callback functions
// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function multiply(a, b, c) {
//   return a * b * c;
// }

// // Test calls:
// // console.log(doMath(5, 3, add));       // should log 8
// // console.log(doMath(10, 4, subtract)); // should log 6
// console.log(doMath(6, 7, multiply));



