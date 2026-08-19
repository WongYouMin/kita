// Exercise 6: Array Methods

// forEach() do something to every item in the array
// without changing the array content
// forEach() cannot be used to create a new array
/* const numbers = [1, 2, 3, 4, 5, 6, 23, 26];

numbers.forEach((number) => {
    console.log(number);
});

// map() takes existing array items, transforms and stores them in new array created
// the new array length will be the same as original array length
// because all item is derived and transformed from the original item 
const doubledNumbers = numbers.map((number) => number *= 2);
console.log(doubledNumbers);

// filter() takes existing array items, filters the matched items and stores them in new array created
// the results can be a collection of value
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

// find() takes existing array items, find the first matched item and stores it in new variable created
// the results can only be one value
const greaterThan20 = numbers.find((number) => number > 20);
console.log(greaterThan20);

const customers = [
    {
        name: "Alice",
        points: 100
    },
    {
        name: "Bob",
        points: 200
    },
    {
        name: "Charlie",
        points: 300
    }
];

// Print every customer's name
customers.forEach(customer => {
    console.log(customer.name);
});

// Create an array with every customer name
const customerNames = customers.map(customer => customer.name);
console.log(customerNames);

// Create an array which only contains customer with at least 200 points
const filteredCustomers = customers.filter(customer => customer.points >= 200);
console.log(filteredCustomers);

// Find the first customer with at least 200 points
const result = customers.find(customer => customer.points >= 200);
console.log(result); */

// Task 1 Prediction
/* Which method would you use if you want to:

A. Print every product's name?

B. Create a new array containing only the product names?

C. Create a new array containing products costing more than RM7?

D. Find the first product costing more than RM7? 

Answer:
A: forEach
B: map
C: filter
D: find
*/

// Task 1: Coding Attempt

/* const products = [
    {
        name: "Product C",
        price: 30
    },
    {
        name: "Product A",
        price: 5
    },
    {
        name: "Product B",
        price: 10
    }
];

// A. Print every product's name?
products.forEach(product => {
    console.log(product.name);
});

// B. Create a new array containing only the product names?
const productNames = products.map(product => product.name);
console.log(productNames);

// C. Create a new array containing products costing more than RM7?
const filteredProducts = products.filter(product => product.price > 7);
console.log(filteredProducts);

// D. Find the first product costing more than RM7? 
const result = products.find(product => product.price > 7);
console.log(result); */

// Task 3: Customer Loyalty System

/* 
You have:

```js
const customers = [
    { name: "Alice", points: 120 },
    { name: "Bob", points: 450 },
    { name: "Charlie", points: 80 },
    { name: "David", points: 300 }
];
```

### Challenge 1 — Customer names

The dashboard needs a list containing **only the names of all customers**.

For example:

```js
["Alice", "Bob", "Charlie", "David"]
```

Write the code from scratch.

---

### Challenge 2 — Eligible customers

Kita wants to display customers who have **at least 300 points**.

The result should contain the **customer objects**, not just their names.

Expected:

```js
[
    { name: "Bob", points: 450 },
    { name: "David", points: 300 }
]
```

Write the code from scratch.

---

### Challenge 3 — Find customer

The system needs to find the **first customer who has at least 300 points**.

Expected:

```js
{ name: "Bob", points: 450 }
```

Write the code from scratch.

---

### Challenge 4 — Notify customers

The system needs to print a message for **every customer**:

```text
Alice has 120 points.
Bob has 450 points.
Charlie has 80 points.
David has 300 points.
```

Write the code from scratch.

---

### Challenge 5 — Slightly harder

Now we have:

```js
const rewards = [
    { name: "RM5 Voucher", pointsRequired: 100 },
    { name: "RM10 Voucher", pointsRequired: 250 },
    { name: "RM20 Voucher", pointsRequired: 500 },
    { name: "RM50 Voucher", pointsRequired: 1000 }
];
```

A customer currently has **300 points**.

The system needs to create a new array containing **only rewards they can afford**.

Expected:

```js
[
    { name: "RM5 Voucher", pointsRequired: 100 },
    { name: "RM10 Voucher", pointsRequired: 250 }
]
```

Write this one from scratch too.

---

### Your rules

For each challenge, **don't start by thinking "which method did we learn?"**

Start with:

> **What does the situation want me to produce?**

Then decide:

```text
Do something to every item?
Transform every item?
Keep multiple items?
Find one item?
```
 */


const customers = [
    { name: "Alice", points: 120 },
    { name: "Bob", points: 450 },
    { name: "Charlie", points: 80 },
    { name: "David", points: 300 }
];

// Challenge 1: Customer names
// List with only customer names

const customerNames = customers.map(customer => customer.name);
console.log(customerNames);

// Challenge 2: Eligible customers
// Display customers with at least 300 points

const eligibleCustomers = customers.filter(customer => customer.points >= 300);
console.log(eligibleCustomers);


// Challenge 3: Find customer
// Find the first customer with at least 300 points
const firstEligibleCustomer = customers.find(customer => customer.points >= 300);
console.log(firstEligibleCustomer);

// Challenge 4: Notify customers
// Print a message for every customer
customers.forEach(customer => {
    console.log(`${customer.name} has ${customer.points} points.`);
});

// Challenge 5: Slightly harder
const rewards = [
    { name: "RM5 Voucher", pointsRequired: 100 },
    { name: "RM10 Voucher", pointsRequired: 250 },
    { name: "RM20 Voucher", pointsRequired: 500 },
    { name: "RM50 Voucher", pointsRequired: 1000 }
];

// Create array containing only affordable rewards for a customer with 300 points

const generateAffordableRewards = (customer) => {
    const pointsBalance = customer.points;
    return rewards.filter(reward => reward.pointsRequired <= pointsBalance);
};

console.log(generateAffordableRewards(customers[3]));

// Chaining Attempt 1
// Eligible customer names who have at least 300 points
const eligibleCustomerNames = customers
    .filter(customer => customer.points >= 300)
    .map(customer => customer.name);

console.log(eligibleCustomerNames);

// Chaining Attempt 2
// Only double numbers that are greater than 2

const numbers = [1, 2, 3, 4, 5];
const doubledNumbersGreaterThan2 = numbers
    .filter(number => number > 2)
    .map(number => number * 2);

console.log(doubledNumbersGreaterThan2);

// Chaining Exercise 1
const products = [
    { name: "Apple", price: 5 },
    { name: "Milk", price: 8 },
    { name: "Cake", price: 20 },
    { name: "Bread", price: 6 }
];

/* Requirement:

Get the names of products that cost more than RM7.

products
   ↓
???
   ↓
???
   ↓
["Milk", "Cake"]

Your job

Tell me:

Which method should come first?
- filter(), first get the products that cost more than 7
Which method should come second?
- map(), extract product name from first result
- the assignment operator then assign the produced array from map to the variable
Why does that order make sense?
- filter() -> then only extract name is more efficient, first result kept the object and then extract the name
- if map() then only filter, then name is extracted, but theres no price to filter as the result only has name in it

Don't write the code yet. Just explain the chain in your own words. */

const filteredProducts = products
    .filter(product => product.price > 7)
    .map(product => product.name);

console.log(filteredProducts);

// Exercise 2: Reverse the Thinking

/* Requirement:

Get the names of customers who have at least 200 points.
Before writing code, tell me:

// Answer
customers
   ↓
filter(): customers with at least 200 points
produced: array of customer object
   ↓
map(): extract customer name from previous customer object array
produced: array of customer name
   ↓
["Bob", "David"]

And explain why the first method needs to come before the second method.
// Answer:
customer object array with at least 200 points is needed to extract the customer name
if map into customer name first, there will be no customer object with points properties to filter for the conditions

Then write the actual chained code underneath it. */

const filteredCustomerNames = customers
.filter(customer => customer.points >= 200)
.map(customer => customer.name);

console.log(filteredCustomerNames);

/* Exercise 3 — Three-method chain

Let's push it one step further.

Requirement:

Get the names of customers with at least 200 points, but make all the names uppercase.

Expected result:

["BOB", "DAVID", "EVE"]

You now need three operations:

customers
   ↓
filter(): customer object with at least 200 points
   ↓
map(): customer name from customer object
   ↓
customer name change to uppercase
   ↓
["BOB", "DAVID", "EVE"]
Your task

Before writing code, explain:

What should the first method do?
    filter(): filter and produce array with customer object with at least 200 points
What should the second method do?
    map(): extract customer name from the previous method result 
What should the third method do?
    toUpperCase(): change the customer name to uppercase
Why must they happen in that order?
customer object is needed to perform filter customer with at least 200 points,
customer object is then needed to extract the customer name,
the customer name is needed to change the string to uppercase

Then write the actual chained code. */

const customers2 = [
    { name: "Alice", points: 120 },
    { name: "Bob", points: 450 },
    { name: "Charlie", points: 80 },
    { name: "David", points: 300 },
    { name: "Eve", points: 600 }
];

const upperCaseCustomers = customers2
.filter(customer => customer.points >= 200)
.map(customer => customer.name.toUpperCase());

console.log(upperCaseCustomers);
