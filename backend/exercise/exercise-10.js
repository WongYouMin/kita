// Exercise 10: Destructuring and Default Values

// Challenge 1
// Destructure membership with a default value of: "Bronze"

const customer = {
    name: "Alice",
    points: 1200
};

const {membership = "Bronze"} = customer;
console.log(membership);

// Challenge 2
// Destructure active with a default value of true
const reward = {
    name: "RM10 Voucher",
    pointsRequired: 500
};

const {active = true} = reward;
console.log(active);

// Challenge 3
const customer2 = {
    name: "Bob"
};
// Extract points and rename it to customerPoints
// set its default as 0
const {points : customerPoints = 0} = customer2;
console.log(customerPoints);

// Challenge 4
const customer3= {
    name: "Alice",
    membership: {
        type: "Gold"
    }
};
// Extract type and discount, give default discount value of 0
const {
    membership: {
        type, 
        discount = 0
    }
} = customer3;

console.log(type);
console.log(discount);

// Renaming variables in Object Destructuring

// Practice 1
const customer4 = {
    name: "Alice",
    points: 1200
};

// destructure name and points
// rename: name → customer4Name
// rename: points → customer4Points
const {
    name: customer4Name, 
    points: customer4Points
} = customer4;

console.log(customer4Name);
console.log(customer4Points);

// Practice 2
const customer5 = {
    name: "Alice",
    points: 1200
};

const reward2 = {
    name: "RM10 Voucher",
    points: 500
};

// Destructure both objects
// name → customerName
// points → customerPoints
// name → rewardName
// points → rewardPoints

const { 
    name: customer5Name, 
    points: customer5Points
} = customer5;

console.log(customer5Name);
console.log(customer5Points);

const {
    name: reward2Name,
    points: reward2Points
} = reward2;
console.log(reward2Name);
console.log(reward2Points);

// Practice 3
const customer6 = {
    name: "Alice",
    membership: {
        type: "Gold",
        discount: 20
    }
};

// Extract
// name → customerName
// type → membershipType
// discount → membershipDiscount

const {
    name: customer6Name,
    membership: {
        type: customer6membershipType,
        discount: customer6membershipDiscount
    }
} = customer6;

console.log(customer6Name, customer6membershipType, customer6membershipDiscount);

// Practice 4
// Argument: customer object
// Pass to displayCustomer();

const displayCustomer = ({name: customerName, points: customerPoints}) => {
    console.log(customerName, customerPoints);
};

displayCustomer(customer);

// Practice 5
// Argument: customer3
// Set default fo discount
// name → customerName
// type → membershipType
// discount → membershipDiscount (default = 0)

const {
    name: customer7Name,
    membership: {
        type: customer7MembershipType,
        discount: customer7Discount = 0
    }
} = customer3;

console.log(customer7Name);
console.log(customer7MembershipType);
console.log(customer7Discount);
