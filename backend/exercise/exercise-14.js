// Exercise 14: Asynchronous JavaScript
/*
// =================================================================
// Part 1: Introduction to Asynchronous JavaScript

// Synchronous programming: executing code in order (one statement at a time)
// It can only run the other statement when the previous statement is executed completely
// Execution: shows "A" -> shows "B" -> shows "C"
console.log("A");
console.log("B");
console.log("C");

// Challenge 1-------------------------------------------------------
// Asynchronous programming: starting statement that takes time
// while waiting for the process to end, it can continue to run the other statement
// Execution: shows "A" -> start delaying 2000 ms -> shows "C" -> shows "B" after delayed 2000 ms
console.log("A");
setTimeout(() => {
    console.log("B");
}, 2000);
console.log("C");

// Challenge 2-------------------------------------------------------
console.log("Customer opened Kita");

setTimeout(() => {
    console.log("Loading customer rewards");
}, 2000);

console.log("Customer can continue using Kita");

// Predict the Output
// shows "Customer opened Kita" -> starts delaying 2000 ms 
// -> shows "Customer can continue using Kita" -> shows "Loading customer rewards" after delayed 2000 ms

// Challenge 3--------------------------------------------------------
console.log("Start");

setTimeout(() => {
    console.log("Middle");
}, 2000);

console.log("End");

// Predict the output
// shows "Start" -> start delaying 2000 ms
// shows "End" => shows "Middle" after delayed 2000 ms

// Challenge 4---------------------------------------------------------
// Callback is the function passed as argument to the parameter of another function
function greetCustomer(name, callback) {
    console.log("Hello, " + name);

    callback();
}

// Function Call
// 2 arguments: "Hana" -> name; () => {console.log("Welcome to Kita!");} -> callback
greetCustomer("Hana", () => {
    console.log("Welcome to Kita!");
});

// Predict the output: 
// Hello, Hana 
// Welcome to Kita!

// Challenge 5-----------------------------------------------------------
function processReward(callback) {
    console.log("Checking reward...");

    setTimeout(() => {
        console.log("Reward is ready!");

        // Callback execution
        callback();
    }, 2000);
}

// callback: () => {console.log("Show reward to customer");}
processReward(() => {
    console.log("Show reward to customer");
});

// Predict the output: shows "Checking reward..." -> starts delaying for 2000 ms
// -> delayed 2000 ms completed -> shows "Reward is ready!" 
// -> shows "Show reward to customer"

// Challenge 6------------------------------------------------------------
function redeemReward(callback) {
    console.log("Starting redemption...");

    setTimeout(() => {
        console.log("Points deducted.");

        callback();
    }, 2000);
}

console.log("Customer selected reward.");

redeemReward(() => {
    console.log("Redemption completed.");
});

console.log("Customer can continue browsing.");

// Predict the output: shows "Customer selected reward."
// -> shows "Starting redemption..." -> start delaying 2000 ms
// -> shows "Customer can continue browsing."
// -> after waiting for 2000 ms, shows "Points deducted."
// -> shows "Redemption completed."

// =================================================================
// Part 2: Promises
// Promises is object which obtain results in future in asynchronous operation.
// Promises states: 
//  pending -> fulfilled -> success
//  pending -> rejected -> failure

// Challenge 7------------------------------------------------------
const rewardPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Reward is ready!");
    }, 2000);
});

// Expected Output: starts delaying 2000 ms -> delay completed -> shows "Reward is ready"
console.log(rewardPromise);

// Tasks:
// 1. What does `rewardPromise` represents? 
//      A promise object which holds eventual result in asynchronous operation.
//      Note that a promise object, its value and state are different.
//      Promise object's value cannot be accessed directly from promise object.
//      await and then() can be used to accessed promise object's value
// 2. What does `new Promise(...)` create?
//      Create a promise object. 
//      It is a constructor to create promise object
//      It provides resolve and reject function as the parameter of executor.
//      In the executor, asynchronous operation to create the promise object is specified.
// 3. What does `resolve("Reward is ready!")` means?
//      It passes `"Reward is ready!"` as argument to resolve function
//      When resolve function is called, the promise state changes from "pending" -> "fulfilled"
//      When reject function is called, the promise state changes from "pending" -> "rejected"
// 4. What state is the Promise in immediately after it is created?
//      Pending
// 5. What state will it be in after approximately 2 seconds?
//      `resolve()` is called. State changes from "pending" -> fulfilled". The result returned is "Reward is ready!".

// Challenge 8-------------------------------------------------------
const rewardPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Reward is ready!");
    }, 2000);
});

rewardPromise2.then((result) => {
    console.log(result);
});

// Tasks
// 1. What will eventually be printed?
//      result of `rewardPromise`, which is "Reward is ready"
// 2. What is `result`?
//      "Reward is ready"
// 3. When does the function inside `.then()` execute?
//      It receives the result from the executor in promise constructor, and print the result to console
// 4. In your own words, what does `.then()` do?
//      It register a callback to be executed when the promised is fullfilled

// The Chronology
// 1. Promise constructor is called to create a promise object.
//    A promise object represents the eventual result of an asynchronous operation.
// 2. Promise constructor receives a parameter: A callback function (executor)
// 3. Inside the executor contains
//    - Two parameters: resolve and reject function
//    - function body : The operation that will be executed when the promise object is initialized
//                       It specifies the asynchronous operation to obtain the value of promise object
// 4. In this example, inside the executor function:
//    The promise state is "pending"
//    Sets timer of 2s, 
//    After delaying 2s, resolve function is called, the promise state is changed to "fulfilled", the promise is fulfilled with the value "Reward is ready".
//    The promise value is passed to the callback registered as parameter when the promised is fulfilled
//    The callback is executed, the result is printed. Expected result is "Reward is ready!"

// Challenge 9---------------------------------------------------------
const pointsPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Unable to retrieve points.");
    }, 1500);
});

pointsPromise.catch((error) => {
    console.log(error);
});

// Tasks
// 1. Initial Promise state?
//      pending
// 2. What happens after 1500 ms?
//      reject() changes promise state to rejected with reason "Unable to retrieve points."
// 3. What does reject("Unable to retrieve points.") do?
//      reject() changes promise state to rejected with reason "Unable to retrieve points."
//      When the promise state is changed to rejected, the callback registered with catch will be invoked.
// 4. What is error?
//      "Unable to retrieve points".
// 5. What will be printed?
//      "Unable to retrieve points."
// 6. In your own words, what does .catch() do?
//      When the promise state is changed to rejected, the callback registered with catch will be invoked.
//      It receives the error as its argument.

// Challenge 10----------------------------------------------------------
const redemptionPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = false;

        if (success) {
            resolve("Reward redeemed!");
        } else {
            reject("Not enough points.");
        }
    }, 2000);
});

redemptionPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    }); 

// Tasks
// 1. What is the initial Promise state?
//      pending
// 2. What happens after 2 seconds?
//      reject() is called due to success is false. promise state is changed to rejected, with "Not enough points." as its reason.
// 3. Is resolve() or reject() called?
//      reject()
// 4. What is the Promise's final state?
//      rejected
// 5. What is result?
//      No result is assigned because the callback registered with then() does not execute.
// 6. What is error?
//      "Not enough points."
// 7. What gets printed?
//      "Not enough points."
// 8. Why does .then() not execute?
//      promise state is not changed to fulfilled, the callback registered with then() will not execute
// 9. Why does .catch() execute?
//      promise state is changed to rejected, the callback registered with catch() will be executed, receiving the error "Not enough points." as its parameter.

// Part 3: async or await
// Challenge 11----------------------------------------------------------
async function getReward() {
    return "Reward is ready!";
}

const result = getReward();

console.log(result);

// Tasks
// 1. What do you think getReward() returns?
//      promise object with value 'Reward is ready!'
// 2. Is result the string "Reward is ready!"?
//      no
// 3. Or is result something else?
//      promise object
// 4. What do you think async does to a function?
//      Makes a function always returns promise object

// The Chronology
// 1. return "Reward is ready!";
// 2. return makes the promise fulfilled automatically
// 3. assign promise value with "Reward is ready!"
// 4. async makes function always return promise

// Note that async does not need to manually call resolve() to fulfill a promise
// instead, return will fulfill the promise automatically with its value
// while throw will reject the promise with an error

// Challenge 12--------------------------------------------------------------
async function getReward() {
    return "Reward is ready!";
}

getReward().then((result) => {
    console.log(result);
});

// Tasks
// 1. What does getReward() return?
//      A promise object with value "Reward is ready!"
// 2. What is the Promise's state?
//      Initially pending, when the value is returned, the state is changed to fulfilled
// 3. What is the Promise's value?
//      "Reward is ready!"
// 4. Why can we use .then() on getReward()?
//      then() can be used with promise object, it is registered with a callback, that receives the fulfilled promise value as its parameter
// 5. What is result?
//      "Reward is ready!"
// 6. What will be printed?
//      "Reward is ready!"
// 7. Explain the flow:
//      return "Reward is ready!" -> promise is fulfilled with value "Reward is ready!"
//      promise object is returned -> then() receives promise object value in its parameter as result
//      result is printed at console as "Reward is ready!"

// Challenge 13--------------------------------------------------------------
async function getReward() {
    return "Reward is ready!";
}

async function showReward() {
    const result = await getReward();

    console.log(result);
}

showReward(); 

// Tasks
// 1. What does getReward() return?
//      Promise object fulfilled with value "Reward is ready!"
// 2. What does await getReward() do?
//      Wait until promise is fulfilled with value to assign the value to result
// 3. What will result contain?
//      fulfilled promise value, which is "Reward is ready!"
// 4. What will be printed?
//      "Reward is ready!"
// 5. Compare these two: const result = getReward(); with const result = await getReward();
//    What is different about the value assigned to result?
//      Without await, promise object is assigned to result
//      Await ensures fulfilled promise value is assigned to result 
// 6. Why do you think await is useful if .then() can already obtain the Promise's value?
//      it is more readable and convenient to write

// Challenge 14--------------------------------------------------------------
/*
    Write your own: Customer Points

    Requirements:
        Create an async function called getCustomerPoints
        Return a points number
        Create another async function that calls getCustomerPoints()
        Use await
        Store the returned points in a variable
        Print the points


const getCustomerPoints = async() => {
    return 57;
};

const showCustomerPoints = async() => {
    const customerPoints = await getCustomerPoints();
    console.log(customerPoints);
};

showCustomerPoints();*/

// Challenge 15---------------------------------------------------------------
/*
    create an async function that simulates getting customer points from a server.

    Requirements:
        Create getCustomerPoints.
        It should be an async function.
        Inside it, create a Promise using new Promise().
        Use setTimeout() to simulate a server response after 2 seconds.
        Resolve the Promise with a points number of your choice.
        Return that Promise from getCustomerPoints.
        Create showCustomerPoints.
        Use await to obtain the points.
        Print the points.
 

const getCustomerPoints = async() => {
    const customerPoints = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(90);
        }, 2000);
    });

    return customerPoints;
};

const showCustomerPoints = async() => {
    const customerPoints = await getCustomerPoints();
    console.log(customerPoints);
};

showCustomerPoints(); */

// Challenge 16-----------------------------------------------------------------
/* 
    Modify your Challenge 15 so that the simulated server operation fails.

    Requirements:
        Keep getCustomerPoints as an async function.
        Keep the new Promise().
        Keep the 2-second setTimeout().
        Instead of resolve(90), use reject().
        Give it a rejection reason such as "Unable to retrieve customer points."
        Use await inside showCustomerPoints().
        Handle the rejection using try...catch.
        Print the error. 


const getCustomerPoints = async () => {
    const customerPoints = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Unable to retrieve customer points.");
        }, 2000);
    });
    return customerPoints;
};

const showCustomerPoints = async () => {
    try {
        const customerPoints = await getCustomerPoints();
        console.log(customerPoints);
    } catch (error) {
        console.log(error);
    }
    
};

showCustomerPoints(); */

/*
    The Chronology in getCustomerPoints()
    1. A new promise object, customerPoints is created.
    2. Initial promise object state: pending
    3. Promise object is returned.
    4. After 2s, reject() is invoked.
    5. Promise state changes to rejected with reasons "Unable to retrieve customer points."

    The Chronology
    1. showCustomerPoints() is invoked.
    2. in try block, promise object is obtained.
    3. initially, promise object state is pending.
    4. After 2 seconds, promise object state is rejected.
    5. Await encounters rejection, code in catch block will run.
    6. "Unable to retrieve customer points" is printed at console.

*/ 

// Challenge 17------------------------------------------------------------------
/*
Create: getCustomer()

Requirements:
    getCustomer() must be async.
    Inside it, create a Promise.
    Simulate a server request with setTimeout() for 2 seconds.
    Resolve with an object containing:
    id
    name
    points
    Create showCustomer().
    Use await to get the customer.
    Print the customer's name.
    Print the customer's points.
    Use your own customer data.
 
const getCustomer = () => {
    const customer = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: "CUS-001",
                name: "Amy",
                points: 1000
            });
        }, 2000);
    });
    return customer;
};

const showCustomer = async () => {
    try {
        const {name: customerName, points: customerPoints} = await getCustomer();
        console.log(customerName, customerPoints);

    } catch (error) {
        console.log(error);
    }
};

showCustomer(); */

// Challenge 18---------------------------------------------------------------------
/*
Requirements
    Create: getCustomerPoints()
    async
    returns a number

Create: getMembershipLevel(points)
    async
    receives points
    if points >= 1000 → "Gold"
    otherwise → "Silver"
    returns the membership level

Then create: showMembership()
    async
    uses await to get points
    uses await again to get membership level
    prints both

Use your own points value.
Don't use new Promise() this time.


const getCustomerPoints = async () => {
    return 1000;
};

const getMembershipLevel = async (points) => {
    return points >= 1000 ? "Gold" : "Silver";
}; */

/* 
const showMembership = async() => {
    getCustomerPoints()
        .then(getMembershipLevel)
        .then((membershipLevel) => {
            console.log(membershipLevel);
        });
};

const showMembership = async () => {
    try {
        const points = await getCustomerPoints();
        const membershipLevel = await getMembershipLevel(points);

        console.log(membershipLevel);
    } catch (error) {
        console.log(error);
    }
};


showMembership(); */

// Challenge 19--------------------------------------------------------------------------
/*
getCustomerPoints()
    Make it:
        async
        create a Promise
        wait 1 second
        resolve with your chosen points
    
getMembershipLevel(points)
    Make it:
        async
        create a Promise
        wait 1 second
        determine the membership level
        resolve with "Gold" or "Silver"

showMembership()
    use await for getCustomerPoints()
    then use await for getMembershipLevel(points)
    print the final membership level


const getCustomerPoints = async () => {
    const customerPoints = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(500);
        }, 1000)
    });
    return customerPoints;
};

const getMembershipLevel = async (points) => {
   const membershipLevel = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(points >= 1000 ? "Gold" : "Silver");
        }, 1000);
   });

   return membershipLevel;
};

const showMembership = async () => {
    try {
        const customerPoints = await getCustomerPoints();
        const membershipLevel = await getMembershipLevel(customerPoints);

        console.log(membershipLevel);
    } catch (error) {
        console.log(error);
    }
};

showMembership(); */

// Challenge 20-------------------------------------------------------------------------
/*
Requirements:

    getCustomerPoints()
        Keep it working:
        wait 1 second
            ↓
        resolve(500)
            ↓
        getMembershipLevel(points)

        Make it reject if the customer doesn't have enough points.
        For example:
            points >= 1000
                ↓
            resolve("Gold")

            points < 1000
                ↓
            reject("Customer does not qualify for Gold membership.")

            Keep the 1-second delay.

    showMembership()
        Keep:
            try {
                ...
            } catch (error) {
                ...
            }

Use await for both operations.


const getCustomerPoints = async () => {
    const customerPoints = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(500);
        },1000);
    });
    return customerPoints;
};

const getMembershipLevel = async (points) => {
    const membershipLevel = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(points >= 1000){
                resolve("Gold");
            } else {
                reject("Customer does not qualify for Gold membership.");
            }
        }, 1000);
    });
    return membershipLevel;
};

const showMembership = async () => {
    try {
        const customerPoints = await getCustomerPoints();
        const membershipLevel = await getMembershipLevel(customerPoints);

        console.log(membershipLevel);
    } catch (error) {
        console.log(error);
    }
}; 

showMembership();*/

// Tasks
// 1. Which await encounters the rejection?
//      yes, at the getMembershipLevel(), when the points is less than 1000, reject() is invoked. 
//      reject() changes the promise object state to rejected, causing the await of getMembershipLevel() to encounter rejection.
// 2. Does console.log(membershipLevel) execute?
//      it does not execute when the points is less than 1000, as the catch block will start running when the promise state is changed to "rejected".
// 3. Does the catch block execute?
//      it will execute when the points is less than 1000, the rejection reason is passed as error parameter to the catch block, to display the error.
// 4. What does error contain?
//      "Customer does not qualify for Gold membership."
// 5. Why does the first await succeed but the second one fail?
//      First await succeed as it always invoke resolve(), which changes the promise state to fulfilled, with value 500.
//      Second await failed as the customer points is less than 1000, it will invoke reject(), which changes the promise state to rejected, causing catch block to run.

// Challenge 21---------------------------------------------------------------------------
// Rewrite showMembership() with promise chaining
/*
const getCustomerPoints = async () => {
    const customerPoints = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1000);
        },1000);
    });
    return customerPoints;
};

const getMembershipLevel = async (points) => {
    const membershipLevel = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(points >= 1000){
                resolve("Gold");
            } else {
                reject("Customer does not qualify for Gold membership.");
            }
        }, 1000);
    });
    return membershipLevel;
};

const showMembership = () => {
    getCustomerPoints()
        .then(getMembershipLevel)
        .then((membershipLevel) => {
            console.log(membershipLevel);
        })
        .catch((error) => {
            console.log(error);
        });
};

showMembership(); */

// Challenge 22----------------------------------------------------------------------------------
/* You have this situation:

Kita needs to retrieve a customer, then retrieve that customer's rewards, then display the rewards. 
If anything fails, display an error.

Write two versions of showCustomerRewards():
    Version A: using async/await + try/catch
    Version B: using Promise chaining + .catch() 

 const customers = [
    {
        id: "C001",
        name: "Amy",
        points: 1000
    },
    {
        id: "C002",
        name: "Bob",
        points: 500
    }
];

const rewards = [
    {
        id: "R001",
        customerId: "C001",
        name: "Farm Fresh Taro Milk",
        points: 500
    },
    {
        id: "R002",
        customerId: "C002",
        name: "Farm Fresh Banana Milk",
        points: 600
    }
];
const getCustomerDetails = async (id) => {
    const customer = customers.find(customer => customer.id === id);

    if(customer){
        return customer;
    }
    throw new Error("Customer Id not found.");
};

const getCustomerReward = async ({id}) => {
    const reward = rewards.find(reward => reward.customerId === id);
    if(reward){
        return reward;
    }
    throw new Error("Customer has no rewards.");
};

// Version 1
/* 
const showCustomerReward = async () => {
    try {
        const customer = await getCustomerDetails("C001");
        const customerReward = await getCustomerReward(customer);

        console.log(customerReward);
    } catch (error) {
        console.log(error);
    }
}; 

// Version 2
const showCustomerReward = () => {
    getCustomerDetails("C003")
        .then(getCustomerReward)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });
};

showCustomerReward();*/

 

// Challenge 22B
// Retrieve the customer details and reward list, which are two independent asynchronous operation.
// Without waiting for each asynchronous operation to complete, before starting the next asynchronous operation.
/*
const customers = [
    {
        id: "C001",
        name: "Amy",
        points: 1000
    },
    {
        id: "C002",
        name: "Bob",
        points: 500
    }
];

const rewards = [
    {
        id: "R001",
        name: "Farm Fresh Taro Milk",
        points: 500
    },
    {
        id: "R002",
        name: "Farm Fresh Banana Milk",
        points: 600
    },
    {
        id: "R002",
        name: "Farm Fresh Strawberry Milk",
        points: 700
    }
];
const getCustomerDetails = async (id) => {
    const customer = customers.find(customer => customer.id === id);

    if(customer){
        return customer;
    }

    throw new Error("Customer Id is not found.");
};

const getRewardList = async () => {
   if(rewards.length !== 0){
    return rewards;
   }
   throw new Error("No rewards found.");
};

const showInformation = async () => {
    try {
        const customerDetails = getCustomerDetails("C001");
        const rewardList = getRewardList();

        const result = await Promise.all([customerDetails, rewardList]);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

showInformation();


    The Chronology
        In getCustomerDetails()
            1. search for the first matched customer object with the specified customer id.
            2. if true, return the customer object. Promise state changed to fulfilled with customer object as value.
            3. if false, throw an error with reason "Customer Id is not found.". Promise state changed to rejected, with reason as its error.

        In getRewardList()
            1. check if the rewards is not empty (strict equality is needed)
            2. if true then return the rewards array, promise state changed to fulfilled with rewards array as value.
            3. if false, throw an error with reason "No rewards found.". Promise state changed to rejected with reason as its error.

        In showInformation()
            1. In try block, declare variables to hold promise object for getCustomerDetails() and getRewardList().
            2. Create a new promise object with Promise.all() method.
            3. Send the promise objects in array as the argument to create the promise object.
            4. All asynchronous operations (Both getCustomerDetails() and getRewardList()) are waited at the same time within Promise.all().
            5. Only when all promise objects' state changed to fulfilled, the promise object state will be changed to fulfilled.
            6. Even if one of the promise object's state changed to rejected, the promise object state will be changed to rejected.
            7. The result which contains an array of all promise object's fulfilled value will be printed on console.
            8. If promise object state is changed to rejected, catch block executes. The error will be printed on console.
*/ 

// Challenge 23---------------------------------------------------------------
// Create showCustomerInformation() by retrieving customer, pointTransactions and rewards
/*
const customer = {
    id: "CUS-101",
    name: "Mia"
};

const pointTransactions = [
    {
        id: "TXN-001",
        customerId: "CUS-101",
        points: 300
    },
    {
        id: "TXN-002",
        customerId: "CUS-101",
        points: 450
    }
];

const rewards = [
    {
        id: "RWD-101",
        name: "Matcha Latte",
        points: 500
    },
    {
        id: "RWD-102",
        name: "Chocolate Cake",
        points: 700
    }
];

const getCustomer = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(customer);
        }, 1000);
    });
};

const getPointTransactions = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(pointTransactions);
        }, 1500);
    });
};

const getRewards = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(rewards);
        }, 1000);
    });
};

const showCustomerInformation = () => {
    const customer = getCustomer();
    const pointTransactions = getPointTransactions();
    const rewards = getRewards();

    Promise.all([customer, pointTransactions, rewards])
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });
};

showCustomerInformation(); */

// =================================================================
// Part 3: Fetch API
// API: a defined interface allowing a software interact with another software
// Protocol: a set of rules defining how client and server communicates
// Fetch API: a web API allowing JavaScript send network request or handle responses in a web browser

// fetch()
// a function provided by Fetch API to send network request and return response object
// it always returns a promise object, with initial promise state as "pending"
// when HTTP response is received, promise state is changed to "fulfilled", with response object as its value
// when no HTTP response is received, promise state is changed to "rejected", with error as its reason

// Challenge 24 & 25-----------------------------------------------------
// Given the url: https://jsonplaceholder.typicode.com/users/1
// Write getUser() using fetch, await and console.log
// Note that response received contains properties including statys, ok, body and url.
// Therefore, response is different than the response.body which contains the user details in this example
// json() is a method of response object, which parses the response body from json format to JavaScript value
// json() returns promise object, therefore await is needed
/* 
const getUser = async() => {
    const url = "https://jsonplaceholder.typicode.com/users/1";
    const response = await fetch(url);
    
    const user = await response.json();
    console.log(user);
};

getUser(); */

// Challenge 26------------------------------------------------------------
// Given the url: https://jsonplaceholder.typicode.com/users
// Write createUser to create a new customer
// Write newUser object containing name and email, send it as the request-body
// Use fetch(), make it a POST request, set appropriate content-type header and convert the response to json
// Print returned data at the console
/*
const createUser = async() => {
    const newUser = {
        name: "Hana",
        email: "hana@example.com"
    };

    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    });

    const data = await response.json();

    console.log(data);
}; 

createUser(); */

// Challenge 27----------------------------------------------------------------
// Handle HTTP error response from the server with try... catch block
// if response is not OK, throw an Error
/*
const getUser = async() => {
    try {
        const url = "https://jsonplaceholder.typicode.com/users/999";
        const response = await fetch(url);

        if(!response.ok){
            throw new Error(`Error code: ${response.status}. User not found.`);
        }

        const user = await response.json();
        console.log(user);
    } catch (error) {
        console.log(error);
    }
};

getUser();*/

// Challenge 28-----------------------------------------------------------------
// Create a function getUser() 
// with url: "https://jsonplaceholder.typicode.com/users/1"
// use try... catch
// if response.status === 404, throw "User not found"
// else, throw "Something went wrong"
// if successful, convert response to JSON and print the user

/*
const getUser = async () => {
    try {
        const url = "https://jsonplaceholder.typicode.com/users/1";
        const response = await fetch(url);
        
        if(!response.ok){
            const error = response.status === 404 ? "User not found" : "Something went wrong";
            throw new Error(error);
        }

        const user = await response.json();
        console.log(user);
    } catch (error) {
        console.log(error.message);
    }

};

getUser(); */

// Challenge 29------------------------------------------------------------------
// fetch a customer and display their information
// url: "https://jsonplaceholder.typicode.com/users/1"
// use try...catch, if response is not ok, throw an error containing status code
// convert response to json, extract customer's name, email and phone with object destructuring, print them
/*
const showCustomer = async() => {
    try {
        const url = "https://jsonplaceholder.typicode.com/users/1";
        const response = await fetch(url);

        if(!response.ok){
            throw new Error(`Error ${response.status}`);
        }

        const {name, email, phone} = await response.json();
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Phone: ${phone}`);
    } catch (error) {
        console.log(error.message);
    }
};

showCustomer(); */

// Challenge 30--------------------------------------------------------------------
// Convert JavaScript object to JSON string with JSON.stringify()
/*
const customer = {
    id: "CUS-101",
    name: "Mia",
    points: 850
};

const jsonCustomer = JSON.stringify(customer);
console.log(jsonCustomer, typeof jsonCustomer);*/


// Challenge 31--------------------------------------------------------------------
// Convert JSON to JavaScript object with JSON.parse()
/*
const jsonCustomer = `{
    "id": "CUS-101",
    "name": "Mia",
    "points": 850
}`;

const customer = JSON.parse(jsonCustomer);
console.log(customer, typeof customer, customer.name);*/

// Challenge 32--------------------------------------------------------------------
// Use JSON.stringify to convert javascript to json
// Use JSON.parse to convert json to javascript
// Use object destructuring to extract name and points
/*
const customer = {
    id: "CUS-202",
    name: "Alicia",
    points: 1200
};

const jsonCustomer = JSON.stringify(customer);
console.log(jsonCustomer, typeof jsonCustomer);

const {name, points} = JSON.parse(jsonCustomer);
console.log(name, points);
*/