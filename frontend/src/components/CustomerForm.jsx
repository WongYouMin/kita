function CustomerForm({id, editing, loading, firstName, lastName, username, email, phone, birthDate, error, handleCustomerInputChange, handleSubmit, handleCancel}) {
    return(
        <form onSubmit={handleSubmit} className="customer-form">
            <h2>{editing ? (firstName + lastName) : 'Customer'}</h2>
            {editing
                ? <input type="number" name="id" value={id} disabled />
                : null
            }
            <input type="text" name="firstName" value={firstName} placeholder="First Name" onChange={handleCustomerInputChange} />
            <input type="text" name="lastName" value={lastName} placeholder="Last Name" onChange={handleCustomerInputChange} />
            <input type="text" name="username" value={username} placeholder="Username" onChange={handleCustomerInputChange} />
            <input type="email" name="email" value={email} placeholder="Email" onChange={handleCustomerInputChange} />
            <input type="text" name="phone" value={phone} placeholder="Phone" onChange={handleCustomerInputChange} />
            <input type="date" name="birthDate" value={birthDate} placeholder="BirthDate" onChange={handleCustomerInputChange} />
            <div className="customer-form-actions">
                <button type="submit" className="form-submit" disabled={loading}>{ editing ? 'Update': loading ? 'Loading...' : 'Create'}</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
            </div>
            {
                error.trim()
                    ? <p className="error">{error}</p>
                    : null
            }
        </form>
    )
}

export default CustomerForm;