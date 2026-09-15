# Learning Log

## Day 14 (16 Sept 2026)

### Event and Forms
- Forms are very common user interfaces for user to enter details to a system.
- By default, submitting a form causes the browser to refresh the web page due its default form submission behavior. However, frequently refreshing a page may lose every state on a page, which might be unintentional for the users.
- `event.preventDefault()` prevents the default refresh of page when submitting a form.
- It is important to validate the user inputs such as invalid format or empty inputs. React conditional rendering and `useState()` can be used to display error messages to user when error occurs.
- `Object.entries()` returns an array containing the key-value pairs of an object. Each key-value pair is represented as an array. For example:
    ```
    const errors = {
        name: "Name is required.",
        email: "Email is required."
    };

    console.log(Object.entries(errors));
    ```
    - Expected Output: [["name", "Name is required."],["email", "Email is required."]]
    - In the example below, as each item is an array, array destructuring is used to obtain the `props` and error `message` in the array. `props` is used as the key of the list, `message` is displayed as the list content.

### Example
```
// App.jsx
import {useState} from "react"

function App() {
    const [customer, setCustomer] = useState({
        name: "",
        email: "",
        membership: false
    });

    const [errors, setErrors] = useState({});

    const updateCustomer = (event) => {
        setCustomer((previousCustomer) => {
            return {
                ...previousCustomer,
                [event.target.name]: event.target.name === "membership"
                    ? !previousCustomer.membership
                    : event.target.value
            };
        });
    };

    const saveCustomer = (event) => {
        event.preventDefault();
        if(!customer.name.trim() || !customer.email.trim() || !customer.email.includes('@')){
            const validationErrors = {};
            if(!customer.name.trim()){
                validationErrors.name = "Name is required.";
            }

            if(!customer.email.trim()){
                validationErrors.email = "Email is required.";
            } else if(!customer.email.includes('@')){
                validationErrors.email = "`@` is required in email.";
            }
            setErrors(validationErrors);
        } else{
            console.log(customer);
            clearForm();
        }
    };

    const clearForm = () => {
        setCustomer({
            name: "",
            email: "",
            membership: false
        });

        setErrors({});
    };


    return(
        <>
            <form onSubmit={saveCustomer}>
                <label>Name</label>
                <input type="text" name="name" value={customer.name} onChange={updateCustomer}/>
                <label>Email</label>
                <input type="email" name="email" value={customer.email} onChange={updateCustomer}/>
                <label>Membership</label>
                <input type="checkbox" name="membership" checked={customer.membership} onChange={updateCustomer}/>
                <button type="submit">Save Customer</button>
            </form>
            {Object.entries(errors).length > 0 
                ? Object.entries(errors).map(([props, message]) => {
                    return (
                        <li key={props}>⚠️{message}</li>
                    )
                })
                : null
            }
        </>
    )
}

export default App
```
1. The `customer` state is initialized with properties `name`, `email` and `membership`.
2. The `errors` state is initialized with an empty object.
3. A `form` element containing `input` elements and submit `button` is created.
4. Whenever the value of `customer` `input` field is changed, `updateCustomer()` is triggered.
5. Whenever form is submitted, `saveCustomer()` is triggered.
6. `event.preventDefault()` prevents the default browser action that refresh the page.
7. It validates the user inputs with `trim()` to ensure the `customer.name` and `customer.email` is not empty or white spaces.
8. A temporary object, `validationErrors` is created to store the errors before calling the `setErrors()` at the end of error validation.
9. If no error occurs, the `customer` object will be displayed at the console.
10. `clearForm()` will be triggered to clear the input fields and errors.
11. If error occurs, it will be displayed below the form.
