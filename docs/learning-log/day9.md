# Learning Log

## Day 9 (22 Aug 2026)

### What I Learned
- Completed [Exercise 11, Test 6 and Test 7](../../backend/exercise/).
- Learned about array destructuring which is used to extract array item based on its position.
    - The composition of array destructuring:
        ```
        const customer = ["Alice", 21, 1200];

        const [
            customerName,
            customerAge,
            customerPoints
        ] = customer;

        // 1. Variable declaration with `let`, `const` or `var`
        //      this example: const is used

        // 2. Square brackets `[]` to form array destructuring pattern

        // 3. Array items to be extracted is placed in square bracket
        //      this example: customerName, customerAge and customerPoints will be extracted
        //      Note that in array destructuring, array item is extracted based on the index
        //      Ensure the extracted item matches with the intended variable
        //      array item at index 0 -> customerName
        //      array item at index 1 -> customerAge
        //      array item at index 2 -> customerPoints

        // 4. Assignment operator `=` to assign array for extraction

        // 5. Array to be extracted
        //      this example: customer
        ```
    - Example:
        ```
        // =====================================================================================
        // Part 1: Introduction
        const customer = ["Alice", 21, 1200];

        // Without destructuring, to obtain array item
        const name = customer[0];
        const age = customer[1];
        const points = customer[2];

        // Expected output: "Alice", 21, 1200
        console.log(name, age, points);

        // With destructuring
        // Destructuring declares name, age and points as variables, then assign them with array item from customer array based on their position.
        // Note that not all array item have to be extracted
        // array index 0 -> name
        // array index 1 -> age
        // array index 2 -> points

        const [name, age, points] = customer;

        // Expected output: "Alice", 21, 1200
        console.log(name, age, points);

        // =====================================================================================
        // Part 2: Skipping Position
        // Skipping array item for destructuring by leaving empty spaces with `,`

        const reward = ["Coffee Voucher", "Food", 500, true];

        // Only extract rewardName and pointsRequired
        // array item at index 0 -> rewardName
        // array item at index 1 -> skipped with `,`
        // array item at index 2 -> pointsRequired
        // array item at index 3 -> no extraction needed as no more values to be destructured
        const [rewardName, , pointsRequired] = reward;
        console.log(rewardName, pointsRequired);

        // =====================================================================================
        // Part 3: Default Values
        // Provides fallback value for array destructuring using `=`
        // Default value is used when the extracted array item value is undefined
        // Note that undefined, empty and null are different

        // Extract name and role (default value: "intern")
        // Output: role contains "Developer", default value is only applied when the value is undefined
        const employee = ["Daniel", "Developer"];
        const [employeeName, role = "Intern"] = employee;
        console.log(employeeName, role);

        // =====================================================================================
        // Part 4: Rest `...` in Array Destructuring
        // Collect the remaining array items as an array
        // It can contain empty array if there is no remaining array items
        // Note that the `...` rest pattern must be the last element in array destructuring
        
        // Extract firstReward and remainingRewards but skip "T-shirt"
        const rewards = ["Coffee", "T-Shirt", "Voucher", "Backpack", "Notebook"];
        const [firstReward, , ...remainingRewards] = rewards;
        // array index 0 -> firstReward
        // array index 1 -> skipped with `,`
        // array index 2 and onwards -> remainingRewards
        console.log(firstReward, remainingRewards);

        const products = ["Laptop", "Mouse"];
        // firstProduct: "Laptop"
        // remainingProducts: ["Mouse"]

        // Note that rest pattern `...` always produce array
        // Even there is only one item remained, it still produce an array
        const [firstProduct, ...remainingProducts] = products;

        // =====================================================================================
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

        // =====================================================================================
        // Part 6: Destructuring Arrays of Data

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
        ```
