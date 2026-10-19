import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom"; 
import CustomerForm from "../components/CustomerForm";

function CustomerNew() {
    // ==========================================
    // States
    // ==========================================
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    
    const [customer, setCustomer] = useState({
        id: null,
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        phone: "",
        birthDate: "",
    });

    const {customers, setCustomers} = useOutletContext();

    // ==========================================
    // Event Handler
    // ==========================================

    // Navigate back to customer list page
    const navigateBackToCustomers = () => {
        navigate('/customers');
    };


    // Handle input changes made to the customer form
    const handleCustomerInputChange = (event) => {
        setCustomer(previous => {
            return {
                ...previous,
                [event.target.name]: event.target.value
            };
        });
    };

    // Handle create customer form submission
    const handleAddCustomer = async(event) => {
        event.preventDefault();
        setError("");
        
        const validationError = validateCustomerForm();

        if(validationError.trim()){
            setError(validationError);
        } else {
            setLoading(true);
            try {
                await addCustomer();
                clearCustomerForm();
                navigateBackToCustomers();
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);  
            }
        }
    };

    // Discard customer form
    const discardCustomerForm = () => {
        clearCustomerForm();
        setError("");
        navigateBackToCustomers();
    };

    // ==========================================
    // API Functions
    // ==========================================

    // Create a new customer
    const addCustomer = async() => {
        const api = 'https://dummyjson.com/users/add';
        const response = await fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: customer.firstName,
                lastName: customer.lastName,
                username: customer.username,
                email: customer.email,
                phone: customer.phone,
                birthDate: customer.birthDate,
                // Use weight to simulate loyalty points (points = weight * 100)
                weight: 10
            })
        });
        if(!response.ok){
            throw new Error(`Failed to create customers with error code ${response.status}`);
        }
        const customerResponse = await response.json();
        setCustomers(previous => {
            return [
                customerResponse,
                ...previous
            ];
        });

    };

    // ==========================================
    // Helper Functions
    // ==========================================
    
    // Validate customer form input
    const validateCustomerForm = () => {
        let validationError = "";
        if(!customer.firstName.trim()){
            validationError += "First name is required. ";
        }
        if(!customer.lastName.trim()){
            validationError += "Last name is required. ";
        }
        if(!customer.username.trim()){
            validationError += "Username is required. ";
        }

        const emailPattern = /^[^@]+@[^@]+[.][^@]+$/;
        if(!customer.email.trim()){
            validationError += "Email is required. ";
        } else if(!emailPattern.test(customer.email.trim())){
            validationError += "Invalid email. ";
        }
       
        const pattern = /^[0-9]+$/;
        if(!customer.phone.trim()){
            validationError += "Phone number is required. ";
        } else if(!pattern.test(customer.phone.trim())){
            validationError += "Invalid phone nunber. ";
        }

       if(!customer.birthDate){
            validationError += "Birthdate is required. ";
       } else{
            const birthDate = new Date(customer.birthDate);
            const today = new Date();
            if(Number.isNaN(birthDate.getTime()) || birthDate > today){
                validationError += "Birthdate is invalid. ";
            }
       }
       
        return validationError;
    };

    // Clear customer form
    const clearCustomerForm = () => {
        setCustomer({
            id: null,
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            phone: "",
            birthDate: "",
        });
    };

    // ==========================================
    // Render
    // ==========================================

    return(
        <div>
            <CustomerForm
               editing={false}
               loading={loading}
               firstName={customer.firstName}
               lastName={customer.lastName}
               username={customer.username}
               email={customer.email}
               phone={customer.phone}
               birthDate={customer.birthDate}
               error={error}
               handleCustomerInputChange={handleCustomerInputChange}
               handleSubmit={handleAddCustomer}
               handleCancel={discardCustomerForm}
            />
        </div>
    )
}

export default CustomerNew;