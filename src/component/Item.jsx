/* eslint-disable react/prop-types */
const Item = ({ item, onDelete, onUpdate }) => {
    const handleItemPass = () => {
        onUpdate(item);
    }
    return (
        <tr key={item.itemId}>
            <td>{item.itemName}</td>
            <td>{item.itemPrice}</td>
            <td>{item.itemRating}</td>
            <td><button className="editBtn btn" onClick={handleItemPass}>Edit</button></td>
            <td><button className="deleteBtn btn" value={item.itemId} onClick={onDelete}>Delete</button></td>
        </tr>
    )
}

export default Item