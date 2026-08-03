// Exercise 2: JavaScript Objects
// Task 1: Create an object
let book = {
    title: "Atomic Habits",
    author: "James Clear",
    pages: 320
};

console.log(book.title);

// Task 2: Add a property
const student = {
    name: "Alice",
    age: 20
};

student.course = "Computer Science";
console.log(student);

// Task 3: Update a property
const product = {
    name: "Keyboard",
    price: 100
};

product.price = 80;
console.log(product.price);

// Task 4: Delete a property
const employee = {
    name: "John",
    salary: 5000,
    department: "IT"
};
delete employee.salary;
console.log(employee);

// Task 5: Dot or Bracket
const user = {
    name: "Bob",
    age: 25
};

const key = "age";
console.log(user[key]);

// Task 6: Reference Challenge
const a = {
    score: 10
};

// b and a have same reference point, pointing to same object
const b = a;
// c and b have same reference point, pointing to same object as a
const c = b;
// Shared reference
c.score = 50;

// Predict output: a b c has score with 50
console.log(a.score);
console.log(b.score);
console.log(c.score);

// Bonus Challenge: Mini Project
let myself = {
    name: "Yumi",
    age: 24,
    country: "Malaysia",
    isStudent: false,
    favoriteLanguage: "Mandarin"
};

// 1. Print your name
console.log(myself.name);
// 2. Update favoriteLanguage to "JavaScript"
myself.favoriteLanguage = "JavaScript";
// 3. Add a new property called goal with the value "Frontend Developer"
myself.goal = "Frontend Developer";
// 4. Delete the age property
delete myself.age;
// 5. print the final object
console.log(myself);

// 