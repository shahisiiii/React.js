import './App.css'
import Header from './components/Header'
import { useState } from 'react';
function App() {
  const [count,setCount]=useState(0)
  const addCount=()=>{
    setCount(count+1)
    console.log(count);
  }
  return (
    <div className='App'>
      <button onClilck={addCount}>Add</button>
      <h1>Counter : {count}</h1>
    </div>
  );
}

export default App;
