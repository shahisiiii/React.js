
import { useState } from 'react';
import Employee from './Employee';

function App() {
  const [count,setCount]=useState(0)
  const addCount=()=>{
    setCount(count+1)
    
  }
  let emp=[{name:'shahis',age:22,},
  {name:'rahul',age:25,},
  {name:'manoj',age:14,},
  {name:'sanoj',age:25,},
  {name:'ram',age:15,},
  {name:'dolu',age:28,},
  {name:'bolu',age:21,},
  {name:'shahul',age:22,},
  {name:'sam',age:19,},
  {name:'mikhil',age:24,},
  {name:'anu',age:22,},
  {name:'seetha',age:18,},
]
  return (
    <div className='App'>
      <button onClick={addCount}>Add</button>
        {
          emp.map((obj,index)=> (
              <Employee key={index} {...obj} />
            )
          )
        }
    
    </div>
  );
}

export default App;
