# Learning Log | Day 18 (19 October 2026)

## Kita MVP version 1: Customer Feature Building

### Using separate branch for different feature building 
1. Ensure you are in the branch you want to commit changes to

    `git branch`
2. If you wanted to create a new branch AND switch to the branch

    `git checkout -b <new branch name>`
3. Start adding unstaged changes

    `git add <file name>`
4. Commit changes with messages which saves to local repository

    `git commit <fileName> -m <messages in quotes>` 
5. Push commits to the remote repository 
    - for the first time to main branch: `git push origin main`
    - for the first time to non-main branch: `git push -u origin <branch name>`
    - after setting upstream: `git push`

#### Notes 
1. When pushing local branch to a remote repository for the first time, use `-u` to create an upstream tracking relationship. 
2. The upstream tracks the relationship between a local branch and its corresponding remote branch.
3. After setting the upstream, use `git push` to push subsequent commits to tracked remote branch.

Refer to [Git Cheat Sheet](https://git-scm.com/cheat-sheet) for Git commands.

### Standard conventional commits type
The table below shows standard conventional commits type.
| Commit Type | Description                                    | Example                                     |
| ----------- | ---------------------------------------------- | ------------------------------------------- |
| feat        | Add a feature                                  | `feat - add customers page `                |
| docs        | Add or update documentation                    | `docs - update README.md`                   |
| refactor    | Restructure code without changing its behavior | `refactor - reorganize customers page code` |
| fix         | Fix a bug                                      | `fix - correct customer form validation`    |
| build       | Add or update dependencies                     | `build - install react-router-dom`          |
| chores      | Maintenance to dependencies                    | `chores - update dependencies`              |
    

### Nested Route and useOutletContext
- During the customer feature implementation, nested routes are used to create new customer and view customer details. 
    - Both pages belongs to the Customers section and share customer state, but require different user interfaces.
- The MVP version 1 is uses api from DummyJSON for customer data. Since DummyJSON simulates CRUD operations without persisting the changes to its database, the customer state needs to be updated manually in the frontend to reflect changes.
- To share states with components rendered by the nested routes:
    1. `context`: Passes shared data as props in the `<Outlet />`
    2. `useOutletContext()`: A React hook that returns the context object passed
- Example: Passing customers data from `Customers` to components in nested routes
    ```
    // In Customers()
        import { Outlet } from "react-router-dom";
        <Outlet
            context={customers, setCustomers}
        />
    
    // In Components of Nested Routes
        import { useOutletContext } from "react-router-dom";
        // Object destructured the context object
        const {customers, setCustomers} = useOutletContext();
    ```

### Regex in Form Validation
- Regex stands for regular expression.
- It is a sequence of characters that defines a pattern used to validate a string.
- Regex can be used to find, match or replace characters within a string.
- In form validation, regex can help to check whether a string matches certain pattern.
- Example: 
    ```
    const validPhonePattern = /^[0-9]+$/;

    if(!validPhonePattern.test(customer.phone.trim())){
        validationError += "Invalid phone number";
    }
    ```
    - Note that a regular expression is not a string. It is a pattern object.
    - The forward slashes `(/)` marks the start and end of the regex literal.
    - The caret `(^)` matches the start of the string.
    - The dollar sign `($)` matches the end of the string.
    - The square brackets `[]` define character class (the acceptable characters).
    - The plus sign `(+)` means one or more occurrences of preceding pattern is allowed.


### Date in JavaScript
- Date is a built-in object in JavaScript used to represent date and time. 
- A Date object cannot be used directly as the HTML date input value, because it expects a string in "YYYY-MM-DD" format.
- To create a date object, use `new Date()`.
    1. Create current date time object with no argument. 
        - Example: `const now = new Date();`
    2. Create date time object with string argument
        - Example: `const birthDate = new Date("2026-10-10");`
- Creating a date object with empty string is invalid.
    - Example: `const birthDate = new Date("");`
    - The resulting object is still an object, so it is truthy although the object is invalid.
- To validate a date object, check whether the result of `.getTime()` is a nunber.
    - Example: 
        ```
        if (Number.isNan(birthDate.getTime())){
            validationError += "Birth date is required.";
        }
        ```
        1. valid: `.getTime()` returns number representing milliseconds since January 1, 1970(UTC).
        2. invalid: `.getTime()` does not return number.
    

