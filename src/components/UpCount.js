import React from 'react'
import useCounter, {ACTION_UP} from '../hooks/use-counter'

const UpCount = () => {
  const counter = useCounter(ACTION_UP)

  return (
    <div>
      <h1>This is UpCount Component</h1>
      <p style={{margine: "10px", border: "2px solid red", padding:"10px"}}>{counter}</p>
    </div>
  )
}

export default UpCount
