function RedeemRewardForm({customers, rewards, transaction, loadingTransaction, transactionFormError, handleRedeemRewardInputChange, handleCustomerChange, handleRedeemReward, discardTransactionForm}){
    return(
       <form className="transaction-form" onSubmit={handleRedeemReward}>
            <select name="customerId" value={transaction.customerId} disabled={loadingTransaction} onChange={handleCustomerChange}>
                <option value="">Select customer</option>
                {customers.map(({_id, name, points }) => {
                    return(
                        <option key={_id} value={_id}>
                            {name} [ {points} pts ]
                        </option>
                    )
                })}
            </select>
            <select name="rewardId" value={transaction.rewardId} disabled={loadingTransaction} onChange={handleRedeemRewardInputChange}>
                <option value="">Select reward</option>
                {rewards.map(({_id, name, points}) => {
                    return(
                        <option key={_id} value={_id}>
                            {name} [ {points} pts ]
                        </option>
                    )
                })}
            </select>
            <div className="transaction-form-actions">
                <button className="form-submit" disabled={loadingTransaction} type="submit">
                    {loadingTransaction ? 'Loading...' : 'Redeem'}
                </button>
                <button type="button" onClick={discardTransactionForm} disabled={loadingTransaction}>
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

export default RedeemRewardForm;