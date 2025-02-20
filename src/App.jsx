import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideNav from './components/SideNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex'>
        <SideNav />
        <main className='flex-1'>

        </main>
      </div>
    </>
  )
}

export default App
