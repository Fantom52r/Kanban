import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PopExit from './components/popups/popExit/PopExit'
import PopNewCard from './components/popups/popNewCard/PopNewCard'
import PopBrowse from './components/popups/popBrowse/PopBrowse'
import Header from './components/header/Header'
import Main from './components/main/Main'
import { tasksData } from './lib/Tasks'
import { GlobalStyles } from './styles/global.styled'
import { Wrapper } from './styles/common.styled'


function App() {
  const [loading, setLoading] = useState(true)
  const [tasks, setTasks ] = useState(tasksData)
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setLoading(false)
    }, 1000);
    return () => {
      clearTimeout(timeOutId)
    }
  }, [])
  const addTasks = ()=> {
    const newTask = 
    {
      id: tasks.length + 1,
      topic: "Web Design",
      status: "Без статуса",
      title: "сходить за водой",
      date: new Date().toDateString()
  }

    setTasks([...tasks,newTask])

  }
  return (
    <>
    <GlobalStyles/>
      <Wrapper>
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header addTasks={addTasks}/>
        {
          loading ? <div style = {{textAlign:"center", paddingTop: "20px"}}>Данные загружаются</div> : <Main tasks={tasks} />
        }

      </Wrapper>
    </>
  )
}

export default App
