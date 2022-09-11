import { useState } from "react"
import './App.css';

function Increment(props) {
  const handleClick = () => {
    props.onClickHandler()
  }

  return <button className="increment" onClick={handleClick}>+1</button>
}

function App() {
  const [count, setCount] = useState(0)

  function incrementCount() {
    setCount(count + 1)
  }

  return (
    <div className="app">
      <Increment onClickHandler={incrementCount} />
      <span className="count">{count}</span>
    </div>
  )
}

export default App;
