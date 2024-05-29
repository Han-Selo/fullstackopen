import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  if(value > 0){
    return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
    )
  }
  return(
    <tr><td>No data given</td></tr>
  )
}

const Button = ({setValue, value, text}) => {
  const handleClick = () =>{
    setValue(value + 1)
  }
  return(
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  return (
    <div>
      <h1>give feedback</h1>
      <Button setValue={setGood} value={good} text="good"></Button>
      <Button setValue={setNeutral} value={neutral} text="neutral"></Button>
      <Button setValue={setBad} value={bad} text="bad"></Button>

      <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="total" value={good+neutral+bad} />
            <StatisticLine text="average" value={(good+neutral+bad)/3} />
            <StatisticLine text="positive" value={(good/(neutral+bad))*100} />
          </tbody>
      </table>
    </div>
  )
}

export default App