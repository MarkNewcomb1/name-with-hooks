import React, { useState } from 'react';

function App() {
  const [name, processName] = useState('')

  const processForm = e => {
    e.preventDefault() 
    name.toLowerCase() === 'bob'
      ? processName('Go away, Bob.')
      : processName(`Hello, ${name}`)
  }

  const updateField = e => {
    processName(e.target.value)
  }
  return (
    <div className="App">
    <p>Name: {name}</p>
      <form onSubmit={processForm}>
      <label>Username:</label>
      <input 
        value={name}
        name='name'
        onChange={updateField}
      />
      <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
