// Exercise 4: JavaScript Functions

/*
// Practice 1
// Create a function called sayHello
function sayHello(){
    // Print: Hello!
    console.log('Hello!');
}

// Call it 3 times
sayHello();
sayHello();
sayHello();

// Practice 2
// Create a function with a parameter
function greet(name){
    console.log(`Hello ${name}`);
}

greet("Alice");
greet("Bob");
greet("Charlie");

// Practice 3
// Create an object
const bankAccount = {
    owner: "Alice",
    balance: 1000.00
};

// Create a function with parameters
function deposit (account, amount){
    account.balance += amount;
}

deposit(bankAccount, 500);
console.log(bankAccount);

// Mini Challenge 1
const player = {
    name: "Alice",
    health: 100
};

function heal(player, amount){
    player.health += amount;
}

heal(player, 20);
console.log(`Player Current Health: ${player.health}`);

// Mini Challenge 2
const cart = {
    total: 80
};

function addToCart(cart, price){
    cart.total += price;
}

addToCart(cart, 20);
console.log(`Current Cart Total: RM ${cart.total}`);

addToCart(cart, 15);
console.log(`Current Cart Total: RM ${cart.total}`);

// Mini Challenge 3
const fruits = ["Apple"];

function addFruit (array, fruit){
    array.push(fruit);
}

addFruit(fruits, "Banana");
addFruit(fruits, "Orange");

console.log(fruits);

// Mini Challenge 4
const classroom = {
    students : [
        {
            name: "Alice",
            score: 80
        }
    ]
};

function addScore(classroom, points){
    classroom.students[0].score += points;
}

addScore(classroom, 15);
console.log(classroom.students[0].score);

// Return Statement in Function
// Task 1



function getGreeting(name){
    return `Hello ${name}!`;
}

console.log(getGreeting("Alice"));

// Task 2
function square(number){
    return number * number;
}

console.log(square(6));

// Task 3

/*
function isAdult(age){
    if(age >= 18){
        return true;
    }
    return false;
}
*/

/* 
function isAdult(age){
    return age >= 18;
}

console.log(isAdult(20));
console.log(isAdult(15));

// Task 4
const student = {
    name: "Alice",
    cgpa: 3.92
};

function getStudentName(student){
    return student.name;
}

console.log(getStudentName(student));

// Task 5
function getCGPA(student){
    return student.cgpa;
}

console.log(getCGPA(student));

// Task 6
const fruits = ["Apple", "Banana", "Orange"];

function getFirstFruit(array){
    return array[0];
}

console.log(getFirstFruit(fruits));

// Task 7
function getLastFruit(array){
    return array[array.length - 1];
}

console.log(getLastFruit(fruits));

// Task 8
const company = {
    employees: [
        {
            name: "Alice",
            skills: ["HTML", "CSS", "JavaScript"]
        }
    ]
};

function getFirstSkill(company){
    return company.employees[0].skills[0];
}

console.log(getFirstSkill(company));

// Task 9
function getLastSkill(company){
    const aliceSkills = company.employees[0].skills;
    return company.employees[0].skills[aliceSkills.length - 1];
}

console.log(getLastSkill(company));

// Final Boss
const cart = {
    products: [
        {
            name: "Milk",
            price: 10,
            quantity: 2
        },
        {
            name: "Bread",
            price: 5,
            quantity: 3
        }
    ]
};

function getCartTotal(cart){
    let total = 0;

    for(const product of cart.products){
        total += product.quantity * product.price;
    }

    return total;
}

console.log(getCartTotal(cart));

// Bonus Challenge

function add(a, b){
    console.log(a + b);
}

const answer = add(5, 3);
// Prediction: undefined
console.log(answer);


function add(a, b){
    return a + b;
}

const answer = add(5, 3);
// Prediction: 8
console.log(answer);

*/

/*
// Challenges

// Challenge 1
function greetPerson(name){
    return `Konnichiwa ${name}!`;
}

console.log(greetPerson("Jack"));

// Challenge 2
function getDiscountedPrice(price){
    return price >= 100 ? price * 0.9 : price;
}

console.log(getDiscountedPrice(120));
console.log(getDiscountedPrice(90));

// Challenge 3
function isEven(number){
    return number % 2 == 0;
}

console.log(isEven(0));
console.log(isEven(3));

// Challenge 4
const student = {
    name: "Isfa",
    classroom: "1A",
    age: 14
};

function getStudentName(student){
    return student.name;
}

console.log(getStudentName(student));

// Challenge 5
const employee = {
    name: "John",
    salary: 4000
};

function addBonus(employee){
    return employee.salary += 500;
}

console.log(addBonus(employee));

// Challenge 6
const movie = {
    name: "Spirited Away",
    director: "Hayao Miyazaki",
    rating: 7.9
};

function determineRating(movie){
    return movie.rating >= 8 ? "Excellent" : movie.rating >= 6 ? "Good" : "Average";
}

console.log(determineRating(movie));

// Challenge 7
const favoriteFood = ["Milk", "Thunder Rice", "Mee Goreng"];

function getFirstFavoriteFood(favoriteFood){
    return favoriteFood[0];
}

console.log(getFirstFavoriteFood(favoriteFood));

/*
// Challenge 8
const customers = ["Alice", "Bob", "Charlie"];

function getLastCustomerName(customers){
    return customers[customers.length-1];
}

console.log(getLastCustomerName(customers));
*/

/*

// Challenge 9
const numbers = [1, 3, 5, 7, 9];

function calculateSum(numbers){
    let sum = 0;
    for(const number of numbers){
        sum += number;
    }
    return sum;
}

console.log(calculateSum(numbers));

// Challenge 10
const books = [
    {
        title: "Book A",
        author: "Author A",
        pages: 100
    },
    {
        title: "Book B",
        author: "Author B",
        pages: 200
    },
    {
        title: "Book C",
        author: "Author C",
        pages: 300
    }
];

function getFirstBookTitle(books){
    return books[0].title;
}

console.log(getFirstBookTitle(books));

// Challenge 11
const company = {
    employees: [
        {
            name: "Alice",
            department: "A"
        },
        {
            name: "Bob",
            department: "B"
        }
    ]
};

function getSecondEmployeeDepartment(company){
    return company.employees[1].department;
}

console.log(getSecondEmployeeDepartment(company));

// Challenge 12
const playlist = [
    {
        title: "Song A",
        duration: 3
    },
    {
        title: "Song B",
        duration: 4
    },
    {
        title: "Song C",
        duration: 5
    }
];

function calculatePlaylistTotalDuration(playlist){
    let sum = 0;

    for(const music of playlist){
        sum += music.duration;
    }

    return sum;
}

console.log(calculatePlaylistTotalDuration(playlist));

// Final Boss
const shoppingCart = [
    {
        name: "Product A",
        price: 90.00,
        quantity: 1
    },
    {
        name: "Product B",
        price: 130.00,
        quantity: 2
    },
    {
        name: "Product C",
        price: 30.00,
        quantity: 1
    }
];

function getTotalNumberOfItems(cart){
    let total = 0;
    for(const item of cart){
        total += item.quantity;
    }
    return total;
}

function getTotalPrice(cart){
    let total = 0;
    for(const item of cart){
        total += item.quantity * item.price;
    }
    return total;
}

function getMostExpensiveProduct(cart){
    let mostExpensive = 0;
    let mostExpensiveProduct = "";

    for(const item of cart){
        if(item.price > mostExpensive){
            mostExpensive = item.price;
            mostExpensiveProduct = item.name;
        }
    }
    return mostExpensiveProduct;
}

console.log(getTotalNumberOfItems(shoppingCart));
console.log(getTotalPrice(shoppingCart));
console.log(getMostExpensiveProduct(shoppingCart));

// Ultimate Challenge
const customers = [
    {
        name: "Ali",
        age: 25,
        phoneNumber: "012",
        points: 1000,
    },
    {
        name: "Bob",
        age: 28,
        phoneNumber: "013",
        points: 2000
    },
    {
        name: "Charlie",
        age: 18,
        phoneNumber: "014",
        points: 400
    }
];

function getPointsBalance(customer){
    return customer.points;
}

function canRedeemReward(points){
    return points >=500;
}

function getPointsRequired(points){
    return 500 - points;
}

function redeemReward(customer){
    const balance = getPointsBalance(customer);
    const canRedeem = canRedeemReward(balance);
    
    if(canRedeem){
        return `Congratulations ${customer.name}! You can redeem a reward.`;
    } 

    return `Hello ${customer.name}, you need ${getPointsRequired(balance)} more points to redeem a reward.`;
}

console.log(redeemReward(customers[2]));

// Different Challenge
const customers = [
    {
        name: "Alice",
        points: 1000
    },
    {
        name: "Bob",
        points: 2000
    }
];

let shoppingCart = [
    {
        name: "Product A",
        price: 10.00,
        quantity: 3
    },
    {
        name: "Product B",
        price: 15.00,
        quantity: 2
    }
];

function calculateTotalPrice(cart){
    let total = 0;
    for(const item of cart){
        total += item.price * item.quantity;
    }
    return total;
}

function earnPoints(customer, totalSpent){
    // Calculate points earned 
    // Earn 1 points for every RM 10 spent
    const pointsEarned = totalSpent / 10;

    // Assigned points earned to customer
    customer.points += pointsEarned;
    return pointsEarned;
}

function generateReceipt(customer, cart, totalSpent, pointsEarned){
    let receipt = "Receipt";
    const date = new Date();
    receipt += `\n Date: ${date.toLocaleDateString()}`;
    receipt += `\n Customer: ${customer.name}`;
    receipt += `\n | Product | Quantity | Price (RM) |`;
    receipt += `\n | ------- | -------- | ---------- |`;
    
    for(const item of cart){
        receipt += `\n | ${item.name} | ${item.quantity} | ${item.price.toFixed(2)} |`;
    }
    
    receipt += `\n Total Amount Paid: RM ${totalSpent.toFixed(2)}`;
    receipt += `\n Loyalty Points Earned: ${pointsEarned}`;
    receipt += `\n Customer Points Balance: ${customer.points}`;

    return receipt;
}

function checkout(customer, cart){
    const total = calculateTotalPrice(cart);
    const pointsEarned = earnPoints(customer, total);

    console.log(generateReceipt(customer, cart, total, pointsEarned));
}

checkout(customers[1], shoppingCart);

*/

const customers = [
    {
        name: "Alice",
        points: 1000
    },
    {
        name: "Bob",
        points: 2000
    }
];

const shoppingCart = [
    {
        name: "Product A",
        price: 15.00,
        quantity: 2
    },
    {
        name: "Product B",
        price: -1,
        quantity: 1
    }
];

function isCartItemValid(cart){
    for(const item of cart){
        if(item.quantity < 1){
            return false;
        }
        if(item.price <= 0){
            return false;
        }
        if(!item.name){
            return false;
        }
    }
    return true;
}

function calculateAmountPaid(cart){
    let total = 0;
    for(const item of cart){
        total += item.price * item.quantity;
    }
    return total;
}

function calculatePointsToEarn(total){
    return Math.floor(total / 10);
}

function earnPoints(customer, pointsToEarn){
    customer.points += pointsToEarn;
}

function generateReceipt(customer, cart, amountPaid, pointsEarned){
    let receipt = ` ====================================================`;
    receipt += `\n                      Receipt`;
    receipt += `\n ====================================================`
    const today = new Date();
    receipt += `\n Date: ${today.toLocaleString()}`;
    receipt += `\n Customer: ${customer.name}`;
    receipt += `\n\n | ----------------------------------------------- |`;
    receipt += `\n | Product | Quantity | Price (RM) | Subtotal (RM) |`;
    receipt += `\n | ------- | -------- | ---------- | ------------- |`;

    for(const item of cart){
        receipt += `\n | ${item.name} | ${item.quantity} | ${item.price.toFixed(2)} | ${(item.price * item.quantity).toFixed(2)} |`;
    }

    receipt += `\n | ----------------------------------------------- |`;

    receipt += `\n\n Total Amount Paid: RM ${amountPaid.toFixed(2)}`;
    receipt += `\n Points Earned: ${pointsEarned}`;
    receipt += `\n Customer Points Balance: ${customer.points}`;
    receipt +=  `\n\n ------------------ Thank You----------------------`;
    return receipt;
}

function checkout(customer, cart){
    if(cart.length === 0){
        console.log(`No items found in shopping cart`);
        return;
    }

    if(!isCartItemValid(cart)){
        console.log(`Invalid cart item`);
        return;
    }
    const amountPaid = calculateAmountPaid(cart);
    const pointsToEarn = calculatePointsToEarn(amountPaid);
    earnPoints(customer, pointsToEarn);
    
    console.log(generateReceipt(customer, cart, amountPaid, pointsToEarn));
}

checkout(customers[1], shoppingCart);
