import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/main/MainPage'
import LoginPage from './pages/login/LoginPage'
import RegistrationPage from './pages/registration/RegistrationPage'
import NotFoundPage from './pages/not-found/NotFoundPage'
import ExitPage from './pages/exit/ExitPage'
import NewCardPage from './pages/new-card/NewCardPage'
import CardPage from './pages/card/CardPage'
import PrivateRoute from './components/private-route/PrivateRoute'
import { getValueFromLs } from './lib/localstorage'

export const paths = {
    MAIN:'/',
    EXIT:'/exit',
    CARD:'/card/:id',
    NEW_CARD:'/new-card',
    LOGIN:'/login',
    REGISTRATION:'/registration',
    NOT_FOUND:'*'
}
const AppRoutes = () => {
  const [isAuth,setIsAuth] = useState(getValueFromLs('user'))
  return (
    <Routes>
      <Route element= {<PrivateRoute isAuth={isAuth}/>}> 
        <Route path={paths.MAIN}element={<MainPage isAuth={isAuth}/>}>
        <Route path={paths.EXIT}element={<ExitPage setIsAuth={setIsAuth}/>}/>
        <Route path={paths.NEW_CARD}element={<NewCardPage/>}/>
        <Route path={paths.CARD}element={<CardPage/>}/>
        </Route></Route>
        <Route path={paths.LOGIN}element={<LoginPage setIsAuth={setIsAuth}/>}/>
        <Route path={paths.REGISTRATION}element={<RegistrationPage/>}/>
        <Route path={paths.NOT_FOUND}element={<NotFoundPage/>}/>
        
        
    </Routes>
  )
}

export default AppRoutes
