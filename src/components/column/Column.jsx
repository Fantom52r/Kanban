import React from 'react'
import Card from '../card/Card'
import *as S from './Column.styled'
const Column = ({ title, tasks }) => {

  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <p>{title}</p>
      </S.ColumnTitle>
      <S.Cards>
        {
          tasks.map((task) => <Card key={task._id} id={task._id} title={task.title} topic={task.topic} date={task.date} />)
        }
      </S.Cards>
    </S.MainColumn>
  )
}

export default Column
