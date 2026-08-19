// Exercise 8: Chaining of Array Methods with Reduce()

/* # Kita Array Methods Challenge 🔥

Use this dataset for **all 3 questions**:

```js
const transactions = [
    { customer: "Alice", amount: 50, category: "Food", status: "completed" },
    { customer: "Bob", amount: 120, category: "Retail", status: "completed" },
    { customer: "Alice", amount: 80, category: "Retail", status: "pending" },
    { customer: "Charlie", amount: 200, category: "Food", status: "completed" },
    { customer: "Bob", amount: 300, category: "Food", status: "completed" },
    { customer: "David", amount: 150, category: "Retail", status: "cancelled" },
    { customer: "Charlie", amount: 90, category: "Retail", status: "completed" },
    { customer: "Alice", amount: 250, category: "Food", status: "completed" }
];
```

---

## Challenge 1 — Completed transaction names

> Get an array containing the **customer names** of all completed transactions.

Expected:

```js
[
    "Alice",
    "Bob",
    "Charlie",
    "Bob",
    "Charlie",
    "Alice"
]
```

Write your code from scratch.

---

# Challenge 2 — Big Food Transactions 🍔

> Get the **uppercase customer names** of customers who made a **completed Food transaction of at least RM200**.

Expected:

```js
[
    "CHARLIE",
    "BOB",
    "ALICE"
]
```

There are multiple operations involved.

Don't worry about whether you use:

```text
filter → filter → map
```

or:

```text
filter → map
```

or another valid approach.

You decide.

---

# Challenge 3 — Customer spending summary 🧠🔥

Now the harder one.

> Create an object showing the **total amount spent by each customer**, but **only count completed transactions**.

Expected:

```js
{
    Alice: 300,
    Bob: 420,
    Charlie: 290
}
```

Notice:

```text
Alice:
50 + 250 = 300
```

The `RM80` transaction is pending, so don't count it.

```text
Bob:
120 + 300 = 420
```

```text
Charlie:
200 + 90 = 290
```

David's transaction is cancelled, so David shouldn't appear.

### Important

The final result should be an **object**, not an array.

So you'll need to think carefully about:

```text
What should my accumulator be?
What should I return from each iteration?
```

---

# Challenge 4 — Combined 🔥🔥

Same dataset.

> Get the names of **unique customers** who have made at least one completed transaction of **RM200 or more**.

Expected:

```js
[
    "Charlie",
    "Bob",
    "Alice"
]
```

There's a little twist here:

Bob has RM300, Charlie has RM200, and Alice has RM250.

But you should **not duplicate a customer** if they have multiple qualifying transactions.

For example, if Alice had two qualifying transactions, Alice should still appear only once.

---

## Rules

For these challenges:

* ❌ Don't use `for` / `while`
* ❌ Don't use `Set` yet
* ❌ Don't use external libraries
* ✅ Use the array methods you've learned
* ✅ Chaining is encouraged
* ✅ Multiple valid solutions are possible
*/

const transactions = [
    { customer: "Alice", amount: 350, category: "Food", status: "completed" },
    { customer: "Bob", amount: 120, category: "Retail", status: "completed" },
    { customer: "Alice", amount: 80, category: "Retail", status: "pending" },
    { customer: "Charlie", amount: 200, category: "Food", status: "completed" },
    { customer: "Bob", amount: 300, category: "Food", status: "completed" },
    { customer: "David", amount: 150, category: "Retail", status: "cancelled" },
    { customer: "Charlie", amount: 90, category: "Retail", status: "completed" },
    { customer: "Alice", amount: 250, category: "Food", status: "completed" }
];

// Challenge 1: Completed Transaction Names
const completedTransactions = transactions
    .filter(transaction => transaction.status === "completed")
    .map(transaction => transaction.customer);

console.log(completedTransactions);

// Challenge 2: Big Food Transactions
const completedAboveRM200Transactions = transactions
    .filter(transaction => transaction.status === "completed" && transaction.amount >= 200)
    .map(transaction => transaction.customer.toUpperCase());

console.log(completedAboveRM200Transactions);

// Challenge 3: Customer Spending Summary
const customerSpending = transactions
    .filter(transaction => transaction.status === "completed")
    .reduce((customer, transaction) => {
       customer[transaction.customer] = Object.hasOwn(customer, transaction.customer) 
        ? customer[transaction.customer] + transaction.amount 
        : transaction.amount;
       return customer;
    }, {});
console.log(customerSpending);

// Challenge 4: Combined
const filteredCustomerNames = transactions
    .filter(transaction => transaction.amount >= 200 && transaction.status === "completed")
    .map(transaction => transaction.customer);

const uniqueCustomers = filteredCustomerNames
    .filter((name, index) => filteredCustomerNames.indexOf(name) === index);

const uniqueCustomers2 = transactions
    .filter(transaction => transaction.amount >= 200 && transaction.status === "completed")
    .map(transaction => transaction.customer)
    .reduce((customers, name) => {
        if(!customers.includes(name)){
            customers.push(name);
        }
        return customers;
    }, []);
    
console.log(uniqueCustomers);
console.log(uniqueCustomers2);

/* 
# Exercise 1 — `reduce()` → Number 💰

```js
const purchases = [
    { item: "Apple", amount: 5 },
    { item: "Milk", amount: 8 },
    { item: "Cake", amount: 20 },
    { item: "Bread", amount: 6 }
];
```

### Requirement

Calculate the **total amount spent**.

Expected:

```js
39
```

### Your job

Before coding, tell me:

1. What should the accumulator represent?
2. What should the current item represent?
3. What should the initial value be?
4. What property do you need from the current item?

Then write the code.

---

# Exercise 2 — `reduce()` → Object 📊

After that, we'll use:

```js
const purchases = [
    { item: "Apple", amount: 5, category: "Food" },
    { item: "Laptop", amount: 3000, category: "Electronics" },
    { item: "Milk", amount: 8, category: "Food" },
    { item: "Phone", amount: 2000, category: "Electronics" },
    { item: "Bread", amount: 6, category: "Food" }
];
```

### Requirement

Calculate the **total spending for each category**.

Expected:

```js
{
    Food: 19,
    Electronics: 5000
}
```

Here the accumulator will need to become an **object**.

But don't solve this one yet.

---

# Exercise 3 — `reduce()` → Array 🧠

We'll then use:

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

Create an array containing the names of customers who have **at least 300 points**.

Expected:

```js
["Bob", "David", "Eve"]
```

We'll specifically use `reduce()` for this one rather than `filter()`.

---
 */

// Exercise 1: reduce() Number
const purchases = [
    { item: "Apple", amount: 5 },
    { item: "Milk", amount: 8 },
    { item: "Cake", amount: 20 },
    { item: "Bread", amount: 6 }
];

// 1. Accumulator represent total amount spent on purchases
// 2. Current item represent current purchase item in purchases array
// 3. Initial value is 0
// 4. Property needed in current item is amount

const totalAmountSpent = purchases.reduce((sum, purchase) => sum + purchase.amount, 0);
console.log(totalAmountSpent);

// Exercise 2: reduce() -> Object
const purchases2 = [
    { item: "Apple", amount: 5, category: "Food" },
    { item: "Laptop", amount: 3000, category: "Electronics" },
    { item: "Milk", amount: 8, category: "Food" },
    { item: "Phone", amount: 2000, category: "Electronics" },
    { item: "Bread", amount: 6, category: "Food" }
];

const totalSpending = purchases2
    .reduce((totalSpending, purchase) => {
        totalSpending[purchase.category] = Object.hasOwn(totalSpending, purchase.category)
            ? totalSpending[purchase.category] + purchase.amount
            : purchase.amount;
        return totalSpending;
    }, {});
console.log(totalSpending);

// Exercise 3: reduce() -> Array
const customers = [
    { name: "Alice", points: 120 },
    { name: "Bob", points: 450 },
    { name: "Charlie", points: 80 },
    { name: "David", points: 300 },
    { name: "Eve", points: 600 }
];

const eligibleCustomers = customers
    .reduce((customers, customer) => {
        if(customer.points >= 300 && !customers.includes(customer.name)){
            customers.push(customer.name);
        }
        return customers;
    }, []);
console.log(eligibleCustomers);


