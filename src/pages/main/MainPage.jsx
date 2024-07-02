import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Main from '../../components/main/Main'
import { tasksData } from '../../lib/Tasks'
import Header from '../../components/header/Header'
import { getAllTasks } from '../../API/tasks'

const MainPage = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [tasks, setTasks] = useState([])
  useEffect(() => {
  const user = JSON.parse(localStorage.getItem('user')) 
    getAllTasks({token:user.token}).then(
      (data)=> {
        setTasks(data.tasks)
      }
    ).finally(()=> {setLoading(false)})
    
  }, [])
  const addTasks = () => {
    const newTask =
    {
      id: tasks.length + 1,
      topic: "Web Design",
      status: "Без статуса",
      title: "сходить за водой",
      date: new Date().toDateString()
    }

    setTasks([...tasks, newTask])
  }
  
  return (
    <div>
      <Header addTasks={addTasks} />
        {
          loading ? <div style={{ textAlign: "center", paddingTop: "20px" }}>Данные загружаются</div> : <Main tasks={tasks} />
        }

      <Outlet/>
    </div>
  )
}

export default MainPage
