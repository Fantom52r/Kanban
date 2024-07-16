import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Main from '../../components/main/Main'
import { tasksData } from '../../lib/Tasks'
import Header from '../../components/header/Header'
import { getAllTasks } from '../../API/tasks'
import { useUser } from '../../context/UseUser'
import TaskProvider from '../../context/TasksProvider'
import { useTasks } from '../../context/UseTasks'

const MainPage = () => {





  return (
    <TaskProvider>
      <Header />
      <Main />
      <Outlet />
    </TaskProvider>
  )
}

export default MainPage
