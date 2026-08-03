# Learning Log

## Day 3 (2 Aug 2026)

### What I learned

- learned the difference of variable and value
1. Variable
- Variable is the named container that stores actual data or reference point.
2. Value
- Value is the actual data that is stored in or referenced by variable.

- learned the data type values in JavaScript
There are two data type values:
1. Primitive data type
- Premitive values are immutable. Once the data is created, it cannot be changed.
- To update variable with premitive value, a new value is assigned to the variable, while old value remained unchanged.
- There are 7 premitive data types:
    1. string
    2. number
    3. bigInt
    4. boolean
    5. null
    6. undefined
    7. symbol
2. Reference data type
- Objects with reference values are mutable. The reference value allows the variable to access the object it refers to.
- Different reference object has different reference value.
- Changes to the reference object properties does not affect the reference value.
- The only reference data types:
    1. object

- learned that `typeof null` shows object because it is JavaScript historically bug. 

- learned the difference of null, empty and undefined
1. null
- Variable is assigned with value `null`, which indicates the intentional absence of a value
- Example:
    - `let book = null;`
2. empty
- Variable is assigned with valid value but contains empty data.
- Example:
    - Empty string `let string = "";`
    - Empty array `let books = [];`
    - Empty object `var user = {};`
3. undefined
- Variable has not been assigned with a value.
- Example:
    - `let food;`

- learned more details about symbol data type
    - Example:
        - `let courseCode = Symbol();`
    - The `Symbol()` function contains optional description as the function argument.
    - Different symbols can have the same description, but each symbol created is unique.

- Completed hands-on practice in [Exercise 1 and Exercise 2](../../backend/exercise).

### Challenges
- Understanding the mutability of JavaScript data value is confusing.

### Solution
- More attempts are made to understand the concept of data value mutability.
- Used blurting as an active recall technique to evaluate my understanding to new concept.

### Key Takeaway
- JavaScript variables can store either primitive values or reference values. Understanding data value mutability helps explain how JavaScript handles value assignment and object modification.