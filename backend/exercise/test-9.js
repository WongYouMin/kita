// JavaScript Test 9: Destructuring, Spread Syntax and Rest Pattern

// =====================================================================================
// Challenge 1
const shipment = ["SHP-601", "Express", 3, "Processing"];

// Extract: shipmentId, deliveryType, days, status
const [shipmentId, deliveryType, days, status] = shipment;

// Print all four.
console.log(shipmentId, deliveryType, days, status);

// =====================================================================================
// Challenge 2

const member = {
    id: "M401",
    name: "Lena",
    points: 1250,
    membership: "Gold"
};

// Extract: memberId, memberName, points
const {id: memberId, name: memberName, points} = member;

// Print all three.
console.log(memberId, memberName, points);

// =====================================================================================
// Challenge 3

const payment = [
    "PAY-501",
    "Daniel",
    350,
    "Card",
    "Completed"
];

// Extract only: paymentId, amount, status
const [paymentId, , amount, , paymentStatus] = payment;

// Print them.
console.log(paymentId, amount, paymentStatus);

// =====================================================================================
// Challenge 4
const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js"
];

// Extract: firstTechnology, remainingTechnologies
const [firstTechnology, ...remainingTechnologies] = technologies;

// Print both.
console.log(firstTechnology, remainingTechnologies);
// =====================================================================================
// Challenge 5
const employee = {
    name: "Rachel",
    role: "Developer",
    department: "Frontend"
};

// Create `promotedEmployee`:
// - preserve all existing properties
// - change role to "Senior Developer"
// - do NOT modify employee
const promotedEmployee = {
    ...employee,
    role: "Senior Developer",
};

// Print both objects.
console.log(employee, promotedEmployee);

// =====================================================================================
// Challenge 6
const user = {
    name: "Kevin",
    preferences: {
        theme: "light",
        language: "English"
    }
};

// Create `updatedUser`:
// - preserve everything
// - change theme to "dark"
// - do NOT modify user.preferences
const updatedUser = {
    ...user,
    preferences: {
        ...user.preferences,
        theme: "dark"
    }
};

// Print both preference objects.
console.log(user, updatedUser);
// =====================================================================================
// Challenge 7

const firstGroup = ["A", "B"];
const secondGroup = ["C", "D"];

// Create `combined`:
// ["A", "B", "C", "D"]
const combined = [...firstGroup, ...secondGroup];

// Neither original array should be modified.
console.log(firstGroup, secondGroup, combined);

// =====================================================================================
// Challenge 8
const measurements = [25, 40, 15, 30];

function calculateTotal(a, b, c, d) {
    return a + b + c + d;
}

// Call calculateTotal() using `measurements`.
// Expected Output: 110
console.log(calculateTotal(...measurements));

// =====================================================================================
// Challenge 9
const scores = [72, 88, 91, 65, 79];

// Create `calculateAverage()` using a rest parameter.
// It should accept any number of scores.
const calculateAverage = (...scores) => {
    const sum = scores.reduce((sum, score) => sum + score , 0);
    return sum / scores.length;
}; 
// Call it using `scores`.
console.log(calculateAverage(...scores));

// Expected output: 79

// =====================================================================================
// Challenge 10
const product = {
    id: "P801",
    details: [
        "Mechanical Keyboard",
        299,
        "Electronics"
    ]
};

// Extract: productId, productName, price
// Ignore the category.
const {
    id: productId, 
    details: [
        productName,
        price
    ]
} = product;

// Print the three values.
console.log(productId, productName, price);

// =====================================================================================
// Challenge 11
const order = {
    id: "ORD-901",
    items: [
        "Laptop",
        "Mouse",
        "Keyboard",
        "Webcam"
    ]
};

// Extract: orderId, firstItem, remainingItems
const {id: orderId, items:[firstItem, ...remainingItems]} = order;

// Print all three.
console.log(orderId, firstItem, remainingItems);

// =====================================================================================
// Challenge 12

const account = {
    username: "hana99",
    details: {
        points: 1500,
        membership: "Gold"
    }
};

const {
    username,
    details: {
        points: memberPoints,
        ...otherDetails
    }
} = account;

// Expected Output: "hana99"
console.log(username);

// Expected Output: 1500
console.log(memberPoints);

// Expected Output: {membership: "Gold"}
console.log(otherDetails);

// =====================================================================================
// Challenge 13
const employees = [
    {
        id: "E201",
        data: ["Mia", "Developer", "React", "JavaScript"]
    },
    {
        id: "E202",
        data: ["Noah", "Designer", "Figma", "UI/UX"]
    },
    {
        id: "E203",
        data: ["Sara", "Tester", "Jest", "Cypress"]
    }
];

// Use forEach() and destructuring.
// For each employee, print: employeeId, employeeName, role, remainingSkills
employees.forEach(({id: employeeId, data: [employeeName, role, ...remainingSkills]}) => {
    console.log(employeeId, employeeName, role, remainingSkills);
});

// =====================================================================================
// Challenge 14
const original = {
    name: "Store A",
    location: {
        city: "Johor Bahru"
    }
};

const copy = {
    ...original
};

copy.location.city = "Kuala Lumpur";

// Expected Output: "Kuala Lumpur"
console.log(original.location.city);

// Expected Output: "Kuala Lumpur"
// They have same value for city.
// Shallow copy occurs during object spread syntax.
// The nested object for `location` property is copied as value to `copy`
// Both `original` and `copy` reference the same object.
// Changes to `copy.location.city` will modify `original.location.city`
console.log(copy.location.city);

// Expected Output: false
// `original` and `copy` do not reference the same object
// Spread syntax only copies object properties of `original` to `copy`
console.log(original === copy);

// Expected Output: true
// `location` is a nested object within `original`
// The nested object is copied as value to `copy.location`
// They both reference the same nested object
console.log(original.location === copy.location);

// =====================================================================================
// Challenge 15

const transactions = [
    {
        id: "TX-1001",
        values: [250, "Completed", "Card", "Online"]
    },
    {
        id: "TX-1002",
        values: [120, "Pending", "Cash", "Store"]
    },
    {
        id: "TX-1003",
        values: [450, "Completed", "Card", "Store"]
    }
];

transactions.forEach(({id: transactionId, values:[amount, status, ...paymentDetails]}) => {
    console.log(transactionId, amount, status, paymentDetails);
});
