
import { Suspense } from 'react'
import './App.css'
import Counter from './counter'
import Batsman from './runCounts'
import Users from './users'
import Firends from './friends'
const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

const fetchFriends = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json();
}

function App() {
  const friendsPromised = fetchFriends();
  function handleClick() {
    alert('Clicked')
  }
  const handleClick3 = () => {
    alert('clicked 2')
  }


  return (
    <>
      <h1>React Core Concept</h1>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      <Suspense fallback={<h3>Friends are comming...</h3>}>
        <Firends friendsPromised={friendsPromised}></Firends>
      </Suspense>
      <Batsman></Batsman>
      <Counter></Counter>
      <button className='btn' onClick={handleClick}>clicked</button>
      <button className='btn' onClick={handleClick3}>clicked</button>
      <button className='btn' onClick={() => {
        alert('i am clicked')
      }}>clicked</button>

    </>
  )
}

export default App
