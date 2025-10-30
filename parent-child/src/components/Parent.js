import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
     const [msg , setMsg] = useState("This is Parent Component");

     const updateMessage = () => {
       setMsg("Updated by Child");
     };

  return (
    <div>
      <p>Parent Component</p>
      <p>Message: {msg}</p>
      <Child updateMessage={updateMessage}/>
    </div>

  )
}

export default Parent
