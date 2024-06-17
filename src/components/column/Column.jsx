import React from 'react'
import Card from '../card/Card'
import *as S from './Column.styled'
const Column = ({ title, tasks }) => {

  return (
    <S.MainColumn>
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {
          tasks.map((task) => <Card key={task.id} title={task.title} topic={task.topic} date={task.date} />)
        }
      </div>
    </S.MainColumn>
  )
}

export default Column
