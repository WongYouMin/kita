import { useState } from "react";
import "./App.css"

function App() {
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    membership: false
  });

  const [errors, setErrors] = useState({});

  const updateCustomer = (event) => {
    setCustomer((previousCustomer) => {
      return (
        {
          ...previousCustomer,
          [event.target.name] : event.target.name === "membership"
            ? event.target.checked
            : event.target.value
        }
      )
    })
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
        validationErrors.email = "Email must contain @.";
      }
      setErrors(validationErrors);
    } else {
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
        <label>Name </label>
        <input type="text" name="name" value={customer.name} onChange={updateCustomer} />
        <br />
        <label>Email </label>
        <input type="email" name="email" value={customer.email} onChange={updateCustomer} />
        <br />
        <label>Membership</label>
        <input type="checkbox" checked={customer.membership} name="membership" onChange={updateCustomer}/>
        <br />
        <button type="submit">Save Customer</button>
      </form>

      <ul>
        {Object.entries(errors).length > 0 
            ? Object.entries(errors).map(([props, message]) => {
              return <li key={props}>⚠️{message}</li>
            })
            : null
        }
      </ul>
    </>
  )
}

export default App