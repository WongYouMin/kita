import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
function CustomerItem({customerId, customerName, username, weight, navigateToCustomerDetails, handleDeleteCustomer}) {
    return(
        <>
            <div className="customer-item">
                <p>#{customerId}</p>
                <p>{username}</p>
                <p>{customerName}</p>
                <p>{Math.floor(weight * 100)}</p>
                <div>
                    <button type='button' className='view-button' onClick={() => {navigateToCustomerDetails(customerId)}}>
                        <FontAwesomeIcon icon={faEye} />
                    </button>
                    <button type='button' className='delete-button' onClick={() => {handleDeleteCustomer(customerId)}}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
                
            </div>
        </>
    )
}

export default CustomerItem;