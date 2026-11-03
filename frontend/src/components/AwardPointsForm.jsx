function AwardPointsForm({handleAwardPoints, transaction, handleTransactionInputChange, loadingTransaction, discardTransactionForm, transactionFormError, customers}){
    return(
        <form className="transaction-form" onSubmit={handleAwardPoints}>
            <select name="customerId" value={transaction.customerId} onChange={handleTransactionInputChange}>
                <option value="">Select Customer</option>
                {   
                    customers.map(({_id, name}) => {
                        return(
                            <option key={_id} value={_id}>{name}</option>
                        )
                    })
                }
            </select>
            <input type="number" name="points" value={transaction.points} onChange={handleTransactionInputChange} placeholder="Loyalty Points"/>
            <div className="transaction-form-actions">
                <button className="form-submit" disabled={loadingTransaction} type="submit">{loadingTransaction ? 'Loading...' : 'Award'}</button>
                <button onClick={discardTransactionForm} disabled={loadingTransaction} type="button">
                    Cancel
                </button>
            </div>
            {
                transactionFormError.trim()
                    ? <div className="error">
                        <p>{transactionFormError}</p>
                        </div>
                    : null
            }
            
        </form>
    )
}

export default AwardPointsForm;