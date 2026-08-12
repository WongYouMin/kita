# Learning Log

## Day 6 (13 Aug 2026)

### What I Learned

- Completed hands-on exercise in [Exercise 5, Test 1 and Test 2](../../backend/exercise/).

- The difference of expression and statement:
    1. expression
        - anything that can be evaluated to produce a value
        - expression can be used together with statement
        - Example:
            ```
                x = 5;
                name = "Ali";
                10 + 6
            ```
    2. statement
        - instruction to perform an action
        - Example:
            ```
                // statement: let x = 5, expression: x, 5
                let x = 5;
                
                // statement: if statement, expression: x > 5
                if(x > 5)

                // statement: return 16, expression: 16
                return 16;
            ```

- Arrow function is another syntax for creating function
- The composition of arrow function:
    - example
        ```
            // 1. function declaration: const greet = ;
            //      similar to declare a variable
            //      functions are values that can be passed in JavaScript

            // 2. parameters: ()
            //      the parameters can be placed within the parenthesis
            //      in this example, there is no parameters
            //      if only have one parameter, the parenthesis can be omitted
            //      if have no parameter or more than one parameter, the parenthesis is needed

            // 3. Arrow: => 
            //      the arrow is used to separate the parameters and function body

            // 4. Function body / Expression body (please read about function bodies)
            
            // 5. Semi-colon
            //      semi-colon is needed in arrow function, because it ends the assignment statement
            //      in this example, the function body is assigned to greet variable

            const greet = () => {
                console.log(`Hello`);
            };

            // the function call of arrow function is the same as normal function
            greet();

        ```
    - there are two types of function bodies:
        1. expression body
            - contains one expression only as the function body
            - returns the expression implicitly
            - example:
                ``` 
                // function name: add
                // parameters: a, b
                // return value: result of a + b
                const add = (a, b) => a + b;
                ```
        2. block body
            - contains both expression and statement as the function body
            - does not return a value unless `return` statement is explicitly used
            - example:
                ```
                const greet = () => {
                    // return value: none (no return statement used)
                    console.log('Hello there!');
                };

                const isGoldMembership = (membership) => {
                // return value: 100 if membership is gold
                    if(membership === "Gold"){
                        return 100;
                    }
                // default: return value of 0
                    return 0;
                };
                ```

        

### Challenges
- Was not noticed of the differences of needing semi-colon when writing the arrow functions.
- Was unclear of the difference between expression and statement. The understanding leads to the understanding of usage for expression and block body in functions.
- Arrow function syntax seems confusing at first.

### Solutions
- Repeated practice and debug makes me remember the difference of semi-colons.
- Understanding arrow function as value that is assignable to variable is really helpful.
- Understanding different parts of arrow function makes arrow function easy to use.

### Key Takeaway
- Arrow function is an alternative, shorter syntax to create function. Understanding the difference of statement and expression, makes usage of arrow function easier to understand. 