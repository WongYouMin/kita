import { useState, useEffect } from "react";
import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import CustomerDetailsForm from "../components/CustomerDetailsForm";
function CustomerDetails() {
    // ==========================================
    // States
    // ==========================================
    const navigate = useNavigate();
    const {customerId} = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [validationError, setValidationError] = useState("");
    const [editing, setEditing] = useState(false);
    const {setCustomers} = useOutletContext();

    // Stores the current customer details
    const [customer, setCustomer] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        phone: "",
        birthDate: "",
        points: 0
    });

    // Stores the editable draft of the customer details
    const [editedCustomer, setEditedCustomer] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        phone: "",
        birthDate: "",
        points: 0
    });

    // ==========================================
    // Data Loader
    // ==========================================

    // Load customer data
    const loadCustomerData = async() => {
        setLoading(true);
        setError("");
        try {
            await getCustomer();
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    // ==========================================
    // Event Handler
    // ==========================================

    // Toggle editing mode
    const handleEdit = () => {
        if(!editing){
            setEditing(true);
        } else {
            resetEditedCustomerDetails();
            setValidationError("");
            setEditing(false);
        }
    };

    // Navigate to customers list page
    const navigateToCustomerList = () => {
        navigate('/customers')
    };

    // Handle input changes made to customer details form
    const handleCustomerDetailsInputChange = (event) => {
        setEditedCustomer(previous => {
            return {
                ...previous,
                [event.target.name] : event.target.value
            };
        });
    };

    // Handle update customer details form submission
    const handleUpdateCustomerDetails = async(event) => {
        event.preventDefault();
        setValidationError("");

        const isEqual = JSON.stringify(customer) === JSON.stringify(editedCustomer);
        if(isEqual){
            setEditing(false);
            return;
        }
        const validationError = validateCustomerDetailsForm();
        if(validationError.trim()){
            setValidationError(validationError);
            return;
        } else{
            setLoading(true);
            try {
                await updateCustomer();
                setEditing(false);
            } catch (error) {
                setValidationError(error.message);
            } finally {
                setLoading(false);
            }
        }
    };

    // ==========================================
    // API Functions
    // ==========================================

    // Fetch customer data
    const getCustomer = async() => {
        const api = `https://dummyjson.com/users/${customerId}`;
        const response = await fetch(api);
        if(!response.ok){
            throw new Error(`Failed to fetch customer details with error code ${response.status}`);
        }
        const customerResponse = await response.json();
        setEditedCustomer({
            firstName: customerResponse.firstName,
            lastName: customerResponse.lastName,
            username: customerResponse.username,
            email: customerResponse.email,
            phone: customerResponse.phone,
            birthDate: formatBirthDate(customerResponse.birthDate),
            points: Math.floor(customerResponse.weight * 100)
        });
        setCustomer({
            firstName: customerResponse.firstName,
            lastName: customerResponse.lastName,
            username: customerResponse.username,
            email: customerResponse.email,
            phone: customerResponse.phone,
            birthDate: formatBirthDate(customerResponse.birthDate),
            points: Math.floor(customerResponse.weight * 100)
        });
    };

    // Update customer data
    const updateCustomer = async() => {
        const api = `https://dummyjson.com/users/${customerId}`;
        const response = await fetch(api, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: Number(customerId),
                firstName: editedCustomer.firstName,
                lastName: editedCustomer.lastName,
                username: editedCustomer.username,
                email: editedCustomer.email,
                phone: editedCustomer.phone,
                birthDate: editedCustomer.birthDate,
                weight: Number(editedCustomer.points) / 100
            })
        });
        if(!response.ok){
            throw new Error(`Failed to update customer details with error code ${response.status}`);
        }
        const updatedCustomer = await response.json();
        setCustomers(previous => {
            return previous.map((customer) => {
                return customer.id === Number(customerId)
                    ? updatedCustomer
                    : customer;
            });
        });
        setCustomer({...editedCustomer});
    };

    // ==========================================
    // Helper Functions
    // ==========================================

    // Parse birth date to date input format
    const formatBirthDate = (birthDate) => {
        const parsedBirthDate = new Date(birthDate);

        return Number.isNaN(parsedBirthDate.getTime())
            ? ''
            : [
                parsedBirthDate.getFullYear(),
                String(parsedBirthDate.getMonth() + 1).padStart(2, "0"),
                String(parsedBirthDate.getDate()).padStart(2, "0")
            ].join("-")
    };
    
    // Validate customer details form input
    const validateCustomerDetailsForm = () => {
        let validationError = "";
        if(!editedCustomer.firstName.trim()){
            validationError += "First name is required. ";
        }
        if(!editedCustomer.lastName.trim()){
            validationError += "Last name is required. ";
        }
        if(!editedCustomer.username.trim()){
            validationError += "Username is required. ";
        }

        const emailPattern = /^[^@]+@[^@]+[.][^@]+$/;
        if(!editedCustomer.email.trim()){
            validationError += "Email is required. ";
        } else if(!emailPattern.test(editedCustomer.email.trim())){
            validationError += "Invalid email. ";
        }
       
        const pattern = /^[0-9+\-\s]+$/;
        if(!editedCustomer.phone.trim()){
            validationError += "Phone number is required. ";
        } else if(!pattern.test(editedCustomer.phone.trim())){
            validationError += "Invalid phone nunber. ";
        }

       if(!editedCustomer.birthDate){
            validationError += "Birthdate is required. ";
       } else{
            const birthDate = new Date(editedCustomer.birthDate);
            const today = new Date();
            if(Number.isNaN(birthDate.getTime()) || birthDate > today){
                validationError += "Birthdate is invalid. ";
            }
       }
       
        return validationError;
    };

    // Reset Edited Customer Details
    const resetEditedCustomerDetails = () => {
        setEditedCustomer({...customer});
    };

    // ==========================================
    // Effects
    // ==========================================
    
    // Load customer data when component mounts
    useEffect(() => {
        loadCustomerData();
    }, []);

    // ==========================================
    // Render
    // ==========================================

    return(
        <div className="customer-details">
            <button className="back-button" type="button" onClick={navigateToCustomerList}>
                ← Back to Customers
            </button>
            {
                loading
                    ? <p>Loading...</p>
                    : error.trim()
                        ? <p>Error: {error}</p>
                        : Object.entries(editedCustomer).length > 0
                            ? <CustomerDetailsForm
                                editedCustomer={editedCustomer}
                                editing={editing}
                                handleCustomerDetailsInputChange={handleCustomerDetailsInputChange}
                                handleEdit={handleEdit}
                                validationError={validationError}
                                handleUpdateCustomerDetails={handleUpdateCustomerDetails}
                              />
                            : <p>No customer found.</p>
            }
        </div>
    )
}

export default CustomerDetails;