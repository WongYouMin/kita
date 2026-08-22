// JavaScript Test 7: Mixed Object and Array Destructuring

// =====================================================================================
// Challenge 1
const employee = {
    name: "Maya",
    skills: ["JavaScript", "React", "Git"]
};

// Extract name and firstSkill
const {
    name,
    skills: [firstSkill]
} = employee;

console.log(name, firstSkill);

// =====================================================================================
// Challenge 2
const product = {
    id: "P501",
    details: ["Wireless Keyboard", 129.90]
};

// Extract productId, productName, price
const {
    id: productId,
    details: [productName, price]
} = product;

console.log(productId, productName, price);

// =====================================================================================
// Challenge 3
const customer = [
    "CUS-801",
    {
        name: "Daniel",
        points: 1800
    }
];

// Extract customerId, name, points
const [customerId, {
    name: customerName,
    points
}] = customer;

console.log(customerId, customerName, points);

// =====================================================================================
// Challenge 4
const account = {
    username: "alex99",
    profile: {
        displayName: "Alex"
    }
};

// Extract username and name
// duplicated name variable
// instead of name stored as userDisplayName
const {
    username, 
    profile: {
        displayName: userDisplayName
    }
} = account;

console.log(username, userDisplayName);

// =====================================================================================
// Challenge 5
const order = [
    "ORD-701",
    "Electronics",
    {
        total: 450,
        status: "Paid"
    }
];

// Extract only orderId, total and status
const [
    orderId,
    ,
    {
        total,
        status: orderStatus
    }
] = order;

console.log(orderId, total, orderStatus);

// =====================================================================================
// Challenge 6
const member = {
    name: "Sofia",
    rewards: ["Coffee", "Voucher"]
};

// Extract name, firstReward and thirdReward (default value: "None")
const {
    name: memberName,
    rewards: [
        firstReward,
        ,
        thirdReward = "None"
    ]
} = member;

console.log(memberName, firstReward, thirdReward);

// =====================================================================================
// Challenge 7
const course = {
    name: "Frontend Development",
    modules: [
        "HTML",
        "CSS",
        "JavaScript",
        "React"
    ]
};

// Extract courseName, firstModule, remainingModules
const {
    name: courseName,
    modules: [firstModule, ...remainingModules]
} = course;

console.log(courseName, firstModule, remainingModules);

// =====================================================================================
// Challenge 8
const transaction = {
    id: "TX-801",
    values: [350, "Completed"]
};

// Create displayTransaction() which print the transactionId, amount and status
// with destructuring at function parameter
function displayTransaction({
    id: transactionId,
    values: [amount, transactionStatus]
}){
    console.log(transactionId, amount, transactionStatus);
}

displayTransaction(transaction);

// =====================================================================================
// Challenge 9
const employees = [
    {
        id: "E101",
        info: ["Alice", "Developer"]
    },
    {
        id: "E102",
        info: ["Brian", "Designer"]
    },
    {
        id: "E103",
        info: ["Clara", "Tester"]
    }
];

// Use forEach() and destructuring to print each employeeId, name and role
employees.forEach(({
    id: employeeId,
    info: [employeeName, role]
}) => {
    console.log(employeeId, employeeName, role);
});

// Challenge 10
const records = [
    {
        id: "R101",
        data: ["Alice", 1200, "Gold", "Active"]
    },
    {
        id: "R102",
        data: ["Brian", 800, "Silver", "Active"]
    },
    {
        id: "R103",
        data: ["Clara", 500, "Bronze", "Inactive"]
    }
];

// Predict all outputs
// Iteration 1: "R101", "Alice", 1200, ["Gold", "Active"]
// Iteration 2: "R102", "Brian", 800, ["Silver", "Active"]
// Iteration 3: "R103", "Clara", 500, ["Bronze", "Inactive"]
records.forEach(({ id, data: [name, points, ...details] }) => {
    console.log(id, name, points, details);
});


