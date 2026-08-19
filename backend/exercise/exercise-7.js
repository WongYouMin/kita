// Exercise 7: Chaining of Array Methods

/* # Chaining Exercise Set

## Exercise 1 — Product names

```js
const products = [
    { name: "Apple", price: 5, category: "Food" },
    { name: "Laptop", price: 3000, category: "Electronics" },
    { name: "Milk", price: 8, category: "Food" },
    { name: "Phone", price: 2000, category: "Electronics" },
    { name: "Bread", price: 6, category: "Food" }
];
```

### Requirement

Get the **names of all Electronics products**.

Expected:

```js
["Laptop", "Phone"]
```

Write the code from scratch.

---

# Exercise 2 — Affordable electronics

Using the same `products` array:

> Get the names of Electronics products that cost **less than RM2500**.

Expected:

```js
["Phone"]
```

Don't just think:

> "filter twice."

Think about the **data flow**:

```text
products
   ↓
???
   ↓
???
   ↓
???
```

Then write your chain.

---

# Exercise 3 — Loyalty rewards

```js
const rewards = [
    { name: "RM5 Voucher", pointsRequired: 100, category: "Voucher" },
    { name: "RM10 Voucher", pointsRequired: 250, category: "Voucher" },
    { name: "Free Coffee", pointsRequired: 150, category: "Food" },
    { name: "RM20 Voucher", pointsRequired: 500, category: "Voucher" },
    { name: "Free Cake", pointsRequired: 300, category: "Food" }
];

const customer = {
    name: "Bob",
    points: 300
};
```

### Requirement

Get the **names of rewards that Bob can afford**.

Expected:

```js
[
    "RM5 Voucher",
    "RM10 Voucher",
    "Free Coffee",
    "Free Cake"
]
```

Think:

```text
rewards
   ↓
affordable rewards
   ↓
reward names
```

Write the chain.

---

# Exercise 4 — Uppercase reward names

Using the same `rewards` and `customer`:

> Get the names of rewards Bob can afford, but return them in uppercase.

Expected:

```js
[
    "RM5 VOUCHER",
    "RM10 VOUCHER",
    "FREE COFFEE",
    "FREE CAKE"
]
```

Now your data flow should look something like:

```text
rewards
   ↓
???
   ↓
???
   ↓
???
```

But **you decide the methods**.

---

# Exercise 5 — Multiple conditions

```js
const customers = [
    { name: "Alice", points: 120, membership: "Silver" },
    { name: "Bob", points: 450, membership: "Gold" },
    { name: "Charlie", points: 80, membership: "Bronze" },
    { name: "David", points: 300, membership: "Gold" },
    { name: "Eve", points: 600, membership: "Silver" }
];
```

### Requirement

Get the **names of Gold members who have at least 300 points**.

Expected:

```js
["Bob", "David"]
```

You have two reasonable ways to approach this.

### Option A

One `filter()` with multiple conditions.

### Option B

Chain multiple `filter()` calls.

Try **both versions**.

This is useful because you'll see that chaining isn't always about having different methods. You can chain the **same method** too.

---

# Exercise 6 — Map → Filter

This one is important because we're changing the data **before** filtering.

```js
const products = [
    { name: "Apple", price: 5 },
    { name: "Laptop", price: 3000 },
    { name: "Milk", price: 8 },
    { name: "Phone", price: 2000 }
];
```

### Requirement

We want to:

1. Create an array containing **only the prices**
2. Keep prices that are **at least RM1000**

Expected:

```js
[3000, 2000]
```

Your chain should conceptually be:

```text
product objects
       ↓
???
       ↓
numbers
       ↓
???
       ↓
numbers >= 1000
```

This is deliberately testing whether you understand that **the second callback receives whatever the first method produced**.

---

# Exercise 7 — Filter → Find

```js
const customers = [
    { name: "Alice", points: 120 },
    { name: "Bob", points: 450 },
    { name: "Charlie", points: 80 },
    { name: "David", points: 300 },
    { name: "Eve", points: 600 }
];
```

### Requirement

Find the **first Gold-level customer**, where Gold means having at least **500 points**.

Expected:

```js
{ name: "Eve", points: 600 }
```

But here's the catch:

First, filter customers who have at least **300 points**.

Then, from those customers, find the first one who has at least **500 points**.

Think:

```text
customers
   ↓
customers with >= 300
   ↓
first customer with >= 500
```

Write the chain.

---

# Exercise 8 — Chain ending with `forEach()`

```js
const customers = [
    { name: "Alice", points: 120 },
    { name: "Bob", points: 450 },
    { name: "Charlie", points: 80 },
    { name: "David", points: 300 },
    { name: "Eve", points: 600 }
];
```

### Requirement

Print:

```text
Bob is eligible!
David is eligible!
Eve is eligible!
```

where eligible means **at least 300 points**.

The important part:

> Don't create an intermediate variable.

You should chain the operations directly and finish with the method that actually performs the printing.

---

## Exercise 9 — The big one 🔥

This one combines everything you've learned.

```js
const rewards = [
    { name: "RM5 Voucher", pointsRequired: 100, active: true },
    { name: "RM10 Voucher", pointsRequired: 250, active: true },
    { name: "Free Coffee", pointsRequired: 150, active: false },
    { name: "RM20 Voucher", pointsRequired: 500, active: true },
    { name: "Free Cake", pointsRequired: 300, active: true },
    { name: "RM50 Voucher", pointsRequired: 1000, active: false }
];

const customer = {
    name: "Bob",
    points: 500
};
```

### Requirement

Get the **uppercase names** of all rewards that:

* are `active`
* can be afforded by Bob

Expected:

```js
[
    "RM5 VOUCHER",
    "RM10 VOUCHER",
    "RM20 VOUCHER",
    "FREE CAKE"
]
```

Don't worry about making the shortest solution.

Focus on understanding:

```text
What data do I have?
        ↓
What data do I need next?
        ↓
What method produces that data?
        ↓
What does the next method need?
```

---

## One extra challenge: predict before coding

For Exercise 9, **before writing code**, tell me the data type/shape after every stage.

For example:

```text
rewards
   ↓
filter
   ↓
???
   ↓
filter
   ↓
???
   ↓
map
   ↓
???
   ↓
map
   ↓
???
```

Then write your code.

### Don't use `reduce()` yet.

Once you can comfortably solve these, **then we'll start `reduce()` from scratch**, because `reduce()` is conceptually different: instead of producing another array, it can turn an array into **one final value**.
 */

// Exercise 1: Product names
const products = [
    { name: "Apple", price: 5, category: "Food" },
    { name: "Laptop", price: 3000, category: "Electronics" },
    { name: "Milk", price: 8, category: "Food" },
    { name: "Phone", price: 2000, category: "Electronics" },
    { name: "Bread", price: 6, category: "Food" }
];

const electronicsProducts = products
    .filter(product => product.category === "Electronics")
    .map(product => product.name);
console.log(electronicsProducts);

// Exercise 2: Affordable electronics
const affordableProducts = products
    .filter(product => product.price < 2500 && product.category === "Electronics")
    .map(product => product.name);
console.log(affordableProducts);

// Exercise 3: Loyalty rewards
const rewards = [
    { name: "RM5 Voucher", pointsRequired: 100, category: "Voucher" },
    { name: "RM10 Voucher", pointsRequired: 250, category: "Voucher" },
    { name: "Free Coffee", pointsRequired: 150, category: "Food" },
    { name: "RM20 Voucher", pointsRequired: 500, category: "Voucher" },
    { name: "Free Cake", pointsRequired: 300, category: "Food" }
];

const customer = {
    name: "Bob",
    points: 300
};

const affordableRewards = rewards
    .filter(reward => reward.pointsRequired <= customer.points)
    .map(reward => reward.name);

console.log(affordableRewards);

// Exercise 4: Uppercase reward names
const upperCaseAffordableRewards = rewards
    .filter(reward => reward.pointsRequired <= customer.points)
    .map(reward => reward.name.toUpperCase());
console.log(upperCaseAffordableRewards);

// Exercise 5: Multiple Conditions
const newCustomers = [
    { name: "Alice", points: 120, membership: "Silver" },
    { name: "Bob", points: 450, membership: "Gold" },
    { name: "Charlie", points: 80, membership: "Bronze" },
    { name: "David", points: 300, membership: "Gold" },
    { name: "Eve", points: 600, membership: "Silver" }
];

const eligibleGoldMembers = newCustomers
    .filter(customer => customer.membership === "Gold" && customer.points >= 300)
    .map(customer => customer.name);
console.log(eligibleGoldMembers);

// Exercise 6: Map -> Filter
const newProducts = [
    { name: "Apple", price: 5 },
    { name: "Laptop", price: 3000 },
    { name: "Milk", price: 8 },
    { name: "Phone", price: 2000 }
];

const productsAbove1k = products
    .map(product => product.price)
    .filter(price => price >= 1000);
console.log(productsAbove1k);

// Exercise 7: Filter -> Find
const firstGoldLevelCustomer = newCustomers
    .filter(customer => customer.points >= 300)
    .find(customer => customer.points >= 500);
console.log(firstGoldLevelCustomer);

// Exercise 8: Chain ending with forEach()
    newCustomers
    .filter(customer => customer.points >= 300)
    .forEach(customer => {
        console.log(`${customer.name} is eligible!`);
    });

// Exercise 9: The Big One
const newRewards = [
    { name: "RM5 Voucher", pointsRequired: 100, active: true },
    { name: "RM10 Voucher", pointsRequired: 250, active: true },
    { name: "Free Coffee", pointsRequired: 150, active: false },
    { name: "RM20 Voucher", pointsRequired: 500, active: true },
    { name: "Free Cake", pointsRequired: 300, active: true },
    { name: "RM50 Voucher", pointsRequired: 1000, active: false }
];

const newCustomer = {
    name: "Bob",
    points: 500
};

const activeAffordableRewards = newRewards
    .filter(reward => reward.pointsRequired <= newCustomer.points && reward.active === true)
    .map(reward => reward.name.toUpperCase());
console.log(activeAffordableRewards);

