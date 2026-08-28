// Exercise 12: JavaScript Spread
// Spread syntax is used to spread items of an existing array 
const fruits = ["Apple", "Banana", "Orange"];
const copy = [...fruits];
console.log(copy);

const newCopy = [fruits];
console.log(newCopy);
// Note the difference of not using spread pattern
// newCopy contains nested arrays instead

// =================================================================
// Part 1: Combining Arrays with Spread
const frontendSkills = ["HTML", "CSS"];
const backendSkills = ["Node.js", "MongoDB"];

// `frontendSkills` array is spreaded as items of `"HTML"` and `"CSS"`
// `backendSkills` array is spreaded as items of `"Node.js"` and `"MongoDB"`
// `"JavaScript"` is the added items apart from items in `frontendSkills` and `backendSkills`
const fullStackSkills = [...frontendSkills, ...backendSkills, "JavaScript"];

// Expected Output: ["HTML", "CSS", "Node.js", "MongoDB", "JavaScript"]
console.log(fullStackSkills);

// Challenge 1------------------------------------------------------
const colors = ["Red", "Blue", "Green"];

// Copy `colors` array to new array called `copiedColours`
const copiedColours = [...colors];

// Expected Output: ["Red", "Blue", "Green"]
console.log(copiedColours);

// Challenge 2------------------------------------------------------
const breakfast = ["Toast", "Eggs"];
const drinks = ["Coffee", "Juice"];

// Create `morningMenu` which is an array consists of breakast and drinks item
const morningMenu = [...breakfast, ...drinks];

// Expected Output: ["Toast", "Eggs", "Coffee", "Juice"]
console.log(morningMenu);

// Challenge 3------------------------------------------------------
const existingTasks = ["Study JavaScript", "Practice Git"];

// create `dailyTasks` with existingTasks items and "Study JavaScript", "Practice Git", "Build a project"
const dailyTasks = [...existingTasks, "Build a project"];

// Expected Output: ['Study JavaScript', 'Practice Git', 'Build a project']
console.log(dailyTasks);  

// Challenge 4------------------------------------------------------
const numbers = [10, 20, 30];

const result = [5, ...numbers, 40];

// Expected Output: [5, 10, 20, 30, 40]
console.log(result);

// Challenge 5------------------------------------------------------
const morning = ["Wake up", "Breakfast"];
const afternoon = ["Work", "Lunch"];
const evening = ["Exercise", "Dinner"];

// Create dailyRoutine and contain all values with this order: morning -> afternoon -> evening
const dailyRoutine = [...morning, ...afternoon, ...evening];
console.log(dailyRoutine);

// =================================================================
// Part 2: Copying and Modifying Arrays

// Challenge 6------------------------------------------------------
const ingredients = ["Rice", "Chicken", "Carrot"];

// Create a new array called `updatedIngredients` that contains everything from `ingredients` and "Onion"
const updatedIngredients = [...ingredients, "Onion"];

// Expected Output: [ 'Rice', 'Chicken', 'Carrot', 'Onion' ]
console.log(updatedIngredients);

// Challenge 7------------------------------------------------------
const notifications = ["Message", "Reminder", "Update"];

// create newNotifications with "Alert" added before all existing notifications
const newNotifications = ["Alert", ...notifications];

// Expected Output: ['Alert', 'Message', 'Reminder', 'Update']
console.log(newNotifications);

// Challenge 8------------------------------------------------------
const scores = [70, 80, 90];

// create updatedScores of 60 at beginning and 100 at the end 
const updatedScores = [60, ...scores, 100];

// Expected Output: [60, 70, 80, 90, 100]
console.log(updatedScores);

// Challenge 9------------------------------------------------------
/*
const original = ["A", "B", "C"];

const copy = [...original];

copy.push("D");

// Expected Output for original: ["A", "B", "C"]
// Expected Output for copy: ["A", "B", "C", "D"]
console.log(copy);
*/

// Challenge 10-----------------------------------------------------
/*
const original = ["A", "B", "C"];

const copy = original;

copy.push("D");

// Expected Output for original: ["A", "B", "C", "D"] due to having the same reference as copy
// Expected Output for copy: ["A", "B", "C", "D"] 
console.log(copy);
*/

// ==================================================================
// Part 3: Object Spread Syntax
const employee = {
    name: "Nora",
    role: "Developer",
    department: "Engineering"
};

const employeeCopy = { ...employee };
console.log(employeeCopy);

// Object spread syntax can be used in new object creation. 
// During the process, adding new properties or update its existing properties on the new project does not modify the original object.
// If there is duplicated properties, the later value overwrites the earlier value.
const promotedEmployee = {
    ...employee,
    role: "Senior Developer"
};
console.log(promotedEmployee);

// Challenge 11-------------------------------------------------------
const book = {
    title: "JavaScript Guide",
    author: "Mia",
    pages: 320
};

// Create `bookCopy` as a new object containing all properties from `book`
const bookCopy = {...book};

// Expected Output: {title: "JavaScript Guide", author: "Mia", pages: 320}
console.log(bookCopy);

// Challenge 12--------------------------------------------------------
const laptop = {
    brand: "Lenovo",
    model: "ThinkPad",
    ram: 16
};

// Create `updatedLaptop` containing everything from `laptop` with `storage: 512`

const updatedLaptop = {
    ...laptop,
    storage: 512
};

// Expected Output: {brand: "Lenovo", model: "ThinkPad", ram: 16, storage: 512}
console.log(updatedLaptop);

// Challenge 13----------------------------------------------------------
const profile = {
    username: "mike88",
    level: 12,
    status: "Offline"
};

// Create `onlineProfile` with the same properties, but change `status` -> `"Online"`
const onlineProfile = {
    ...profile,
    status: "Online"
};

// Expected Output: {username: "mike88", level: 12, status: "Online"}
console.log(onlineProfile);

// Challenge 14-----------------------------------------------------------
const settings = {
    theme: "light",
    language: "English"
};

const updatedSettings = {
    ...settings,
    theme: "dark"
};

console.log(settings);
console.log(updatedSettings);
// Expected Output for settings: {theme: "light", language: "English"}
// Expected Output for updatedSettings = {theme: "dark", language: "English"}

// Challenge 15------------------------------------------------------------
const account = {
    username: "jordan01",
    points: 450,
    membership: "Silver"
};

// Create updatedAccount with username -> unchanged, points -> 700 and membership -> "Gold"
const updatedAccount = {
    ...account,
    points: 700,
    membership: "Gold"
};

console.log(account);
console.log(updatedAccount);

// =========================================================================
// Part 4: Shallow Copy
const store = {
    name: "Tech Corner",
    location: {
        city: "Johor Bahru",
        country: "Malaysia"
    }
};

// in object spread syntax
// each object property is spreaded and its value is copied
// the nested object is one of the properties, and its value is copied
// however, the copied value is an object
// causing the original object and copied object holding the same nested object
const storeCopy = {
    ...store
};

console.log(store === storeCopy);
console.log(store.location === storeCopy.location);

// as they hold the same object, modification of `city`'s value occur at both `store` and `storeCopy`
store.location.city = "Kuala Lumpur";
console.log(store.location.city);
console.log(storeCopy.location.city);

// Challenge 16---------------------------------------------------------------
const course = {
    title: "JavaScript",
    instructor: {
        name: "Lina",
        experience: 5
    }
};

const courseCopy = {
    ...course
};

// Expected Output: false
// Object spread creates new outer layer of object and copies the property value of original object `course` to `courseCopy`
// Therefore, `course` and `courseCopy` do not reference the same object
console.log(course === courseCopy);

// Expected Output: true
// the `instructor` is a property of `course` whose value is an object
// object spread copies each property from the original object `course` to `courseCopy`
// Since the value is an object, the value is copied instead of creating a new nested object
// therefore, both `course.instructor` and `courseCopy.instructor` are referencing the same object
console.log(course.instructor === courseCopy.instructor);

// Challenge 17----------------------------------------------------------------
const restaurant = {
    name: "Green Bowl",
    address: {
        city: "Melaka",
        postcode: "75000"
    }
};

const restaurantCopy = {
    ...restaurant
};

restaurantCopy.address.city = "Kuala Lumpur";

// Expected Output: "Kuala Lumpur"
console.log(restaurant.address.city);

// Expected Output: "Kuala Lumpur". Both holding same reference to address object as the address property. Modification to address city will results in changes in both.
console.log(restaurantCopy.address.city);

// Challenge 18-----------------------------------------------------------------
const departments = [
    ["Frontend", "React"],
    ["Backend", "Node.js"]
];

const departmentsCopy = [...departments];

// Expected Output: false, they do not reference the same object, although they have the same content.
// They contains nested array.
// The outer array is spreaded and its value in this example, the array will be assigned to the `departmentsCopy`
// While the outer array is different, but the inner array reference the same array
console.log(departments === departmentsCopy);

// Expected Output: true, the items are both ["Frontend", "React"] which is array
console.log(departments[0] === departmentsCopy[0]);

// Challenge 19------------------------------------------------------------------
const customer = {
    name: "Hana",
    contact: {
        email: "hana@example.com",
        phone: "012-3456789"
    }
};

// Create `updatedCustomer` where phone → "019-8888888", but customer.contact should not be modified
// Object spread copies each `customer''s properties value to updatedCustomer
// Navigate into the current `contact` property with the use of ':'
// Object spread copies each `customer.contact`'s properties to the nested object of `contact` property
// update contact phone number to "019-8888888", in which latest value replaces earlier value
const updatedCustomer = {
    ...customer,
    contact: {
        ...customer.contact,
        phone: "019-8888888",
    },
};

console.log(customer.contact);
console.log(updatedCustomer.contact);

// Challenge 20------------------------------------------------------------------
const project = {
    name: "Kita",
    tasks: ["Login", "Dashboard", "Rewards"]
};

// Create `updatedProject` where `"Redemption"` is added to the tasks, while the original `project.tasks` is not modified
// Object spread copies `project`'s properties to `updatedProject`
// Navigate into current `tasks` property with the use of `:`
// Use array spread to copy each `project.tasks`' items to the nested array of `tasks` property
// Update the array contents of `tasks` by adding "Redemption" to the array
const updatedProject = {
    ...project,
    tasks: [
        ...project.tasks,
        "Redemption"
    ]
};

console.log(project.tasks);
console.log(updatedProject.tasks);

// ===============================================================================
// Part 5: Spread Syntax with Function Arguments
const prices = [120, 80, 150];

// Using spread syntax to pass `prices` as function arguments
// Spread syntax spreads `prices` array items into individual arguments
// index 0 -> price1
// index 1 -> price2
// index 2 -> price3
// Notes that spread syntax is used at function argument to spread the array into individual arguments
// Function parameters will receive those arguments according to their position
function calculateTotal(price1, price2, price3) {
    return price1 + price2 + price3;
}

console.log(calculateTotal(...prices));

// Challenge 21--------------------------------------------------------------------
const loyaltyScores = [80, 90, 75];

// Create calculateAverage using spread syntax
function calculateAverage(score1, score2, score3){
    return (score1 + score2 + score3) / 3;
}

console.log(calculateAverage(...loyaltyScores));

// Challenge 22--------------------------------------------------------------------
const temperatures = [28, 31, 26, 34, 29];

// Find the highest temperature with `Math.max()`
// Pass the array values using spread syntax

const highestTemperature = (temperatures) => Math.max(...temperatures);
console.log(highestTemperature(temperatures));

// Challenge 23--------------------------------------------------------------------
const distances = [12, 7, 19, 5, 14];

// Find the shortest distance with `Math.min()`
// Pass the array values using spread syntax
const shortestDistance = (distances) => Math.min(...distances);
console.log(shortestDistance(distances));

// Challenge 24--------------------------------------------------------------------
const values = [10, 20, 30];

function display(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

// Expected Output: 10 20 30
display(...values);

// Challenge 25--------------------------------------------------------------------
const transaction = ["TX-901", 450, "Completed"];

function displayTransaction(transactionId, amount, status) {
    console.log(transactionId);
    console.log(amount);
    console.log(status);
}

// Call displayTransaction using spread syntax
displayTransaction(...transaction);

// Challenge 26--------------------------------------------------------------------
const firstBatch = [10, 20];
const secondBatch = [30, 40];

// Create a new array `allValues` containing [10, 20, 30, 40]
// Use spread syntax to pass `allValues` into calculateSum()

const allValues = [...firstBatch, ...secondBatch];
const calculateSum = (a, b, c, d) => a + b + c + d;

// Expected Output: 100
console.log(calculateSum(...allValues));

// ===============================================================================
// Part 6: Spread Syntax with Strings and Iterables

const word = "Kita";
const letters = [...word];

// Expected Output: ["K", "i", "t", "a"]
console.log(letters);

const prefix = ["Welcome"];
const spreadPrefixAndWord = [...prefix, ...word];

// Expected Output: ["Welcome", "K", "i", "t", "a"]
// Spreading `word` which is a string, spreads the string into individual string
// Spreading `prefix` which is an array, spreads the array items into individual item
console.log(spreadPrefixAndWord);

// Challenge 27-------------------------------------------------------------------
const code = "JS";

// Create `letters` using spread syntax
const newLetters = [...code];

// Expected Output: "J", "S"
console.log(newLetters);

// Challenge 28-------------------------------------------------------------------
const label = "VIP";

// Create `badges` containing ["Member", "V", "I", "P"]
const badges = ["Member", ...label];

// Expected Output: ["Member", "V", "I", "P"]
console.log(badges);

// Challenge 29-------------------------------------------------------------------
/*
const word = "HELLO";
const letters = [...word];

// Expected Output: ["H", "E", "L", "L", "O"]
console.log(letters);
*/

// Challenge 30-------------------------------------------------------------------
const newNumbers = [1, 2];
const newCode = "AB";

// Create numbersAndCode using spread syntax to produce [1, 2, "A", "B"]
const numbersAndCode = [...newNumbers, ...newCode];

// Expected Output: [1, 2, "A", "B"]
console.log(numbersAndCode);

// Challenge 31-------------------------------------------------------------------
const digits = "123";

function display(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

// Expected Output: "1" "2" "3"
display(...digits);

// Challenge 32-------------------------------------------------------------------
/*
const word = "CAT";

function display(first, second, third) {
    console.log(first, second, third);
}

// Expected Output: "C", "A", "T"
display(...word);
*/

