import React from 'react'

const Child = ({ updateMessage }) => {
  return (
    <div>
      <p>Child Component</p>
      <button onClick={updateMessage}>Update Parent Message</button>
    </div>
  )
}

export default Child
