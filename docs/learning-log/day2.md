# Learning Log

## Day 2 (1 Aug 2026)

### What I learned

- learned the anchor element `<a>` has target attribute with four values:
1. `_self` (default)
- open target at current tab or window

2. `_blank`
- open target at new tab or window

3. `_parent`
- open target at parent frame

4. `_top`
- open target at top-level window


- learned the difference of `let`, `const` and `var`
    1. `let`
    - variable is block-scoped
    - it is usable within the block where it is declared
    - becomes global variable if declared outside of function
    - allow reassignment of value
    - has Temporal Dead Zone (TDZ) when it is hoisted, it is not initialized with any value

    2. `const`
    - variable is block-scoped
    - it is usable within the block where it is declared
    - does not allow reassignment of value
    - has Temporal Dead Zone (TDZ) when it is hoisted, it is not initialized with any value

    3. `var`
    - variable is function-scoped
    - it is usable within the function where it is declared, while ignoring all the blocks within the same function
    - becomes global variable if declared outside of function
    - allow reassignment of value
    - no Temporal Dead Zone (TDZ) when it is hoisted, it is initialized with undefined


- learned about paths. Paths specifies the location to a resource. It allows the connection to resources such as images, scripts and stylesheets. There are two types of paths:
1. Absolute paths
- contains the complete location to a resource from the root directory
- used for:
    1. resource location starts from fixed starting point
    2. external resource

2. Relative paths
- contains the location to a resource relative to current file
- used for:
    1. referring resource relative to current file location
    2. making the resource portable and more maintainable


### Challenge
- Understanding the differences of var and let is slightly confusing.

### Solution
- By repeatedly asking questions and testing my understanding for let, var and const, their differences are well understood.

### Key Takeaway
- Understanding the differences of variable scope (`let`, `var`, `const`) and file paths are important because they impact the behavior of JavaScript code and how resources are linked.