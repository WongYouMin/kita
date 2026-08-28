// Exercise 13: JavaScript Rest Parameter

// =================================================================
// Part 1: Introduction to Rest Parameter
const numbers = [10, 20, 30];

const [first, ...remaining] = numbers;
console.log(first, remaining);

// The Problem
// This function can only handle three parameters
/*
function calculateTotal(price1, price2, price3) {
    return price1 + price2 + price3;
}
*/

// If the number of parameters is unknown?
// Rest parameter can be used to collect the parameters as an array
// `prices` collects the received arguments as an array
function calculateTotal(...prices){
    return prices.reduce((total, price) => total + price, 0);
}

console.log(calculateTotal(10, 20, 30, 40, 50));

// =================================================================
// Part 2: Rest Parameter vs Spread
const prices = [100, 50, 80];

// `prices` array is spreaded into individual items and being passed as arguments
calculateTotal(...prices);

// see calculateTotal() ↑ for rest parameter

// =================================================================
// Part 3: Rest Parameter Combined with Normal Parameters
// Note that rest parameters must be the last element of function parameters
const displayCustomer = (name, ...orders) => {
    console.log(name, orders);
};

displayCustomer("Alice", "ORD-101", "ORD-102", "ORD-103");

// Challenge 1-------------------------------------------------------
const expenses = [120, 80, 45, 60];

// Create `calculateTotal()` using a rest parameter.
// It should accept any number of expenses and return their total.
// Collecting individual expenses from arguments as rest parameters `expenses`
const calculateTotalExpenses = (...expenses) => expenses.reduce((sum, expense) => sum + expense, 0);

// Expected output: 305
// Spread expenses array to send each expense as argument to parameter
console.log(calculateTotalExpenses(...expenses));


// Challenge 2-------------------------------------------------------
const transaction = ["TX-401", 250, 80, 120];

// Create `displayTransaction()`:
// - first argument → transactionId
// - remaining arguments → amounts
// Print both.
// first argument is transactionId, the rest arguments are collected as amounts array
const displayTransaction = (transactionId, ...amounts) => {
    console.log(transactionId, amounts);
};

// spread transaction array
displayTransaction(...transaction);
// Expected output: TX-401 [250, 80, 120]

// Challenge 3-------------------------------------------------------
const ratings = [5, 4, 3, 5, 4];

// Create `getTotalRatings()` using a rest parameter.
// Return the total of all ratings.
// Collect all arguments as ratings array
const getTotalRatings = (...ratings) => ratings.reduce((total, rating) => total + rating, 0);

// Spread ratings array
console.log(getTotalRatings(...ratings));
// Expected output: 21

// Challenge 4-------------------------------------------------------
const scores = [88, 76, 95, 82];

// Create `displayScores()` using a rest parameter.
// Then call it by spreading `scores`.
// Collecting arguments as scores array
const displayScores = (...scores) => {
    console.log(scores);
};

// Spread scores
displayScores(...scores);
// Expected output:
// [88, 76, 95, 82]

// Challenge 5--------------------------------------------------------
function processOrder(orderId, customerName, ...items) {
    // Expected Output: "ORD-801"
    console.log(orderId);

    // Expected Output: "Maya"
    console.log(customerName);

    // Expected Output: ["Keyboard", "Mouse", "Webcam"]
    console.log(items);
}

processOrder(
    "ORD-801",
    "Maya",
    "Keyboard",
    "Mouse",
    "Webcam"
);

// Challenge 6
const newNumbers = [15, 8, 23, 4, 19];

function analyzeNumbers(...numbers) {
    // return an object containing:
    // total
    // highest
    // lowest
    const highest = Math.max(...numbers);
    const lowest = Math.min(...numbers);
    const total = numbers.reduce((total, number) => total + number, 0);

    return {
        total,
        highest,
        lowest
    };
}

console.log(analyzeNumbers(...newNumbers));