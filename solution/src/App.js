import { useState } from "react"
import './App.css';

function Increment(props) {
  const handleClick = () => {
    props.onClickHandler(props.increment)
  }

  return <button className="increment" onClick={handleClick}>+{props.increment}</button>
}

function App() {
  const [count, setCount] = useState(0)

  function incrementCount(increment) {
    setCount(count + increment)
  }

  return (
    <div className="app">
      <div className="increment">
        <Increment increment={1} onClickHandler={incrementCount} />
        <Increment increment={2} onClickHandler={incrementCount} />
        <Increment increment={5} onClickHandler={incrementCount} />
      </div>
      <span className="count">{count}</span>
    </div>
  )
}

export default App;
