# Learning Log

## Day 6 (19 Aug 2026)

### What I Learned

- Completed [Test 3](../../backend/exercise/).
- The function name should reflect what the function do, and what value the function would be returning.
    - `isRewardValid()` indicates boolean return value
    - `validateReward()` validates the reward, less likely to have boolean return value
- Strict equality operator `===` ensures matching value and data type, which is essential in validation.
        
- Completed [Exercise 6, 7 and 8, Test 3 and 4](../../backend/exercise/).
- Learned about callback functions. Callback function is a function that is passed as an argument of another function.
    - Callback function exists in both the form of arrow and normal function.
    - Example:
        ```
        const customers = ['Alice', 'Bob', 'Charlie'];

        // Normal Function
        function greet(name){
            console.log(`Hello ${name}`);
        }

        // Arrow Function
        const sayHi = (name) => {
            console.log(`Hi ${name}`);
        };
        
        // Notes
        // Each array item is passed as the function argument
        // Passing function as argument is different than function call

        // Function call: requires the parenthesis, which specifies immediate execution of the function
            // In this example, the forEach method is executed directly with the parenthesis
        // Passing function as argument: does not require the parenthesis, the function will be executed when needed
         // In this example, the greet and sayHi function will be executed when needed

        customers.forEach(greet);
        customers.forEach(sayHi);

        // Anonymous Function
        customers.forEach(name => {
            console.log(`Bye ${name}`);
        });
        ```
- Learned about built-in array methods.
    1. `forEach()`
        - return value: undefined
        - argument: callback function (return value: ignored)
        - purpose: perform certain actions for every item in array
        - example:
            ```
            const customers = ['Alice', 'Bob', 'Charlie'];
            customers.forEach(customer => {
                console.log(`${customer} is here.`);
            });

            // Expected Output: 
            // Alice is here.
            // Bob is here.
            // Charlie is here.
            ```
    2. `find()`
        - return value: single value
        - argument: callback function (return value: boolean)
        - purpose: find the first matched occurrence
        - example:
            ```
            const customers = [
                {name: 'Alice', age: 18},
                {name: 'Charlie', age: 23},
                {name: 'Bob', age: 25}
            ];

            const firstCustomerAbove21 = customers.find(customer => customer.age >= 21);
            console.log(firstCustomerAbove21);

            // Expected Output
            // {name: 'Charlie', age: 23},
            ``` 
    3. `filter()`
        - return value: array
        - argument: callback function (return value: boolean)
        - purpose: filter to get matched occurrences
        - example:
            ```
            const customers = [
                {name: 'Alice', age: 18},
                {name: 'Charlie', age: 23},
                {name: 'Bob', age: 25}
            ];
            
            const result = customers.filter(customer => customer.age >= 21);
            console.log(result);

            // Expected Output
            // [{name: 'Charlie', age: 23}, {name: 'Bob', age: 25}]
            ``` 
    4. `map()`
        - return value: array
        - argument: callback function (return value: transformed value of the array item)
        - purpose: transform current array to create a new array
        - example:
            ```
            const customers = [
                {name: 'Alice', age: 18},
                {name: 'Charlie', age: 23},
                {name: 'Bob', age: 25}
            ];

            const customersAge = customers.map(customer => customer.age);
            console.log(customersAge);

            // Expected Output
            // [18, 23, 25] 
            ``` 
    5. `reduce()`
        - return value: single value
        - argument: callback function(return value: updated accumulator value), initial accumulator value
        - purpose: process each item in array to form a final value
        - example:
            ```
            const transactions = [
                {customer: 'Alice', amount: 150},
                {customer: 'Bob', amount: 200},
                {customer: 'Charlie', amount: 100},
            ];

            const totalSales = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
            console.log(totalSales);

            // Expected Output
            // 450
            ``` 
- Learned about chaining of methods
    - Chaining is allowed if the returned value of a method is the required input value of the next method.
    - It reduces the need of declaring and assigning value during the process.
    - Example:
        ```
        const transactions = [
            {customer: 'Alice', amount: 150},
            {customer: 'Bob', amount: 200},
            {customer: 'Charlie', amount: 100},
        ];

        // Chaining of method is allowed
        // filter() is array method, can only be used with array
        // filter() produce array as output
        // map() is array method, can be only be used with array
        // map() gets produced array from filter() and create new array with only the eligible customer names

        const eligibleCustomers = transactions
            .filter(transaction => transaction.amount >= 150)
            .map(transaction => transaction.customer);
        
        console.log(eligibleCustomers);

        // Expected output
        // ['Alice', 'Bob']
        ```

- Learned about other built-in methods
    1. `toUpperCase()`
        - use with: string
        - return value: string in uppercase
        - argument: none
        - purpose: convert string to uppercase
    2. `Object.hasOwn()`
        - return value: boolean
        - argument: object, property
        - purpose: to determine if the object owns a property
    3. `indexOf()`
        - return value: number
        - argument: array item
        - purpose: to determine the array index of the array item

### Challenges
- There are many different ways to use reduce(), not limited to calculating the total amount spent. It is confusing to understand when and how to use reduce(). 
- The difference of filter() and map() can seem similar at first, making it challenging to identify which method is appropriate for a particular situation.

### Solutions
- Be patient and practice using reduce() in different scenarios.I may not always be able to find the solution on my own, and that is part of the learning process. After trying to solve a problem, I can seek help from online resources or AI assistance. After seeing a solution, I should focus on understanding why it works and then practice writing it on my own instead of simply copying it. 
- Practice coding different scenarios without being given a hint about which array method to use. With more practice, I can improve my ability to identify the appropriate method based on the problem and desired output.

### Key Takeaway
- The array methods can be distinguished by the intended actions with the data and its return value:
    - `forEach()`: perform an action on each array item without producing return value
    - `find()`: find the first array item that matches the specified condition and return that item
    - `filter()`: filter array items that matches the condition and return them as new array
    - `map()`: transform each array item and return them as new array
    - `reduce()`: process each array item to build a single final value

