function CustomerDetailsForm({editedCustomer, editing, handleCustomerDetailsInputChange, handleEdit, validationError, handleUpdateCustomerDetails}){
    return(
        <form onSubmit={handleUpdateCustomerDetails}>
            <div className="customer-details-field">
                <p>First Name</p>
                <input type="text" name="firstName" value={editedCustomer.firstName} onChange={handleCustomerDetailsInputChange} disabled={!editing}/>

                <p>Last Name</p>
                <input type="text" name="lastName" value={editedCustomer.lastName} onChange={handleCustomerDetailsInputChange} disabled={!editing}/>
                
                <p>Username</p>
                <input type="text" name="username" value={editedCustomer.username} onChange={handleCustomerDetailsInputChange} disabled={!editing}/>

                <p>Email</p>
                <input type="email" name="email" value={editedCustomer.email} onChange={handleCustomerDetailsInputChange} disabled={!editing}/>

                <p>Phone</p>
                <input type="text" name="phone" value={editedCustomer.phone} onChange={handleCustomerDetailsInputChange} disabled={!editing}/>

                <p>Birth Date</p>
                <input type="date" name="birthDate" value={editedCustomer.birthDate} onChange={handleCustomerDetailsInputChange} disabled={!editing}/>
                
                <p>Points</p>
                <input type="text" name="points" value={editedCustomer.points} disabled/>
            </div>
            { validationError.trim() ? <p className="error">{validationError}</p> : null}
            { editing ? <button type="submit" className="form-submit">Update</button> : null}
            <button type="button" className="form-actions" onClick={handleEdit}>{!editing ? 'Edit': 'Cancel'}</button>
        </form>
    )
}

export default CustomerDetailsForm;