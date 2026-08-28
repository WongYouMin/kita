// JavaScript Test 8: Spread Syntax

// =====================================================================================
// Challenge 1

const weekdays = ["Monday", "Tuesday", "Wednesday"];

// Create `copiedWeekdays` as a new array containing the same items.
const copiedWeekdays = [...weekdays];

// Expected Output: ["Monday", "Tuesday", "Wednesday"]
console.log(copiedWeekdays);

// =====================================================================================
// Challenge 2
const fruits = ["Apple", "Banana"];
const vegetables = ["Carrot", "Broccoli"];

// Create `groceries` containing all fruits followed by all vegetables.
const groceries = [...fruits, ...vegetables];

// Expected Output: ["Apple", "Banana", "Carrot", "Broccoli"]
console.log(groceries);

// =====================================================================================
/// Challenge 3

const tasks = ["Study", "Exercise", "Read"];

// Create `updatedTasks` containing all existing tasks
// and "Practice JavaScript" at the end.
const updatedTasks = [...tasks, "Practice JavaScript"];

// The original `tasks` must not be modified.
console.log(tasks);
console.log(updatedTasks);

// =====================================================================================
// Challenge 4

const member = {
    name: "Sofia",
    points: 800,
    membership: "Silver"
};

// Create `goldMember` containing everything from `member`,
// but change membership to "Gold" and points to 1500.
const goldMember = {
    ...member,
    membership: "Gold",
    points: 1500
};

console.log(goldMember);

// =====================================================================================
// Challenge 5

const company = {
    name: "TechLab",
    address: {
        city: "Penang",
        country: "Malaysia"
    }
};

const companyCopy = {
    ...company
};

// Predict both outputs:
// Expected Output: false, they do not reference the same object
console.log(company === companyCopy);

// Expected Output: true, the `address` property is copied to the new object, but its value reference the same nested object.
console.log(company.address === companyCopy.address);

// =====================================================================================
// Challenge 6

const user = {
    name: "Ryan",
    contact: {
        email: "ryan@example.com",
        phone: "011-1234567"
    }
};

// Create `updatedUser` where the phone becomes "016-9876543".
// `user.contact` must remain unchanged.
const updatedUser = {
    ...user,
    contact: {
        ...user.contact,
        phone: "016-9876543"
    }
};

console.log(user);
console.log(updatedUser);

// =====================================================================================
// Challenge 7
const categories = [
    ["Electronics", "Laptop"],
    ["Furniture", "Desk"]
];

const categoriesCopy = [...categories];

// Predict both outputs:
// Expected Output: false, array spread syntax copy the items of `categories` to `categoriesCopy`
// They do not reference the same object
console.log(categories === categoriesCopy);

// Expected Output: true, array spread syntax copy the properties value to new array
// Since the first item of `categories` is a nested array, they both reference the same array
// Instead of creating new inner array
console.log(categories[0] === categoriesCopy[0]);

// =====================================================================================
// Challenge 8
const expenses = [120, 80, 50];

function calculateTotal(a, b, c) {
    return a + b + c;
}

// Call calculateTotal() using spread syntax.
console.log(calculateTotal(...expenses));

// =====================================================================================
// Challenge 9
const code = "KITA";

// Create `characters` using spread syntax.
const characters = [...code];
console.log(characters);

// =====================================================================================
// Challenge 10
const values = [10, 20];
const updatedValues = [5, ...values, 30];

function display(a, b, c, d) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

// Expected Output: 5 10 20 30
display(...updatedValues);

// =====================================================================================
// Challenge 11
const product = {
    name: "Laptop",
    tags: ["Electronics", "Computer"]
};

// Create `updatedProduct` where:
// - all existing properties are preserved
// - "Sale" is added to the tags
// - the original product.tags must NOT be modified
const updatedProduct = {
    ...product,
    tags: [
        ...product.tags,
        "Sale"
    ]
};

console.log(product);
console.log(updatedProduct);

// =====================================================================================
// Challenge 12
const first = [10, 20];
const second = [30, 40];

const data = {
    values: first
};

// Create `updatedData` such that:
// - it is a new object
// - `values` contains all values from `first` and `second`
// - add 50 at the end
// - neither `first`, `second`, nor `data.values` is modified
const updatedData = {
    ...data,
    values: [
        ...data.values,
        ...second,
        50
    ]
};

console.log(first);
console.log(second);
console.log(data);
console.log(updatedData);
