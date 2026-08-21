// JavaScript Test 5

const customer = {
    name: "Alice",
    age: 21,
    points: 1200,
    membership: {
        type: "Gold",
        discount: 20
    },
    contact: {
        email: "alice@email.com",
        phone: "0123456789"
    }
};

const reward = {
    name: "RM10 Voucher",
    pointsRequired: 500,
    active: true,
    details: {
        category: "Voucher",
        expiryDays: 30
    }
};

// Challenge 1
const {name, points} = customer;
console.log(name, points);

// Challenge 2
const {age} = customer;
console.log(age);

// Challenge 3
// Added default value for Challenge 8
const {
    name: customerName,
    points: customerPoints = 0
} = customer;
console.log(customerName, customerPoints);

// Challenge 4
const {
    membership: {
        type,
        discount
    }
} = customer;
console.log(type, discount);

// Challenge 5
// Added default value for challenge 9
const {
    membership: {
        type: membershipType,
        discount: membershipDiscount = 0
    }
} = customer;
console.log(membershipType, membershipDiscount);

// Challenge 6
const {
    contact: {
        email,
        phone
    }
} = customer;
console.log(email, phone);

// Challenge 7
const { status = "Active" } = customer;
console.log(status);

// Challenge 8
// Redundant as Challenge 3

// Challenge 9
// Redundant as Challenge 5

// Challenge 10
const {
    name: rewardName,
    pointsRequired: requiredPoints,
    active: isActive
} = reward;

console.log(rewardName, requiredPoints, isActive);

// Challenge 11
const {
    details: {
        category: rewardCategory,
        expiryDays: rewardExpiryDays
    }
} = reward;
console.log(rewardCategory, rewardExpiryDays);

// Challenge 12
const displayCustomer = ({
    name: customerName,
    points: customerPoints,
    membership: {
        type: membershipType
    }
}) => {
    console.log(customerName, customerPoints, membershipType);
};

displayCustomer(customer);

// Challenge 13
const getRewardInfo = ({
    name: rewardName,
    pointsRequired: requiredPoints,
    active: isActive,
    details: {
        category,
        expiryDays
    }
}) => {
    return {
        rewardName,
        requiredPoints,
        isActive,
        category,
        expiryDays
    };
};

console.log(getRewardInfo(reward));