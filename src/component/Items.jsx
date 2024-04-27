/* eslint-disable react/prop-types */
import Item from './Item'

const Items = ({ items, onDelete, onUpdate }) => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody >

                    {
                        items.map((item) => <Item key={item.itemId} item={item} onDelete={onDelete} onUpdate={onUpdate} />)
                    }

                </tbody>
            </table>
        </>
    )
}

export default Items
