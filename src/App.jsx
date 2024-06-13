import { useState } from 'react'


function App() {
  const [items, setItems] = useState([{ id: Date.now(), name: "Books" }]);
  const [inputSearch,setInputSearch] = useState("")

const searchInput=(e)=>{
  setInputSearch(e.target.value)
}

  const addItem = (itemName) => {
    setItems([...items, { id: Date.now(), name: itemName }])
  }
  const deleteItem=(id)=>{
    setItems(items.filter((item)=> item.id !==id))
  }

  return (
    <>
      <div className='TO-Do-container'>
        <h1>To-Do-List</h1>
        <div className='input-container'>
          <input className='input' type="text" value={inputSearch} onChange={searchInput} />
          <button className='btn-add' onClick={() => addItem(prompt("type here"))}><b>ADD</b></button>
        </div>
        <div className='list-container' >
          <div className='Un-order'>
            <div className='list'>
              {items.map((item => (
                <div className='list-items'  key={item.id}>{item.name}
                  <button className='btn-Edit'> <b>Edit</b>
                  </button>
                  <button className='btn-Delete' onClick={()=>deleteItem(item.id)}>
                <b>Delete</b>
                  </button>
                </div>
              )))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
