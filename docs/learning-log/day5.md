# Learning Log

## Day 5 (12 Aug 2026)

### What I Learned
- Completed hands-on exercise in [Exercise 4](../../backend/exercise/).

- Learned about JavaScript function
    - IT is a reusable piece of code.
    - To define a JavaScript function:
        -
        ```
            function sayHello() {
                console.log(`Hello`);
            }
        ```
        - `function` is the reserved-keyword to define a function.
        - Define the function name after the `function` keyword.
        - `sayHello` is the function name in this example.
        - Parameters can be placed within the parenthesis`()`.
            - Parameters are variables that hold received value from function call.
        - Function call executes the function
            - `sayHello();` is a function call.
            - Function call consists of functionName and a pair of parenthesis.
            - Arguments can be placed within the parenthesis. They are value to send to the function.
            - Example of function with parameters;
                - 
                ```
                    // function name: greet
                    // parameter: name
                    function greet(name){
                        console.log(`Hi ${name}`);
                    }

                    // function call for greet
                    // argument: "Alice"
                    greet("Alice");
                ```
        - Differences of parameters and arguments
            1. Parameters are variables that hold received value when function is called. Parameters are not assigned with a value when they are initially defined, they only obtain a value when an argument is passed during the function call.
            2. Arguments are values that are passed to a function during a function call.
        - `return` statement in a function returns a value from the function.
            - `return` statement makes the returned value reusable by allowing the returned values to be assigned to variables.
            - The returned value is sent back to the function caller, and `return` statement ends the function execution.
            - Example
                ```
                    function greet(name){
                        if(!name){
                            return false;
                        } 
                        return `Hello ${name}`;
                    }
                    // function caller is greeting variable, returned value is stored in it
                    const greeting = greet("Alice");
                    if(greeting){
                        console.log(greeting);
                    }
                ```
            - A function can contain more than one `return` statement, but can only run one `return` statement at a time.
                - In this example, if the name is empty, the return value will be false. No greeting will be printed.
                - However, if the name is not empty, the return value will be greeting string. Greeting will be printed.

### Challenges
- Was confused of the differences between `parameters` and `arguments`. Initially thought they were just variables with different names because they appear in different places. However, the main difference is that `parameters` are variables defined in the function definition that do not receive an actual value until the function is called. The value is then received from the `arguments` passed during the function call. In contrast, the `arguments` are the actual values or expressions passed to the function when it is called.

### Solutions
- Repeatedly reviewed the concepts of parameters and arguments through examples and function calls until I understood that parameters receive values from arguments when the function is called.
- Practiced identifying which part of a function is the parameter and which part is the argument.

### Key Takeaway
- JavaScript functions are reusable blocks of code that can receive values through parameters and arguments, process those values, and return reusable results.
- Understanding the relationship between parameters, arguments, function calls and return values is important for using function effectively.