import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Main from '../../components/main/Main'
import { tasksData } from '../../lib/Tasks'
import Header from '../../components/header/Header'

const MainPage = () => {
  const [loading, setLoading] = useState(true)
  const [tasks, setTasks] = useState(tasksData)
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setLoading(false)
    }, 1000);
    return () => {
      clearTimeout(timeOutId)
    }
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
