import React from 'react'
import { paths } from '../../Routes'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
      <p>
        Такой страницы нет
      </p>
      <Link to ={paths.MAIN}>
      Вернуться на главную страницу
      </Link>
    </div>
  )
}

export default NotFoundPage
