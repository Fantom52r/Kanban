import React, { useEffect, useState } from 'react'
import Calendar from '../../calendar/Calendar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { paths } from '../../../Routes'
import { useUser } from '../../../context/UseUser'
import { deleteTask, editTask } from '../../../API/tasks'
import { useTasks } from '../../../context/UseTasks'
import { statusList } from '../../../lib/Status'
import * as S from "./popBrowse.styled"
import { topicData } from '../../../lib/Topic'

const PopBrowse = () => {
    const { user } = useUser()
    const { setTasks, tasks } = useTasks()
    const [editMode, setEditMode] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams()
    const [selected, setSelected] = useState(null)
    const [error, setError] = useState('')

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
    function onDelete(event) {
        event.preventDefault()
        deleteTask({ id, token: user.token }).then((result) => {
            setTasks(result.tasks)
            navigate(paths.MAIN)

        })
    }

    function onEditTask(event) {
        event.preventDefault()
        if (!taskData.title || !taskData.description || !taskData.topic || !selected) {
            return setError("Заполните поля")
        }
        editTask({ id, token: user.token, data: taskData }).then((result) => {
            setTasks(result.tasks)
            navigate(paths.MAIN)

        }).catch((error) => {
            setError(error.message)

        })
    }

    useEffect(() => {
        if (tasks.length) {
            const task = tasks.find((t) => t._id === id)
            if (!task) {
                navigate(paths.MAIN)
                return
            }
            setTaskData({
                ...taskData, status: task.status, title: task.title, description: task.description, topic: task.topic
            })
            setSelected(new Date(task.date))
        }
    }, [tasks])
    return (
        <S.PopBrowse id="popBrowse">
            <S.PopBrowseContainer>
                <S.PopBrowseBlock>
                    <S.PopBrowseContent>
                        <S.PopBrowseTopBlock>
                            <S.PopBrowseTtl>{taskData.title}</S.PopBrowseTtl>
                            <p>{error}</p>

                            <S.CategoriesTheme $color={topicData[taskData.topic]}>
                                <p>{taskData.topic}</p>
                            </S.CategoriesTheme>
                        </S.PopBrowseTopBlock>
                        <S.Status>
                            <S.StatusP>Статус</S.StatusP>
                            <S.StatusThemes>
                                {
                                    editMode ? statusList.map((status) =>
                                        <S.StatusTheme $active={taskData.status===status} key={status} >
                                            <input value={status} name="status" onChange={onChange} type="radio" />
                                            <p>{status}</p>
                                        </S.StatusTheme>) : <S.StatusTheme $active>
                                        <p>{taskData.status}</p>
                                    </S.StatusTheme>
                                }

                            </S.StatusThemes>
                        </S.Status>
                        <S.PopBrowseWrap>
                            <S.PopBrowseForm action="#">
                                <S.FormBrowseBlock>
                                    <S.SubTtl>Описание задачи</S.SubTtl>
                                    <S.FormBrowseArea name="description" onChange={onChange} value={taskData.description} id="textArea01" readOnly={!editMode} placeholder="Введите описание задачи..."></S.FormBrowseArea>
                                </S.FormBrowseBlock>
                            </S.PopBrowseForm>
                            <Calendar disabled={!editMode} selected={selected} setSelected={setSelected} />
                        </S.PopBrowseWrap>

                        {
                            editMode ? <S.PopBrowseBtnEdit>
                                <S.ButtonGroup>
                                    <button onClick={onEditTask}>Сохранить</button>
                                    <button onClick={() => setEditMode(false)} >Отменить</button>
                                    <button onClick={onDelete} >Удалить задачу</button>
                                </S.ButtonGroup>

                                <S.ButtonClose ><Link to={paths.MAIN}>Закрыть</Link></S.ButtonClose>
                            </S.PopBrowseBtnEdit> : <S.PopBrowseButton>
                                <S.ButtonGroup>
                                    <button onClick={() => setEditMode(true)}>Редактировать задачу</button>
                                    <button onClick={onDelete}>Удалить задачу</button>
                                </S.ButtonGroup>
                                <S.ButtonClose ><Link to={paths.MAIN}>Закрыть</Link></S.ButtonClose>
                            </S.PopBrowseButton>
                        }

                    </S.PopBrowseContent>
                </S.PopBrowseBlock>
            </S.PopBrowseContainer>
        </S.PopBrowse>
    )
}

export default PopBrowse
