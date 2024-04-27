import { useEffect } from "react"
import { useState } from "react"
import fetchData from './services/items.js'
import AddItem from "./component/AddItem.jsx"
import Items from "./component/Items.jsx"
import UpdateItem from "./component/UpdateItem.jsx"

function App() {
  const [items, setItems] = useState([])
  const [item, setItem] = useState([])
  const [itemName, setItemName] = useState('')
  const [itemPrice, setItemPrice] = useState(0.0)
  const [itemRating, setItemRating] = useState(0.0)

  useEffect(() => {
    fetchData.getAll().then(data => {
      console.log(data)
      setItems(data)
    })
  }, [])

  const handleNewName = (event) => {
    const name = event.target.value;
    setItemName(name)
  }

  const handleNewPrice = (event) => {
    const price = event.target.value;
    setItemPrice(price)
  }

  const handleNewRating = (event) => {
    const rating = event.target.value;
    setItemRating(rating)
  }

  const handleNewItem = (event) => {
    event.preventDefault()
    const item = {
      "itemName": itemName,
      "itemPrice": itemPrice,
      "itemRating": itemRating
    }
    fetchData.createItem(item).then(data => {
      setItems([...items, data])
    })
    setItemName('');
    setItemPrice(0);
    setItemRating(0);
  }

  const handleDelete = (event) => {
    const itemId = event.target.value
    fetchData
      .deleteItem(itemId)
      .then(data => {
        window.alert(data);
        const item = items.filter(item => item.itemId !== Number(itemId))
        setItems(item)
      })
  }

  const handleUpdate = (item) => {
    setItem(item);
  }

  const handleUpdateItem = (event) => {
    event.preventDefault()
    console.log(item.itemId)
    const updatedItem = {
      "itemName": itemName,
      "itemPrice": itemPrice,
      "itemRating": itemRating
    }
    fetchData.updateItem(updatedItem, item.itemId).then(data => {
      const itemArr = items.filter(itemVal => itemVal.itemId !== Number(item.itemId))
      setItems([...itemArr, data])
      setItem([])
    })
    setItemName('');
    setItemPrice(0);
    setItemRating(0);

  }
  return (
    <>
      <p>Menu List</p>
      <p>Items Available:</p>
      {items.length > 0 ?
        < Items items={items} onDelete={handleDelete} onUpdate={handleUpdate} /> : <p>No item in the list</p>
      }
      {
        item.length == 0 ?
          <AddItem itemName={itemName} itemPrice={itemPrice} itemRating={itemRating} onNewItemName={handleNewName} onNewItemPrice={handleNewPrice} onNewItemRating={handleNewRating} onNewItem={handleNewItem} /> :
          <UpdateItem item={item} onUpdateItem={handleUpdateItem} onNewItemName={handleNewName} onNewItemPrice={handleNewPrice} onNewItemRating={handleNewRating} />
      }
    </>
  )
}

export default App
