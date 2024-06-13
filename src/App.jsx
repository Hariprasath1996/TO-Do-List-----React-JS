import { useState } from 'react'


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
          <button className='btn-add' onClick={() => addItem(prompt("type here"))}><b>ADD</b></button>
        </div>
        <div className='list-container' >
          <ul className='Un-order'>
            <div className='list'>
              {items.map((item => (
                <div className='list-items' key={item.id}>{item.name}
                  <button className='btn-Edit'>Edit
                  </button>
                  <button className='btn-Delete'>
                Delete
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
