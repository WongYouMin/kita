// Exercise 2: JavaScript Objects
// Task 1: Create an object

/*
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
*/

// Student Profile CRUD Challenge
 const student = {
    id: 1,
    name: "Alice",
    age: 20
 };

//  Task 1: Read
// print the student's name
console.log(student.name);

// Task 2: Create
// add new properties
student.course = "Information Technology";
student.cgpa = 3.85;
// Print the whole opject
console.log(student);

// Task 3: Update
// update age to 21, and cgpa to 3.90
student.age = 21;
student.cgpa = 3.90;
// Print only the updated age and cgpa
console.log(`Age: ${student.age} CGPA: ${student.cgpa}`);

// Task 4: Delete
delete student.id;
// Print the whole object
console.log(student);

// Task 5: Bracket Notation
const property = "course";
// Print the course using the variable
console.log(student[property]);

// Bonus Challenge 1
const anotherStudent = student;
anotherStudent.name = "Bob";

// Predict the output
// Prediction: student.name is Bob, because both hold the same reference value, which points to same student object.
console.log(student.name);
console.log(anotherStudent.name);

// Bonus Challenge 2
const student1 = {
    name: "Alice"
};

const student2 = {
    name: "Alice"
};

// Predict the output
// Prediction: both results false, as they both hold different reference value, which points to different student object.
console.log(student1 == student2);
console.log(student1 === student2);

// Final Boss
const user = {
    name: "John"
};

const admin = user;

user.age = 30;

admin.country = "Malaysia";

delete user.name;

admin.city = "Johor Bahru";

/*  Prediction: 
    user = {
        age: 30,
        country: "Malaysia",
        city: "Johor Bahru"
    }
    user and admin are the same, because they both hold the same reference value which points to the same user object
*/
console.log(user);
console.log(admin);