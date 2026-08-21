// Exercise 9: Destructuring

// Object Destructuring
/* const customer = {
    name: "Alice",
    email: "alice@gmail.com",
    points: 1200,
    membership: "gold"
}; */

// const name = customer.name;
// const points = customer.points;

// const {name: name, points: points} = customer;
// const {name, points} = customer;

// renaming variables during destructuring
// const {name: customerName, points: customerPoints, age = 18} = customer;

// console.log(name);
// console.log(points);
// console.log(customerName);
// console.log(customerPoints);
// console.log(age);

// Practice 1
const reward = {
    name: "RM10 Voucher",
    pointsRequired: 100,
    active: true
};

// Challenge 1
/* Use object destructuring to extract:

name
pointsRequired

Then print them. */

const {name, pointsRequired} = reward;
console.log(name, pointsRequired);

// Challenge 2
const customer = {
    name: "Sarah",
    points: 750,
    membership: "Gold"
};

/* Create variables called:

customerName
customerPoints

using destructuring. */

const {name: customerName, points: customerPoints} = customer;
console.log(customerName);
console.log(customerPoints);

// Function and object destructuring
// Challenge 3
const reward2 = {
    name: "Free Coffee",
    pointsRequired: 100,
    active: true
};

function displayReward({name, pointsRequired}){
    console.log(name);
    console.log(pointsRequired);
}

const getRewardName = ({name}) => name;

displayReward(reward2);
console.log(getRewardName(reward2));

// Challenge 4
const getCustomerPoints = ({points}) => points;
console.log(getCustomerPoints(customer));

// Destructuring in map()
const customers = [
    {
        name: "Ali",
        points: 500
    },
    {
        name: "Sarah",
        points: 800
    },
    {
        name: "John",
        points: 300
    }
];

// Without destructuring
const names = customers.map(customer => customer.name);

// With destructuring
const customerNames = customers.map(({name}) => name);
console.log(customerNames);

// Challenge 5
const rewards = [
    {
        name: "Free Coffee",
        pointsRequired: 100,
        active: true
    },
    {
        name: "RM10 Voucher",
        pointsRequired: 500,
        active: false
    },
    {
        name: "Free Meal",
        pointsRequired: 1000,
        active: true
    }
];

// Use destructuring in map to get rewards' name
const rewardNames = rewards.map(({name}) => name);
console.log(rewardNames);

// Challenge 6: Filter + Destructuring
const activeRewardNames = rewards
    .filter(({active}) => active)
    .map(({name}) => name);
console.log(activeRewardNames);

// Level 2: Nested Object Destructuring
const customer2 = {
    name: "Alice",
    points: 1200,
    membership: {
        type: "Gold",
        discount: 20
    }
};

const {name: customer2Name, membership: customer2Membership} = customer2;
console.log(customer2Name);
console.log(customer2Membership);

const {type, discount} = customer2Membership;
console.log(type);
console.log(discount);

// Destructure two-levels at once
const {
    name: customer3Name,
    membership: {
        type: customer3Type,
        discount: customer3Discount
    }
} = customer2;

console.log(customer3Name);
console.log(customer3Type);
console.log(customer3Discount);

// Practice 2
const reward3 = {
    name: "RM10 Voucher",
    requirement: {
        points: 500,
        membership: "Gold"
    }
};

const {
    requirement: {
        points: rewardPoints,
        membership: rewardMembership
    }
} = reward3;

console.log(rewardPoints);
console.log(rewardMembership);

// Practice 3
const customer4 = {
    name: "Alice",
    points: 1200,
    membership: {
        type: "Gold",
        discount: 20
    }
};

const {
    name: customer4Name,
    points: customer4Points,
    membership: {
        type: customer4Type,
        discount: customer4Discount
    }
} = customer4;

console.log(customer4Name);
console.log(customer4Points);
console.log(customer4Discount);
console.log(customer4Type);

