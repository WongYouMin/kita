
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
function RewardCard({id, title, description, price, images, handleDeleteReward, handleEditReward}) {
    return(
        <article className="reward-card">
            <div className='reward-actions'>
                <button className='delete-button' value={id} onClick={handleDeleteReward}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
                <button className='edit-button' value={id} onClick={handleEditReward}>
                    <FontAwesomeIcon icon={faPen} />
                </button>
            </div>
            <img src={images[0]} alt={title} height={100} />
            <br />
            <strong>{title}</strong>
            <p className="reward-description">{description}</p>
            <br />
            {/* Dummyjson doesnt contains points properties for products (rewards) */}
            <p><strong>{Math.floor(price * 100)}</strong> points</p>
        </article>
    )
}

export default RewardCard;