import { useState } from 'react'



function App() {

  return (
    <>
      <div className='TO-Do-container'>
        <div className='input-container'>
          <input type="text" />
          <button>Add</button>
        </div>
        <div className='list-container'>
          <ul className='Un-order'>
            <li>Book</li>
            <li>Glass</li>
            <li>Box</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
