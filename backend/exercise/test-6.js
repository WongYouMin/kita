// JavaScript Test 6: Array Destructuring

// =====================================================================================
// Challenge 1
const employee = ["EMP-101", "Sarah", "Developer"];

// Extract into these variables: employeeId, name, position, then print all three
const [employeeId, name, position] = employee;
console.log(employeeId, name, position);

// =====================================================================================
// Challenge 2
const reward = ["RW-201", "Coffee Voucher", 500, "Available"];

// Extract only: rewardId and points, then print them
const [rewardId, , points] = reward;
console.log(rewardId, points);


// =====================================================================================
// Challenge 3
const shipment = ["SHP-301"];

// Extract shipmentId and status (default value: "Processing")
const [shipmentId, status = "Processing"] = shipment;
console.log(shipmentId, status);

// =====================================================================================
// Challenge 4
const categories = ["Electronics", "Furniture", "Clothing", "Books"];

// Extract mainCategory and otherCategories
// mainCategory -> "Electronics"
// otherCategories -> ["Furniture", "Clothing", "Books"]
const [mainCategory, ...otherCategories] = categories;
console.log(mainCategory, otherCategories);

// =====================================================================================
// Challenge 5
const customer = ["CUS-501", "Daniel", 2400];

// Create displayCustomer() function with array destructuring at function parameter
function displayCustomer([customerId, name, points]){
    console.log(customerId, name, points);
}

displayCustomer(customer);

// =====================================================================================
// Challenge 6
const payments = [
    ["PAY-701", 100, "Cash"],
    ["PAY-702", 250, "Card"],
    ["PAY-703", 80, "Online"]
];

// Use forEach() to print each payment details with array destructuring
payments.forEach(([paymentId, amount, method]) => {
    console.log(paymentId, amount, method);
});


// =====================================================================================
// Challenge 7
const products = [
    ["P101", "Laptop", 3500, "Electronics"],
    ["P102", "Desk", 800, "Furniture"],
    ["P103", "Jacket", 250, "Clothing"]
];

// For each product, print only productId and price
products.forEach(([productId, , price]) => {
    console.log(productId, price);
});


// =====================================================================================
// Challenge 8
const teams = [
    ["Frontend", "Alice", "Bob"],
    ["Backend", "Charlie", "David", "Emma"],
    ["QA", "Frank"]
];

// For each team, print the teamName and members
teams.forEach(([teamName, ...members]) => {
    console.log(teamName, members);
});

// =====================================================================================
// Challenge 9
const order = ["ORD-900", undefined, 3, "Express"];

// Prediction
// orderId: "ORD-900"
// status: "Pending" (due to array item value is undefined)
// quantity: 3
// shipping: "Express"
const [orderId, status = "Pending", quantity, shipping] = order;

// =====================================================================================
// Challenge 10
const records = [
    ["R001", "Alice", 1200, "Gold", "Active"],
    ["R002", "Bob", 800, "Silver", "Active"],
    ["R003", "Charlie", 500, "Bronze", "Inactive"]
];

// Prediction
// Iteration 1: "R001", 1200, ["Gold", "Active"]
// Iteration 2: "R002", 800. ["Silver", "Active"]
// Iteration 3: "R003", 500, ["Bronze", "Inactive"]
records.forEach(([id, , points, ...details]) => {
    console.log(id, points, details);
});