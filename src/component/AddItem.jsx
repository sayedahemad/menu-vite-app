/* eslint-disable react/prop-types */
import './style/style.css'

const AddItem = ({ onNewItem, onNewItemName, onNewItemPrice, onNewItemRating, itemName, itemPrice, itemRating }) => {
    return (
        <>
            <p>Add item:</p>
            <form onSubmit={onNewItem}>
                <div className="title">Item Name :
                    <input type="text" value={itemName} onChange={onNewItemName} />
                </div>
                <div className="title">Item Price :
                    <input type="text" value={itemPrice} onChange={onNewItemPrice} />
                </div>
                <div className="title">Item Rating :
                    <input type="text" value={itemRating} onChange={onNewItemRating} />
                </div>
                <button className='btn add' type="submit">Add</button>
            </form>
        </>
    )
}

export default AddItem