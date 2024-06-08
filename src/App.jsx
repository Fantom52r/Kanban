import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PopExit from './components/popups/popExit/PopExit'
import PopNewCard from './components/popups/popNewCard/PopNewCard'
import PopBrowse from './components/popups/popBrowse/PopBrowse'
import Header from './components/header/Header'
import Main from './components/main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="wrapper">
    <PopExit/>
    <PopNewCard/>
    <PopBrowse/>
    <Header/>
    <Main/>
      </div>
    </>
  )
}

export default App
