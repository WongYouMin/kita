// JavaScript Test 1

// Round 1
// Q1: declare points with let, makes the value of points reassignable; const points values are constant, not allowed to be reassigned with new values

// Q2: 
/*
customer is the variable that stores the object
name is the object property, which will be used to access the value of name property
"Ali" is the value of name property, encoded in double quote indicating it is a string
points is also an object property, its value is 100, which is a number
*/

// Q3
// An object is an item, which consists of various properties
// Used when you want to store the information of an object including its properties
/*
const book = {
    name: "Atomic Habits",
    author: "James Clear"
};
*/
// Array is a list of items, which can be same or different data types.
// Used when you want to store a list of related items
// const colors = ['Blue', 'Red', 'Yellow'];

// Q4
// it does not create new customer object, if the points property already exists, then it update the value of points to 200, if the points property not exists, then it adds a new property points to the objects with value of 200

// Q5
// parameter is the variable that is only assigned with value by receiving value passed from arguments when the function is called.
// parameters value can be used within the received function
// parameters: customer, amount
// argument is the actual value that is sent to the called function
// arguments: customer, 50
// order of passing matters, or the wrong value is sent to wrong parameters

// Q6
// the first is normal function
// the second is arrow function
// they both do same thing , both have a parameter: name, and return the expression of `Hello ${name}`
// they have the same function name: greet, can be called using greet("Alice");

// Q7
// yes we can push new items to rewards although it is a constant variable
// as long as we are not reassigning new values to the variable it will be fine
// reassignment of array values indicates the change of memory location the rewards variable points to
// adding new items to the array does not cause the change of memory location the rewards variable points to


// Round 2
// Predict the output
/*
const customer = {
    name: "Ali",
    points: 100
};

const rewards = [
    {
        name: "Coffee",
        pointsRequired: 50
    },
    {
        name: "Cake",
        pointsRequired: 100
    }
];

customer.points += 50;

rewards.push({
    name: "Burger",
    pointsRequired: 200
});

// Prediction: "Ali"
console.log(customer.name);
// Prediction: 150
console.log(customer.points);
// Prediction: 3
console.log(rewards.length);
// Prediction: Burger
console.log(rewards[2].name);

*/

// Round 3
// Build from scratch
/* 
    Build a tiny Kita reward system
    1. Create a customer
    - name
    - points
    - membership

    2. Create a rewards array
    - at least 3 rewards
    - each reward must have: name and pointsRequired

    4. Create addPoints()
    - parameters: customer, amount

    5. Create canRedeem()
    - parameters: customer, reward
    - if customer has enough points, then return true, else false

    6. Create redeemReward()
    - parameters: customer, reward
    - if can redeem, deduct required points, print success message
    - else: print insufficient points message

    7. Show the remaining points after reward redemption

*/

const customer = {
    name: "Alice",
    points: 100,
    membership: "Silver"
};

const rewards = [
    {
        name: "Coffee",
        pointsRequired: 200
    },
    {
        name: "Cookie",
        pointsRequired: 100
    },
    {
        name: "Candy",
        pointsRequired: 130
    }
];

const addPoints = (customer, amount) => {
    customer.points += amount;
    console.log(`${amount} points are added. Your points balance: ${customer.points}`);
};

const canRedeem = (customer, reward) => customer.points >= reward.pointsRequired;

const redeemReward = (customer, reward) => {
    const isEligible = canRedeem(customer, reward);
    if(isEligible){
        customer.points -= reward.pointsRequired;
        console.log(`${reward.name} is claimed successfully. \n Your points balance: ${customer.points}`);
    } else {
        console.log(`Insufficient points to redeem reward.`);
    }
};

console.log(customer);
redeemReward(customer, rewards[2]);
addPoints(customer, 50);
redeemReward(customer, rewards[2]);
