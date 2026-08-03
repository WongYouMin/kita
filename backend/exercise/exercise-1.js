// Exercise 1: JavaScript Variables
// Task 1
const studentName = "Ali";
const birthYear = 2002;
const enrolled = true;

let currentScore;
var school = null;

// Task 2
let points = 100;
// increase points by 50
points += 50;
console.log(points);

const username = "Alex";
// username = "Yumi";
// Error: assignment to constant variable
// console.log(username);

// Task 3
const student = {
    name : "Jay",
    age : 28,
    skills : ["Muay Thai", "Cycling"],
    isGraduated: false
};

student.skills.push("Badminton");
student.isGraduated = true;
console.log(student);

// Task 4
let hello = "Hello";
let num = 25;
let tired = true;
let knowledge;
let stomach = null;
let books = [];
let student2 = {};
let eat = function(){};

console.log(typeof hello);
console.log(typeof num);
console.log(typeof tired);
console.log(typeof knowledge);
console.log(typeof stomach);
console.log(typeof books);
console.log(typeof student2);
console.log(typeof eat);

// Task 5
// Scenario 1 Prediction: a is 10, b is 20, because both a and b holds primitive value, so when b is updated to 20, it does not affect a
// Scenario 2 Prediction: user1.name is "Mary", because user2 and user1 has the same reference value, the changes in referred object of user2 applies in user1

// Task 6
const user = {
    name: "Ali",
    age: 24
};

user.age = 25;
console.log(user);

user.city = "Johor Bahru";
console.log(user);

// Error in reassignment of new object to constant variable, which does not allow reassignment of value, the reference value should always point to the same object
// user = {
//     name : "Abu",
//     age: 26
// };

// Final mini challenge
// Predicted output: x.value is 20 and y.value is 30, initially x and y has same reference value, then x have a new reference value with value of 20, but y does not change its reference value, therefore they have different reference value, which results in different value.
// 2 objects are created.
// x and y do not share the same reference at the end.


let x = {
    value: 10
};

let y = x;

x = {
    value: 20
};

y.value = 30;

console.log(x.value);
console.log(y.value);