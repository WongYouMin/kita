# Learning Log

## Day 10 (29 Aug 2026)

### What I Practiced
- Completed [Exercise 12](../../backend/exercise/exercise-12.js)
- Completed [Exercise 13](../../backend/exercise/exercise-13.js)
- Completed [Test 8](../../backend/exercise/test-8.js)
- Completed [Test 9](../../backend/exercise/test-9.js)
- Completed [Test 10](../../backend/exercise/test-10.js)

### Spread Syntax
- Learned about spread syntax which is used to spread iterables into individual items or spread an object's properties.
- Iterables include array and string.

### Part 1: Introduction
- Given the array below, copy and spread items of `fruits` to `copy` with `spread` syntax
    ```
    const fruits = ["Apple", "Banana", "Orange"];
    const copy = [...fruits];
    const newCopy = [fruits];

    // Expected Output: ["Apple", "Banana", "Orange"] [["Apple", "Banana", "Orange"]]
    console.log(copy, newCopy);
    ```
    - `copy` is an empty array.
    - The items of `fruits` array is spreaded and copied to `copy`.
    - Although both array have the same content, they do not reference the same object.
    - Only if `fruits` is assigned to `copy`, they reference the same object.
    - Note the difference of using and not using `spread` syntax.
    - `newCopy` which does not use `spread` syntax produces nested array instead.

### Part 2: Combining Arrays with Spread
- Given the arrays below, combine both arrays as `fullStackSkills` with spread syntax
- Add `JavaScript` to `fullStackSkills`
    ```
    const frontendSkills = ["HTML", "CSS"];
    const backendSkills = ["Node.js", "MongoDB"];
    const fullStackSkills = [...frontendSkills, ...backendSkills, 'JavaScript'];

    // Expected Output: ["HTML", "CSS", "Node.js", "MongoDB", 'JavaScript'];
    console.log(fullStackSkills);
    ```

### Part 3: Copying and Modifying Arrays
- Given the `ingredients` array below.
- Create a new array called `updatedIngredients` that contains everything from `ingredients` and `"Onion"`
    ```
    const ingredients = ["Rice", "Chicken", "Carrot"];
    const updatedIngredients = [...ingredients, "Onion"];

    // Expected Output: ["Rice", "Chicken", "Carrot", "Onion"]
    console.log(updatedIngredients);
    ```

### Part 4: Object Spread Syntax
- Given the `employee` object below, copy and spread properties of `employee` to `employeeCopy`
    ```
    const employee = {
        name: "Nora",
        role: "Developer",
        department: "Engineering"
        };

    const employeeCopy = { ...employee };

    // Expected Output: {name: "Nora", role: "Developer", department: "Engineering"}
    console.log(employeeCopy);
    ```
    - `employeeCopy` is a new object being created.
    - The properties of `employee` is spreaded and copied to `employeeCopy`.
    - Although `employeeCopy` and `employee` have the same properties and value, they do not reference the same object.
- Adding new properties or updating existing properties of a new object created with `spread` syntax
    ```
    const promotedEmployee = {
        ...employee,
        role: "Senior Developer",
        phone: "0123456789"
    };

    // Expected Output: {name: "Nora", role: "Senior Developer", department: "Engineering", phone: "0123456789"}
    console.log(promotedEmployee);
    ```
    - `promotedEmployee` is a new object being created.
    - The properties of `employee` is spreaded and copied to `promotedEmployee`.
    - The `role` properties of `promotedEmployee` is updated because when there is duplicated values for a property, the later value will replace the earlier value.
    - New property `phone` can be directly added.

### Part 5: Shallow Copy
- Given the `store` object below, copy and spread its properties to `storeCopy` object.
    ```
    const store = {
        name: "Tech Corner",
        location: {
            city: "Johor Bahru",
            country: "Malaysia"
        }
    };

    const storeCopy = {
        ...store
    };

    // Expected Output: false
    console.log(store === storeCopy);

    // Expected Output: true
    console.log(store.location === storeCopy.location);
    ```
    - `storeCopy` is a new object being created.
    - Properties and values from `store` is being spreaded and copied to `storeCopy`.
    - Therefore, although `store` and `storeCopy` have the same properties, they reference different object, they are **not equal**.
    - `location` is a property with a nested object as its value.
    - As the nested object is copied from `store` to `storeCopy`, both `store.location` and `storeCopy.location` reference the **same object**, which is known as **shallow copy**.

- Given the `customer` object below, spread and copied properties from `customer` to create `updatedCustomer` where `phone` → `"019-8888888"`, but customer.contact should not be modified.
    ```
    const customer = {
        name: "Hana",
        contact: {
            email: "hana@example.com",
            phone: "012-3456789"
        }
    };

    const updatedCustomer = {
        ...customer,
        contact: {
            ...customer.contact,
            phone: "019-8888888",
        },
    };

    // Expected Output: {email: "hana@example.com", phone: "012-3456789"} {email: "hana@example.com", phone: "019-8888888"}
    console.log(customer.contact, updatedCustomer.contact); 
    ```
    - `updatedCustomer` is a new object being created.
    - The `customer`'s properties are spreaded and copied to `updatedCustomer`.
    - Shallow copy occurs at nested object or array which is copied and spreaded by `spread` syntax. Only the top-level structure is copied, while the nested objects or arrays being referenced.
    - In this example, shallow copy occurs at `contact` property. Its value is a nested object. 
    - When the value is copied and assigned to `updatedCustomer`, both `customer.contact` and `updatedCustomer.contact` reference the same object.
    - To update `phone` of `updatedCustomer.contact` to `"019-8888888"` without modifying `customer.contact`, `spread` syntax is used to spread and copy properties of `customer.contact` to `updatedCustomer.contact`, replacing its earlier referenced object with a new object.
    - Noted that now `customer.contact` and `updatedCustomer.contact` do not reference the same object.
    - The value of `phone` property is updated to `"019-8888888"`.

### Part 6: Spread Syntax with Function Arguments
- Given the array `prices` below, use `spread` syntax in function arguments instead of passing array values individually.
    ```
    const prices = [120, 80, 150];

    function calculateTotal(price1, price2, price3){
        return price1 + price2 + price3;
    }

    // Expected Output: 350
    console.log(calculateTotal(...prices));
    ```
    - At function call of `calculateTotal`, `prices` array is spreaded and passed as individual arguments to function parameters.
    - In this example, `prices.length` is 3, so 3 array items is sent as arguments to function parameter as `price1`, `price2` and `price3`

### Rest Parameter
- Given the situation when the number of arguments is unknown, rest parameter can be used to collect received arguments as an array.
        ```
        function calculateTotal(...prices){
            return prices.reduce((sum, price) => sum + price, 0);
        }

        // Expected Output: 70
        console.log(calculateTotal(20, 50));

        // Expected Output: 60
        console.log(calculateTotal(20, 30, 10));
        ```
    - Received arguments which are 20 and 50 is collected as items in `prices` array
    - The total of items in `prices` array is returned