// Exercise 3: JavaScript Array


// Task 1
// print cat and dog
const animals = ["Cat", "Dog"];
console.log(animals[0]);
console.log(animals[1]);

// Task 2
// add rabbit to the array 
animals.push("Rabbit");
console.log(animals);

// Task 3
// change dog to tiger 
animals[1] = "Tiger";
console.log(animals);

// Task 4
// remove the last item using pop()
animals.pop();
console.log(animals);

// Task 5
const students = [
    {
        name: "Alice",
        age: 20
    },
    {
        name: "Bob",
        age: 21
    }
];

// print Bob's name
console.log(students[1].name);

// change Alice's age to 22
students[0].age = 22;

// add a new property course: "IT" to Bob
students[1].course = "IT";

// print the whole array
console.log(students);

// Mini Challenge
const users = [
    {
        name: "Alice",
        hobbies: ["Reading", "Gaming"]
    },
    {
        name: "Bob",
        hobbies: ["Football", "Coding"]
    }
];

// Prediction: print Gaming
console.log(users[0].hobbies[1]);
// Prediction: print ["Football", "Coding", "Cooking"]
users[1].hobbies.push("Cooking");
console.log(users[1].hobbies);

// Explain how JavsScript finds "Gaming" step by step
// solution: users[0].hobbies[1];
// first access the object with Gaming in index 0: users[0]
// second access the object property hobbies: .hobbies
// third access the item gaming in index 1: [1]

// Final Practice
const company = {
    name: "OpenAI",
    employees: [
        {
            name: "Alice",
            skills: ["HTML", "CSS"]
        },
        {
            name: "Bob",
            skills: ['JavaScript']
        }
    ]
};

company.employees[0].skills.push("React");
company.employees[1].name = "Charlie";

// Prediction: React
console.log(company.employees[0].skills[2]);
// Prediction: Charlie
console.log(company.employees[1].name);
// Prediction: 2
console.log(company.employees.length);

// Explain how JavaScript finds React 
// company.employees[0].skills[2];
// 1) access company exployees property: company.employees
// 2) access object with react by index 0 in employees array: [0]
// 3) access object properties: .skills
// 4) access item with index 2 in skills array: [2]



// Practice from Scratch
// Task 1: Create an object
let laptop = {
    brand : "Lenovo",
    model: "ThinkPad",
    ram: 16
};

// Print the brand
console.log(laptop.brand);

// Update the RAM to 32
laptop.ram = 32;

// Add a property color with the value "Black"
laptop.color = "Black";

// Delete the model property
delete laptop.model;

// Print the final object
console.log(laptop);

// Task 2: Create an Array
let languages = ["HTML", "CSS", "JavaScript"];

// Print css
console.log(languages[1]);

// Add "React" using push()
languages.push("React");

// Remove the last item using pop()
languages.pop();

// Change HTML to Markdown
languages[0] = "Markdown";

// Print the final array
console.log(languages);

// Task 3: Array of Objects
let books = [
    {
        title: "Atomic Habits",
        author: "James Clear"
    }, 
    {
        title: "Clean Code",
        author: "Robert C. Martin"
    }
];

// Print the second book's title
console.log(books[1].title);

// Add a property pages: 464 to the second book
books[1].pages = 464;

// Change the first book's author to J.Clear
books[0].author = "J. Clear";

// Print the whole array
console.log(books);

// Task 4: Object with an Array
let playlist = {
    name: "Study Music",
    songs: ["Lofi", "Piano", "Rain"]
};

// Print piano
console.log(playlist.songs[1]);

// Add jaxx using push()
playlist.songs.push("Jazz");

// Remove the last song using pop()
playlist.songs.pop();

// Print the final object
console.log(playlist);

// Task 5: Nested Object
let school = {
    name: "ABC School",
    principal : {
        name: "Mr. Tan",
        age: 50
    }
};

// Print the principal's name
console.log(school.principal.name);

// Change the principal's age to 51
school.principal.age = 51;

// Add a new property experience: 25 to the principal
school.principal.experience = 25;

// Print the final object
console.log(school);

// Level 6: Array -> Object -> Array
let classroom = {
    students: [
        {
            name: "Alice",
            subjects: ["Math", "English"]
        },
        {
            name: "Bob",
            subjects: ["Science"]
        }
    ]
};

// Print English
console.log(classroom.students[0].subjects[1]);

// Add history to Bob's subject
classroom.students[1].subjects.push("History");

// Change Alice's name to Alicia
classroom.students[0].name = "Alicia";

// Print the whole object
console.log(classroom);

// Final Challenge: Build a Simple Shopping Cart

let shoppingCart = {
    products : [
        {
            name: "Milk",
            price: 10.00,
            quantity: 1
        },
        {
            name: "Milo",
            price: 30.00,
            quantity: 2
        },
        {
            name: "Green Tea",
            price: 25.00,
            quantity: 1
        }
    ],
};

// Print the second product's name
console.log(shoppingCart.products[1].name);

// Update the first product's quantity
shoppingCart.products[0].quantity = 2;

// Add a new property category to one product
shoppingCart.products[0].category = "beverages";

// Add a third product using push()
shoppingCart.products.push({
    name: "Sandwich",
    price: 5.00,
    quantity: 1
});

// Remove the last product using pop()
shoppingCart.products.pop();

// Print the final cart
console.log(shoppingCart);


// Exercise based on Scenarios

// Task 1: Customer List
const customers = [
    {
        name: "Alice",
        points: 120
    },
    {
        name: "Bob",
        points: 325
    },
    {
        name: "Caty",
        points: 400
    }
];

// Print the whole second customer
console.log(customers[1]);

// Print the third customer's name
console.log(customers[2].name);

// Print the first customer's points
console.log(customers[0].points);

// Task 2: Rewards
const rewards = [
    {
        name: "Americano",
        pointsRequired: 100,
        available: true
    },
    {
        name: "Cream Bun",
        pointsRequired: 150,
        available: false
    },
    {
        name: "Egg Tart",
        pointsRequired: 200,
        available: true
    },
    {
        name: "Croissants",
        pointsRequired: 100,
        available: true
    }
];

// Print the whole fourth reward
console.log(rewards[3]);

// Print the second reward's required points
console.log(rewards[1].pointsRequired);

// Print the first reward's availability
console.log(rewards[0].available);

// Task 3: Shopping Cart
const cart = [
    {
        name: "Apollo Cake Roll",
        price: 10.00,
        quantity: 1
    },
    {
        name: "Matcha Powder",
        price: 20.00,
        quantity: 1
    },
    {
        name: "Milk Loaf",
        price: 8.00,
        quantity: 1
    }
];

// Print the first product
console.log(cart[0]);

// Print the second product's price
console.log(cart[1].price);

// Print the third product's quantity
console.log(cart[2].quantity);

// Task 4: Employee Directory
const employees = [
    {
        name: "Ali",
        department: "Marketing",
        salary: 3000
    },
    {
        name: "Barry",
        department: "IT",
        salary: 4000
    },
    {
        name: "Calvin",
        department: "Production",
        salary: 3500
    },
    {
        name: "David",
        department: "Design",
        salary: 3500
    }
];

// Print the whole third employee
console.log(employees[2]);

// Print the first employee's department
console.log(employees[0].department);

// Print the fourth employee's salary
console.log(employees[3].salary);

// Bonus Challenge
cart.push({
    name: "Potato Chips",
    price: 10.00,
    quantity: 20
},
{
    name: "Vitagen",
    price: 6.00,
    quantity: 2
});

let total = 0;
for(const item of cart){
    total += item.price * item.quantity;
}
console.log(`Total Cost of All Items in Cart: RM ${total}`);


