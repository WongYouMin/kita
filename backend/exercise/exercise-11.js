// Exercise 11: Array Destructuring
// Extract array item based on its position

// =======================================================================================
// Part 1: Introduction
// Practice 1
const customer = ["Alice", 21, 1200];

// Challenge 1
// Use array destructuring to extract name, age and points
// array item at index 0 -> name
// array item at index 1 -> age
// array item at index 2 -> points
const [name, age, points] = customer;
console.log(name, age, points);

// Challenge 2
const [
    customerName,
    customerAge,
    customerPoints
] = customer;

// Note that in array destructuring, array item is extracted based on the index
// Ensure the extracted item matches with the intended variable
// array item at index 0 -> customerName
// array item at index 1 -> customerAge
// array item at index 2 -> customerPoints
console.log(customerName, customerAge, customerPoints);

// Challenge 3
// Not executed due to duplicated code in same file
// Prediction: 
// points: "Alice"
// name: 21
// age: 1200

// =======================================================================================
// Part 2: Skipping Position
// Skipping array item for destructuring by leaving empty spaces with `,`
const reward = ["Coffee Voucher", "Food", 500, true];

// Challenge 4
// Only extract rewardName and pointsRequired
// array item at index 0 -> rewardName
// array item at index 1 -> skipped with `,`
// array item at index 2 -> pointsRequired
// array item at index 3 -> no extraction needed as no more values to be destructured
const [rewardName, , pointsRequired] = reward;
console.log(rewardName, pointsRequired);

// Challenge 5
// Only extract category
// array item at index 0 -> skipped with `,`
// array item at index 1 -> category
// array item at index onwards -> no extraction needed as no more values to be destructured
const [, category] = reward;
console.log(category);

// Challenge 6
// Prediction: isActive contain 500, as it is the array item at index 2

// =======================================================================================
// Part 3: Default Values
// Provides fallback value for array destructuring using `=`
// Default value is used when the extracted array item value is undefined
// Note that undefined, empty and null are different

// Challenge 7
// Extract orderId and status (default value: "Pending")
const order = ["ORD-1001"];
const [orderId, status = "Pending"] = order;
console.log(orderId, status);

// Challenge 8
// Extract name and role (default value: "intern")
// Prediction: role contains "Developer", default value is only applied when the value is undefined
const employee = ["Daniel", "Developer"];
const [employeeName, role = "Intern"] = employee;
console.log(employeeName, role);

// Challenge 9
// Prediction: bookingId: "BK-200", status = "Confirmed", default value is used because status is undefined

// Challenge 10
// Prediction: method is null, null is not undefined, default value will not be used

// =======================================================================================
// Part 4: Rest `...` in Array Destructuring
// Collect the remaining array items as an array
// It can contain empty array if there is no remaining array items
// Note that the `...` rest pattern must be the last element in array destructuring

// Challenge 11
// Extract firstItem and remainingItems
const shoppingCart = ["Laptop", "Mouse", "Keyboard", "Monitor"];
const [firstItem, ...remainingItems] = shoppingCart;
// array index 0 -> firstItem
// array index 1 and onwards -> remainingItems
console.log(firstItem, remainingItems);

// Challenge 12
// Extract firstReward and remainingRewards but skip "T-shirt"
const rewards = ["Coffee", "T-Shirt", "Voucher", "Backpack", "Notebook"];
const [firstReward, , ...remainingRewards] = rewards;
// array index 0 -> firstReward
// array index 1 -> skipped with `,`
// array index 2 and onwards -> remainingRewards
console.log(firstReward, remainingRewards);

// Challenge 13
// Predict output
const users = ["Alice", "Bob", "Charlie", "David"];
const [firstUser, secondUser, ...otherUsers] = users;

// firstUser: "Alice"
console.log(firstUser);
// secondUser: "Bob"
console.log(secondUser);
// otherUsers: ["Charlie", "David"]
console.log(otherUsers);

// Challenge 14
// Predict output
const products = ["Laptop", "Mouse"];
// firstProduct: "Laptop"
// remainingProducts: ["Mouse"]

// Note that rest pattern `...` always produce array
// Even there is only one item remained, it still produce an array
const [firstProduct, ...remainingProducts] = products;

// =======================================================================================
// Part 5: Array Destructuring in Function Parameters
// Array destructuring can take place at function parameter
// Instead of passing array items individually as arguments

const transaction = ["TXN-1001", 250, "Completed"];

// Display transaction by destructuring transaction as parameter
// array index 0 -> transactionId
// array index 1 -> amount
// array index 2 -> status
function displayTransaction([transactionId, amount, status]){
    console.log(transactionId, amount, status);
}

// Array destructuring can also takes place within the function
/* 
function displayTransaction(transaction){
    const [transactionId, amount, status] = transaction;
    console.log(transactionId, amount, status);
}
*/

// transaction array sent as argument to displayTransaction()
displayTransaction(transaction);

// Challenge 15
const booking = ["BK-301", "Hotel", 3];

// Use array destructuring in function parameter for displayBooking()
function displayBooking([bookingId, type, nights]){
    console.log(bookingId, type, nights);
}

displayBooking(booking);

// Challenge 16
const item = ["Wireless Mouse", "Electronics", 59.90];

// Create displayItem(), use array destructuring in parameter and skip "Electronics"
function displayItem([itemName, , price]){
    console.log(itemName, price);
}

displayItem(item);

// Challenge 17
const playlist = ["Song A", "Song B", "Song C", "Song D"];

// Create displayPlaylist(), use array destructuring in parameter
// firstSong -> "Song A"
// remainingSongs -> ["Song B", "Song C", "Song D"]

// Attempt using arrow function instead
const displayPlaylist = ([firstSong, ...remainingSongs]) => {
    console.log(firstSong);
    console.log(remainingSongs);
};

displayPlaylist(playlist);

// Challenge 18
// Predict three outputs
const delivery = ["DLV-500", "Express", 2, "Pending"];

// array index 0 -> deliveryId
// array index 1 -> skipped with blank space and `,`
// array index 2 -> days
// array index 3 -> status
function checkDelivery([deliveryId, , days, status]) {
    // "DLV-500"
    console.log(deliveryId);
    // 2
    console.log(days);
    //"Pending"
    console.log(status);
}

checkDelivery(delivery);

// =======================================================================================
// Part 6: Destructuring Arrays of Data

const transactions = [
    ["TX-201", 120, "Completed"],
    ["TX-202", 75, "Pending"],
    ["TX-203", 250, "Completed"]
];

// Without destructuring
/*
transactions.forEach(transaction => {
    console.log(transaction[0], transaction[1], transaction[2]);    
});
*/

// Display all transactions with array destructuring
// in forEach array method, each iteration callback receives an item of array
// in this example, each array item is an array
// the array is then destructured into transactionId, amount and status at parameter
transactions.forEach(([transactionId, amount, status])=>{
    console.log(transactionId, amount, status);
});

// Challenge 19: forEach + destructuring
const orders = [
    ["ORD-501", "Laptop", 2],
    ["ORD-502", "Keyboard", 1],
    ["ORD-503", "Monitor", 3]
];

// Use forEach() with array destructuring in callback parameter
orders.forEach(([orderId, itemName, quantity]) => {
    console.log(orderId, itemName, quantity);
});

// Challenge 20
const members = [
    ["M001", "Gold", 1500],
    ["M002", "Silver", 800],
    ["M003", "Bronze", 300]
];

// Use forEach() with array destructuring for only memberId and points
members.forEach(([memberId, , points]) => {
    console.log(memberId, points);
});

// Challenge 21
const playlists = [
    ["Morning", "Song A", "Song B", "Song C"],
    ["Workout", "Song D", "Song E"],
    ["Relax", "Song F", "Song G", "Song H", "Song I"]
];

// Use destructuring to extract playlistName and songs
playlists.forEach(([playlistName, ...songs]) => {
    console.log(playlistName, songs);
});

// Challenge 22
const invoices = [
    ["INV001", "Hosting", 120],
    ["INV002", "Domain", 50]
];

// Prediction
// Iteration 1: "INV001", 120
// Iteration 2: "INV002", 50

invoices.forEach(([invoiceId, , amount]) => {
    console.log(invoiceId, amount);
});