import { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

function App() {
  const [items, setItems] = useState([]);
  const addItem = (itemName) => {
    setItems([...items, { id: Date.now(), name: itemName }])
  }
  return (
    <>
      <div className='TO-Do-container'>
        <h1>To-Do-List</h1>
        <div className='input-container'>
          <input className='input' type="text" />
          <button className='add' onClick={() => addItem(prompt("type here"))}><b>ADD</b></button>
        </div>
        <div className='list-container' >
          <ul className='Un-order'>
            <div className='list'>
              {items.map((item => (
                <div className=''>
                  <li key={item.id}>{item.name}</li>
                  <button className='Edit'><FaEdit />
                  </button>
                  <button className='Delete'>
                  <FaDeleteLeft />
                  </button>
                </div>
              )))}
            </div>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
