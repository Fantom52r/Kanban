import React, { useEffect, useState } from 'react'
import Calendar from '../../calendar/Calendar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { paths } from '../../../Routes'
import { useUser } from '../../../context/UseUser'
import { deleteTask, editTask } from '../../../API/tasks'
import { useTasks } from '../../../context/UseTasks'
import { statusList } from '../../../lib/Status'
import * as S from "./popBrowse.styled"

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
                    <div className="pop-browse__content">
                        <div className="pop-browse__top-block">
                            <h3 className="pop-browse__ttl">{taskData.title}</h3>
                            <p>{error}</p>

                            <div className="categories__theme theme-top _orange _active-category">
                                <p className="_orange">{taskData.topic}</p>
                            </div>
                        </div>
                        <div className="pop-browse__status status">
                            <p className="status__p subttl">Статус</p>
                            <div className="status__themes">
                                {
                                    editMode ? statusList.map((status) =>
                                        <label  key={status} style={{ backgroundColor: taskData.status === status ? "gray" : "transparent", color: taskData.status === status ? "white" : "gray" }} className="status__theme">
                                            <input value={status} name="status" onChange={onChange} type="radio" />
                                            <p>{status}</p>
                                        </label>) : <div className="status__theme _gray">
                                        <p className="_gray">{taskData.status}</p>
                                    </div>
                                }

                            </div>
                        </div>
                        <div className="pop-browse__wrap">
                            <form className="pop-browse__form form-browse" id="formBrowseCard" action="#">
                                <div className="form-browse__block">
                                    <label htmlFor="textArea01" className="subttl">Описание задачи</label>
                                    <textarea className="form-browse__area" name="description" onChange={onChange} value={taskData.description} id="textArea01" readOnly={!editMode} placeholder="Введите описание задачи..."></textarea>
                                </div>
                            </form>
                            <Calendar disabled={!editMode} selected={selected} setSelected={setSelected} />
                        </div>
                        <div className="theme-down__categories theme-down">
                            <p className="categories__p subttl">Категория</p>
                            <div className="categories__theme _orange _active-category">
                                <p className="_orange">Web Design</p>
                            </div>
                        </div>
                        {
                            editMode ? <div className="pop-browse__btn-edit">
                                <div className="btn-group">
                                    <button onClick={onEditTask} className="btn-edit__edit _btn-bg _hover01"><a href="#">Сохранить</a></button>
                                    <button onClick={() => setEditMode(false)} className="btn-edit__edit _btn-bor _hover03"><a href="#">Отменить</a></button>
                                    <button onClick={onDelete} className="btn-edit__delete _btn-bor _hover03" id="btnDelete"><a href="#">Удалить задачу</a></button>
                                </div>

                                <button className="btn-browse__close _btn-bg _hover01"><Link to={paths.MAIN}>Закрыть</Link></button>
                            </div> : <div className="pop-browse__btn-browse ">
                                <div className="btn-group">
                                    <button onClick={() => setEditMode(true)} className="btn-browse__edit _btn-bor _hover03"><a href="#">Редактировать задачу</a></button>
                                    <button onClick={onDelete} className="btn-browse__delete _btn-bor _hover03"><a href="#">Удалить задачу</a></button>
                                </div>
                                <button className="btn-browse__close _btn-bg _hover01"><Link to={paths.MAIN}>Закрыть</Link></button>
                            </div>
                        }

                    </div>
                </S.PopBrowseBlock>
            </S.PopBrowseContainer>
        </S.PopBrowse>
    )
}

export default PopBrowse
