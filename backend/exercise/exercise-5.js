// Exercise 5: JavaScript Arrow Functions
// Practice 1
// Converting normal function to arrow function

/*
function double(number){
    return number * 2;
}
*/

const double = (number) => number * 2;

console.log(double(5));

// Practice 2
// Converting normal function to arrow function
/*
function sayHello() {
    console.log("Hello");
}
*/

const sayHello = () => {
    console.log(`Hello`);
};

sayHello();

// Practice 3
/*
function subtract(a, b) {
    return a - b;
}
*/

// explicit return
/*
const subtract = (a, b) => {
    return a - b;
};
*/

// implicit return
const subtract = (a, b) => a - b;

console.log(subtract(5, 3));

// Exercise 1
// Create a function called square that receives a number and return its square
const square = (num) => num * num;

console.log(square(5));
console.log(square(3));


// Exercise 2
// create isAdult that receives an age, it returns true if age is at least 18 with implicit return
const isAdult = (age) => age >= 18;

console.log(isAdult(20));
console.log(isAdult(15));

// Exercise 3
// Create calculateDiscountedPrice
// Parameters: price and discount

const calculateDiscountedPrice = (price, discount) => price * (100 - discount) / 100;

console.log(calculateDiscountedPrice(100, 20));
console.log(calculateDiscountedPrice(50, 10));

const calculateItemTotal = (item) => item.quantity * item.price;

const cart = [
    {
        name: "Product A",
        price: 15,
        quantity: 2
    },
    {
        name: "Product B",
        price: 20,
        quantity: 3
    },
];

const calculateCartTotal = (cart) => {
    let total = 0;
    for(const item of cart){
        total += calculateItemTotal(item);
    }
     return total;
};

console.log(calculateCartTotal(cart));

// Final Challenge
// Create getFullName() which receives firstName and LastName, implicitly returns the full name separated with a white space
const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(getFullName("Alice", "Liaw"));

// Create getTotalWithTax() which receives price and taxRate, implicitly returns the result
const getTotalWithTax = (price, taxRate) => price * (100 + taxRate) / 100;
console.log(getTotalWithTax(100, 6));
console.log(getTotalWithTax(50, 10));

// Create isCartItemValid() which receives an item
// The item is valid when quantity is >= 1 AND price > 0 AND name is not empty
const isCartItemValid = (item) => item.quantity >= 1 && item.price > 0 && !!item.name;
console.log(isCartItemValid(cart[0]));
