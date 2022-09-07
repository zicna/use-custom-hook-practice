import useCounter, {ACTION_DOWN} from "../hooks/use-counter"

const DownCount = () => {
  const counter = useCounter(ACTION_DOWN)

    return(
        <div>
            <h1>This is DownCount Component</h1>
            <p style={{margine: "10px", border: "2px solid red", padding:"10px"}}>{counter}</p>

        </div>
    )
}

export default DownCount