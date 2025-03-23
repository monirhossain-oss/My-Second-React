
import './App.css'
import Counter from './counter'
import Batsman from './runCounts'

function App() {
  function handleClick (){
    alert('Clicked')
  }
  const handleClick3 =()=>{
    alert('clicked 2')
  }


  return (
    <>
      <h1>React Core Concept</h1>   
      <Batsman></Batsman>
      <Counter></Counter>  
      <button className='btn' onClick={handleClick}>clicked</button>
      <button className='btn' onClick={handleClick3}>clicked</button>
      <button className='btn' onClick={()=>{
        alert('i am clicked')
      }}>clicked</button>
      
    </>
  )
}

export default App
