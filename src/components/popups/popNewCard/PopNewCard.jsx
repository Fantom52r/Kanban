import React, { useState } from 'react'
import Calendar from '../../calendar/Calendar'
import { postNewTasks } from '../../../API/tasks'
import { useUser } from '../../../context/UseUser'
import { paths } from '../../../Routes'
import { useTasks } from '../../../context/UseTasks'
import { Link, useNavigate } from 'react-router-dom'
import * as S from './popNewCard.styled.js'
import { topicData } from '../../../lib/Topic.js'

const PopNewCard = () => {
    const { user } = useUser()
    const { setTasks } = useTasks()
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const [selected, setSelected] = useState(null)
    const [taskData, setTaskData] = useState({
        title: '',
        description: '',
        topic: '',
        status: 'Без статуса',
    })
    function onChange(event) {
        const { name, value } = event.target
        setTaskData({ ...taskData, [name]: value })
    }
    function onclick(event) {
        event.preventDefault()
        if (!taskData.title || !taskData.description || !taskData.topic || !selected) {
            return setError("Заполните поля")
        }
        postNewTasks({ data: { ...taskData, date: selected }, token: user.token }).then((data) => {
            setTasks(data.tasks)

            navigate(paths.MAIN)
        }).catch((error) => {
            setError(error.message)
        })
    }
    return (
        < S.PopNewCard>
            <S.PopNewcardContainer>
                <S.PopNewCardBlock>
                    <S.PopNewCardContent>
                        <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>

                        <S.PopNewCardClose to={paths.MAIN}>&#10006;</S.PopNewCardClose>
                        <S.PopNewCardWrap>
                            <S.PopNewCardForm>
                                <S.FormNewBlock>
                                    <S.SubTtl htmlFor="formTitle">Название задачи</S.SubTtl>
                                    <S.FormNewInput value={taskData.title} onChange={onChange} type="text" name="title" id="formTitle" placeholder="Введите название задачи..." autoFocus />
                                </S.FormNewBlock>
                                <S.FormNewBlock>
                                    <S.SubTtl htmlFor="textArea">Описание задачи</S.SubTtl>
                                    <S.FormNewArea value={taskData.description} onChange={onChange} name="description" id="textArea" placeholder="Введите описание задачи..."></S.FormNewArea>
                                </S.FormNewBlock>
                            </S.PopNewCardForm>


                            <Calendar selected={selected} setSelected={setSelected} />

                        </S.PopNewCardWrap>
                        <p style={{ textAlign: 'right', color: 'red' }}>{error}</p>

                        <S.CategoriesP>Категория</S.CategoriesP>
                        <S.CategoriesThemes>
                            <label>
                                <S.Input onChange={onChange} value={'Web Design'} name='topic' type="radio" />
                                <S.CategoriesTheme $color={topicData['Web Design']}>Web Design</S.CategoriesTheme>
                            </label>{" "}
                            <label>
                                <S.Input onChange={onChange} value={'Research'} name='topic' type="radio" />
                                <S.CategoriesTheme $color={topicData.Research}>Research</S.CategoriesTheme>
                            </label>{" "}
                            <label>
                                <S.Input onChange={onChange} value={'Copywriting'} name='topic' type="radio" />
                                <S.CategoriesTheme $color={topicData.Copywriting}>Copywriting</S.CategoriesTheme>
                            </label>{" "}
                        </S.CategoriesThemes>


                        <S.FormNewCreate onClick={onclick} id="btnCreate">Создать задачу</S.FormNewCreate>
                    </S.PopNewCardContent>
                </S.PopNewCardBlock>
            </S.PopNewcardContainer>
        </S.PopNewCard>
    )
}

export default PopNewCard