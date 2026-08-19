// JavaScript Test 3
/*
## Challenge 1 — Customer Points

Kita wants to give customers points based on their purchase.

Create a function that receives:

```text
customer
purchaseAmount
```

Rules:

* Every **RM10 spent = 1 point**
* Ignore the remaining amount.

Examples:

```text
RM10 → 1 point
RM25 → 2 points
RM99 → 9 points
RM5  → 0 points
```

You should:

1. Create at least **2 customers**.
2. Create a function to calculate how many points they earn.
3. Add the earned points to the customer's existing points.
4. Return the number of points earned.
5. Test your function with different purchase amounts.

### Don't use anything we haven't learned.

You can use whatever you've already learned, including:

```javascript
const
let
objects
arrays
functions
arrow functions
if / else
return
arithmetic
comparison operators
template literals
```

**I am intentionally not telling you whether you need `Math.floor()`, what the function should be called, or exactly how to structure it.**

Figure that out yourself.

---

## Challenge 2 — Reward Validation

After that, build a function that validates a reward.

A reward is valid if:

* It has a name.
* Its `pointsRequired` is greater than `0`.
* It is available.

For example:

```javascript
{
    name: "Free Coffee",
    pointsRequired: 50,
    available: true
}
```

should be valid.

But:

```javascript
{
    name: "",
    pointsRequired: 50,
    available: true
}
```

should be invalid.

And:

```javascript
{
    name: "Free Coffee",
    pointsRequired: 0,
    available: true
}
```

should be invalid.

And:

```javascript
{
    name: "Free Coffee",
    pointsRequired: 50,
    available: false
}
```

should be invalid.

Create the function **from scratch** and test it against at least **4 rewards**, including valid and invalid ones.

---
*/
// Challenge 1
const membership = {
    gold: 3,
    silver: 2,
    bronze: 1
};

const customers = [
    {
        name: "Alice",
        points: 1000,
        membership: membership.gold
    },
    {
        name: "Bob",
        points: 800,
        membership: membership.silver
    }
];

const calculatePointsEarned = (purchaseAmount) => {
    // Earn 1 points for every RM 10 spent
    const pointsEarningRate = 0.1;

    // Ignore the remaining amount
    return Math.floor(purchaseAmount * pointsEarningRate);
};


const addPoints = (customer, pointsEarned) => {
    // Add earned points to customer's existing points
    customer.points += pointsEarned;
};

const earnPoints = (customer, purchaseAmount) => {

    let pointsEarned = 0;

    console.log(`==================================`);
    console.log(`Customer: ${customer.name}`);
    console.log(`Amount Spent: RM ${purchaseAmount}`);
    console.log(`Points balance: ${customer.points}`);

    // Validate purchase amount
    if(purchaseAmount > 0){
        pointsEarned = calculatePointsEarned(purchaseAmount);
    } else {
        console.log(`Invalid purchase amount. Please enter amount greater than RM 0.`);
        return;
    }

    // Add points if there are points to earn
    if(pointsEarned > 0){
        addPoints(customer, pointsEarned);
        console.log(`Congratulations! ${pointsEarned} points are earned.`);
        
    } else {
        console.log(`No points earned. Spend RM10 to earn 1 point.`);
    }
};

console.log(`=========== Challenge 1 ===========`);
earnPoints(customers[0], 10);
earnPoints(customers[0], 25);
earnPoints(customers[1], 99);
earnPoints(customers[1], 5);
earnPoints(customers[1], 0);
earnPoints(customers[1], -10);

// Challenge 2
console.log(`\n\n=========== Challenge 2 ===========`);

const rewards = [
    {
        name: "Product A",
        pointsRequired: 100,
        available: true,
    },
    {
        name: "Product B",
        pointsRequired: 0,
        available: true,
    },
    {
        name: "",
        pointsRequired: 100,
        available: true,
    },
    {
        name: "Product D",
        pointsRequired: 100,
        available: false,
    }
];

const isRewardValid = (reward) => Boolean(reward.name) && reward.pointsRequired > 0 && reward.available === true ;

for(const reward of rewards){
    console.log(`Reward: ${reward.name}
Points required: ${reward.pointsRequired} 
Availability: ${reward.available}
Reward Validity: ${isRewardValid(reward)}\n`);
}




