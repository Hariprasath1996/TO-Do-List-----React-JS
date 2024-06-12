import { useState } from 'react'



function App() {

  return (
    <>
      <div className='TO-Do-container'>
        <h1>To-Do-List</h1>
        <div className='input-container'>
          <input className='input' type="text" />
          <button className='add'><b>ADD</b></button>
        </div>
        <div className='list-container'>
          <ul className='Un-order'>
            <li>Book</li>
            <button className='edit'><b>Edit</b></button>
            <button className='delete'><b>Delete</b></button>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
