# Learning Log

## Day 8 (21 Aug 2026)

### What I Learned
- Learned about object destructuring. It is a convenient way to extract property value of an object.
    - The composition of object destructuring:
        ```
         const customer = {
            name: "Alice",
            age: 21,
            membership: "Gold",
            points: 1200
        };

        const {name, age, membership, points} = customer;

        // 1. Variable declaration with `let`, `const` or `var`
        //      this example: const is used

        // 2. Curly braces `{}` to extract property from an object

        // 3. Property to be extracted is placed in curly braces
        //      this example: name, age, membership and points will be extracted

        // 4. Assignment operator `=` to assign object for extraction

        // 5. Object to be extracted
        //      this example: customer

        ```
    - Example:
        ```
        const customer = {
            name: "Alice",
            age: 21,
            membership: "Gold",
            points: 1200
        };

        // Without destructuring, to obtain object property value
        const name = customer.name;
        const age = customer.age;
        console.log(name);
        console.log(age);

        // Expected output
        // Alice
        // 21

        // With destructuring
        // Destructuring declares membership and points as variables, then assign them the corresponding property values from customer.
        // Note that not all property of the object have to be extracted
        const {membership, points} = customer;
        console.log(membership);
        console.log(points);

        // Expected output
        // Gold
        // 1200

        // Object destructuring and Function
        // Object destructuring can takes place at function parameter
        // Parameter is local-scoped despite being destructured from object
        function displayCustomer({name, age}){
            console.log(name);
            console.log(age);
        }

        // Note that object must be sent as argument for object destructuring
        displayCustomer(customer);

        // Object destructuring can be used with arrow function
        const getCustomerPoints = ({points}) => points;
        console.log(getCustomerPoints(customer));

        // Object destructuring can be used with anonymous function 
        const rewards = [
            {name: "Milo", points: 200},
            {name: "100 Plus", points: 200},
            {name: "7 Up", points: 300}
        ];

        // map() array method iterate through the rewards array
        // each rewards array item is a reward object
        // the reward object is passed as argument in each callback
        // therefore, the name property can be extracted in the callback parameter
        // so only reward name will be returned for each array item

        const rewardNames = rewards.map(({name}) => name);

        // Renaming property in Object Destructuring
        // name and points are the property to be renamed
        // the `:` here means rename
        // the `:` here will assign value of name property to customerName
        // the `:` here will assign value of points property to customerPoints

        const { name: customerName, points : customerPoints } = customer;

        // Object Destructuring in Nested objects
        const reward = {
            name: "Milo Original Can",
            pointsRequired: 300,
            category: {
                type: "Beverage",
                active: true
            }
        };

        // type and active are the nested object property in category
        // the `:` is used to navigate into an object
        // the `:` here is used to navigate into the nested category object in reward object
        // note that the category property itself is not extracted, it is used for navigation only
        const {
            name: rewardName,
            category: {
                type: rewardType,
                active: rewardStatus
            }
        } = reward;

        console.log(rewardName);
        console.log(rewardType);
        console.log(rewardStatus);

        // Object Destructuring and Default Value
        // Default value is used when the value obtained from the property is undefined 
        // (not exists or explicitly assigned with `undefined` value).
        // Default value provides a fallback value during object destructuring.
        // Note that undefined, null and empty are different.

        // Setting default value for description property with `=`
        // Note that destructuring with a default value for non-existent property does not modify the object.
        // Therefore, the non-existent property in destructuring is not added as a new property to the object.
        // However, the non-existent property in destructuring is a valid variable.
        // In this example, description is a valid variable, but still not a property within the `reward` object.
        const {description = "A valid reward"} = reward;
        ```

### Challenges
- Object destructuring can be confusing due to the different uses of curly braces `{}`
- The colon `:` in object destructuring can also be confusing because it can be used for: 
    - Renaming property into a different variable name.
    - Navigate into a nested object for further destructuring.
- Using object destructuring without understanding these different usages can make the implementation process confusing.

### Solutions
- Learn the sub-concepts of object destructuring one by one instead of learning of them at once. 
- Practice coding exercises related to each sub-concept after learning it. 
- After understanding each sub-concept individually, combine them in exercises to understand how they work together.
- Focus on understanding what each part of the destructuring syntax is doing instead of memorizing the syntax.

### Key Takeaway
- Object destructuring makes extracting and processing data from objects more convenient by providing a concise way to access object property values.
- Destructuring does not modify the original object; it creates variables that contain the extracted values.

