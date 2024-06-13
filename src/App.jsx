import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const [itemToEdit, setItemToEdit] = useState({})
// create add component
  const addItem = () => {
    if (title) {
      if (isEditing) {
        const upDatedItems = items.map((item) => {
          if (item.id === itemToEdit.id) {
            const updatedItem = { ...items, title }
            return updatedItem;
          } else {
            return item;
          }
        });
        setItems(upDatedItems)
        setTitle("")
        setIsEditing(false)
        setItemToEdit({})
        toast.success('Item Updated Successfully...');
      }
      else {
        const newItem = {
          id: uuidv4(),
          title: title
        }
        setItems([...items, newItem])
        setTitle("")
        toast.success('Item added Successfully...');
      }
    }
    else {
      toast.error('Title is required...');
    }
  }
// CREATE DELETE COMPONENT
  const deleteItem = (id) => {
    const remainingItems = items.filter((item) => item.id !== id)
    setItems(remainingItems);
    toast.error('Items Deleted...');
  }
  // create edit component
  const editItem = (id) => {
    setIsEditing(true)
    setItemToEdit(items.find((item) => item.id === id))
    setTitle(itemToEdit.title)
  }
  return (
    <>
      <Toaster />
      <div className='TO-Do-container'>
        <h1>To-Do-List</h1>
        <div className='input-container'>
          <label htmlFor="input" >Title :</label>
          <input className='input' id='input' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <button className='btn-add' onClick={addItem}><b>{isEditing ? "Edit" : "Submit"}</b></button>
        </div>
        <div className='list-container' >
          <div className='Un-order'>
            <div className='list'>
              {items.length ? (items.map((item => (
                <div className='list-items' key={item.id}>{item.title}
                  <button className='btn-Edit' onClick={() => editItem(item.id)}> <b>Edit</b>
                  </button>
                  <button className='btn-Delete' onClick={() => deleteItem(item.id)}>
                    <b>Delete</b>
                  </button>
                </div>
              )))) : <h1>No Items Exist</h1>}

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
