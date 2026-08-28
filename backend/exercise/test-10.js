// JavaScript Test 10: Application Test for Destructuring, Spread, Rest and Array Methods

// Challenge 1---------------------------------------------------------------------------
const transactions = [
    { id: "TX-1101", customer: "Alice", amount: 120, status: "Completed" },
    { id: "TX-1102", customer: "Brian", amount: 80, status: "Pending" },
    { id: "TX-1103", customer: "Clara", amount: 250, status: "Completed" },
    { id: "TX-1104", customer: "David", amount: 60, status: "Cancelled" }
];

// Display the customer name and amount of every completed transaction.

transactions
    .filter(({status}) => status === "Completed")
    .forEach(({customer: name, amount}) => {
        console.log(name, amount);
    });

// Challenge 2----------------------------------------------------------------------------
const customers = [
    { id: "C301", name: "Maya", points: 850 },
    { id: "C302", name: "Ryan", points: 1200 },
    { id: "C303", name: "Sofia", points: 650 },
    { id: "C304", name: "Ethan", points: 1500 }
];

// Create a new collection containing only the customer names. The original customers must remain unchanged.
const customerNames = customers.map(({name}) => name);
console.log(customers, customerNames);

// Challenge 3----------------------------------------------------------------------------
// Create a new collection containing customers with at least 1000 points.
const highValueCustomers = customers.filter(({points}) => points >= 1000);
console.log(highValueCustomers);

// Challenge 4----------------------------------------------------------------------------
const rewards = [
    { id: "R301", name: "Coffee Voucher", points: 300 },
    { id: "R302", name: "Movie Ticket", points: 800 },
    { id: "R303", name: "Lunch Voucher", points: 500 }
];

// Create a new collection where each reward contains : {id, name, requiredPoints}
const newRewards = rewards.map(({id, name, points: requiredPoints}) => 
    {
        id,
        name,
        requiredPoints
    }
);

console.log(rewards, newRewards);

// Challenge 5-----------------------------------------------------------------------------
const rewards2 = [
    { id: "R401", name: "Notebook", points: 200, available: false },
    { id: "R402", name: "Coffee", points: 300, available: false },
    { id: "R403", name: "T-Shirt", points: 700, available: true },
    { id: "R404", name: "Backpack", points: 1000, available: true }
];

// Find the first available reward
const firstAvailableReward = rewards2.find(({available}) => available === true);
console.log(firstAvailableReward);

// Challenge 6------------------------------------------------------------------------------
const purchases = [
    ["P501", "Coffee", 12],
    ["P502", "Lunch", 25],
    ["P503", "Dessert", 15],
    ["P504", "Dinner", 40]
];

// Calculate the total amount spent
const totalAmountSpent = purchases.reduce((sum, [, , amount]) => sum + amount, 0);
console.log(totalAmountSpent);

// Challenge 7-------------------------------------------------------------------------------
const cart = {
    customerId: "C501",
    items: ["Coffee", "Sandwich", "Cake"],
    total: 28
};

// Add "Juice" to customer cart items
// Create a new cart containing the updated items.
// The original cart and cart.items must not be modified.
const updatedCart = {
    ...cart,
    items: [
        ...cart.items,
        "Juice"
    ]
};

console.log(cart, updatedCart);

// Challenge 8--------------------------------------------------------------------------------
const transaction = {
    id: "TX-1201",
    customer: "Nadia",
    purchases: [
        ["Coffee", 10],
        ["Sandwich", 15],
        ["Cake", 12]
    ]
};

// Calculate the total amount of the transaction.
const totalPurchaseAmount = transaction.purchases.reduce((total, [, amount]) => total + amount, 0);
console.log(totalPurchaseAmount);

// Challenge 9---------------------------------------------------------------------------------
const transactions2 = [
    { id: "TX-1301", customer: "Alice", amount: 45 },
    { id: "TX-1302", customer: "Brian", amount: 80 },
    { id: "TX-1303", customer: "Clara", amount: 125 }
];

// Create a new collection where each transaction contains {id, customer, amount, points}
// Customers earn 1 point for every RM10 spent, ignoring any remainder.
const newTransactions = transactions2.map(({id, customer, amount}) => {
    const points = Math.floor(amount / 10);
    return {
        id,
        customer,
        amount,
        points
    };
});

console.log(transactions, newTransactions);

// Challenge 10----------------------------------------------------------------------------------
const customer = {
    id: "C601",
    name: "Daniel",
    purchases: [
        ["Coffee", 12],
        ["Lunch", 25],
        ["Voucher", 50],
        ["Dessert", 18]
    ]
};

// Create a new collection containing only purchases costing more than RM20.
const purchaseHistory = customer.purchases.filter(([, amount]) => amount > 20);
console.log(customer, purchaseHistory);

// Challenge 11-----------------------------------------------------------------------------------
// A loyalty system may receive an unknown number of transaction amounts
// Create a function that accepts any number of amounts and returns their total.

const calculateTotal = (...amount) => {
    return amount.reduce((sum, amount) => sum + amount, 0);
};

console.log(calculateTotal(20, 50, 30, 100));
console.log(calculateTotal(15, 25));

// Challenge 12------------------------------------------------------------------------------------
const customers2 = [
    {
        id: "C701",
        name: "Alicia",
        transactions: [
            ["TX701", 120, "Completed"],
            ["TX702", 80, "Pending"],
            ["TX703", 150, "Completed"]
        ]
    },
    {
        id: "C702",
        name: "Ben",
        transactions: [
            ["TX704", 200, "Completed"],
            ["TX705", 50, "Completed"]
        ]
    },
    {
        id: "C703",
        name: "Chloe",
        transactions: [
            ["TX706", 90, "Cancelled"],
            ["TX707", 110, "Completed"]
        ]
    }
];

// You are building the Kita loyalty dashboard.
// The dashboard needs a summary for each customer containing: {customerId, customerName, completedTransactions, totalSpent}
// where
// completedTransactions contains the IDs of completed transactions.
// totalSpent is the total amount from completed transactions only.
// The original customers data must not be modified.
const customerSummary = customers2.map(({id: customerId, name: customerName, transactions}) => {
    const filteredTransactions = transactions
        .filter(([, , status]) => status === "Completed");
    
    const completedTransactions = filteredTransactions.map(([id]) => id);
    const totalSpent = filteredTransactions.reduce((total, [, amount]) => total + amount, 0);
    return {
        customerId,
        customerName,
        completedTransactions,
        totalSpent
    };
});

console.log(customerSummary);