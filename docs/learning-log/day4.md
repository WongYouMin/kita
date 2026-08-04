# Learning Log

## Day 4 (3 Aug 2026)

### What I learned

- Completed hands-on practice in [Exercise 3](../../backend/exercise).

- Learned JavaScript objects, which are useful to store a group of related values.
    - An object consists of properties and their values, which form key-value pairs.
    - All properties name are string. Quote is only needed when properties defined are not valid identifier. Properties names that are not valid identifiers need to be accessed using bracket notation.
    - An object can contain properties of various data types.
    - Example:
        - ```
            const book = {
                name: "Atomic Habit",
                author: "James Clear",
                pages: 320,
                language: "English"
            };
        ```
    - In the example, the book's properties are name, author, pages and language.
    - Properties act as the key to access its value.
    - Each property has its own value, which is assigned after the colon `:`.
    - To access the value of properties in JavaScript object:
        - use dot notation
            `console.log(book.language);`
        - use bracket notation (when properties are stored in variable)
            ```
                const key = "name";
                console.log(book[key]);

                // To update book's name
                book[key] = "Atomic Habits";
            ```
    - To add new properties to an object:
        - similar to process in accessing object properties
        - simply define properties directly and assign the values 
        ```
            // To add genre property to book
            book.genre = "Self-help";
        ```

- Learned JavaScript Arrays, which are useful to store a list of items.
    - Example
        - `const fruits = ["Apple", "Orange", "Banana"];`
        - In this example, `fruits` is an array with a list of strings. 
        - Arrays are also objects, but its elements are accessed using numeric indexes.
        - The index of array starts from 0, it increments by 1 for each new item added to the array.
        - In this example, 
            | list item | index |
            | --------- | ----- |
            | "Apple"   | 0     |
            | "Orange"  | 1     |
            | "Banana"  | 2     |
        - Array index is needed to access the array item.
        - To access the items in the array
            - use bracket notation
                ```
                    // Print the first item in array
                    console.log(fruits[0]);

                    // To update the items in the array
                    fruits[0] = "Cherry";
                ```
        - To add new items to the array, use push()
            ```
                // To add a new item to the array
                fruits.push("Durian");

                // The new item is added as the last item of the array
                // The new item "Durian" has index of 3
                console.log(fruits[3]);

                // To add more than one item the array
                fruits.push("Mango", "Grapes");

                // "Mango" has index of 4
                // "Grapes" has index of 5
            ```
        - To remove an item from the array, use pop()
            ```
                fruits.pop();
                // The last item of the array is removed
            ```

- Learned that JavaScript arrays can be nested in object; and Javascript object can also be nested in arrays.
    ```
        // Array in objects
        const sport = {
            name: "Badminton",
            equipments: ["Racket", "Shuttlecock", "Court shoes"],
        };

        // Objects in array
        const reward = [
            {
                name: "Americano",
                pointsRequired: 1000
            },
            {
                name: "Lemon Tea",
                pointsRequired: 800
            },
            {
                name: "French Fries",
                pointsRequired: 800
            }
        ];
    ```



### Challenges
- Was confused about when to used dot notation and bracket notation, especially when accessing nested object in arrays or nested array in objects.

### Solution
- Improved my understanding through repeated practice and by learning from my mistakes. This helped me quickly identify and fill gaps in my understanding.

### Key Takeaway
- JavaScript objects and arrays work together to organize and store data efficiently. Understanding how to access and manipulate nested objects and arrays is essential for working with real-world data structures.