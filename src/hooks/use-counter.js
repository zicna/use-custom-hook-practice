import {useState, useEffect} from 'react'

export const ACTION_UP = "up"
export const ACTION_DOWN = "down"

const useCounter = (action) => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
        if(action === "up"){
      setCounter((prevCounter) => prevCounter + 1)
        }
        if(action === "down"){
            setCounter(prevCounter => prevCounter - 1)
        }
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return counter
}

export default useCounter
