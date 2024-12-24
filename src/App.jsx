import React from 'react'
import AddQuotes from './components/AddQuotes'
import SingleQuotes from './components/SingleQuotes'

function App() {
  return (
    <div className="max-w-96 mx-auto p-2 ">
      <h1 className="text-3xl text-center font-bold my-5 ">Quotes</h1>
      <AddQuotes />
      <SingleQuotes />
    </div>
  );
}

export default App;