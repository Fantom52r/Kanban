import React, { useState } from 'react'
import Calendar from '../../calendar/Calendar'
import { postNewTasks } from '../../../API/tasks'
import { useUser } from '../../../context/UseUser'
import { paths } from '../../../Routes'
import { useTasks } from '../../../context/UseTasks'
import { Link, useNavigate } from 'react-router-dom'
import * as S from './popNewCard.styled.js'
const PopNewCard = () => {
    const { user } = useUser()
  const {setTasks} = useTasks()
  const navigate = useNavigate()

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
            return alert("Заполните поля")
        }
        postNewTasks({ data: { ...taskData, date: selected }, token: user.token }).then((data) => {
            setTasks(data.tasks)

            navigate(paths.MAIN)
        }).catch((error)=> {
            alert(error.message)
        })
    }
    return (
        < S.PopNewCard>
            <div className="pop-new-card__container">
                <div className="pop-new-card__block">
                    <div className="pop-new-card__content">
                        <h3 className="pop-new-card__ttl">Создание задачи</h3>
                        <Link to={paths.MAIN} className="pop-new-card__close">&#10006;</Link>
                        <div className="pop-new-card__wrap">
                            <form className="pop-new-card__form form-new" id="formNewCard" action="#">
                                <div className="form-new__block">
                                    <label htmlFor="formTitle" className="subttl">Название задачи</label>
                                    <input value={taskData.title} onChange={onChange} className="form-new__input" type="text" name="title" id="formTitle" placeholder="Введите название задачи..." autoFocus />
                                </div>
                                <div className="form-new__block">
                                    <label htmlFor="textArea" className="subttl">Описание задачи</label>
                                    <textarea value={taskData.description} onChange={onChange} className="form-new__area" name="description" id="textArea" placeholder="Введите описание задачи..."></textarea>
                                </div>
                            </form>
                            <Calendar selected={selected} setSelected={setSelected} />
                        </div>
                        <div className="pop-new-card__categories categories">
                            <p className="categories__p subttl">Категория</p>
                            <div className="categories__themes">
                                <label className="categories__label">
                                    <input onChange={onChange} value={'Web Design'} name='topic' className='categories__input' type="radio" />
                                    <p className="categories__theme _orange _active-category">Web Design</p>
                                </label>
                                <label className="categories__label">
                                    <input onChange={onChange} value={'Research'} name='topic' className='categories__input' type="radio" />
                                    <p className="categories__theme _orange _active-category">Research</p>
                                </label>                                <label className="categories__label">
                                    <input onChange={onChange} value={'Copywriting'} name='topic' className='categories__input' type="radio" />
                                    <p className="categories__theme _orange _active-category">Copywriting</p>
                                </label>
                            </div>
                        </div>
                        <button onClick={onclick} className="form-new__create _hover01" id="btnCreate">Создать задачу</button>
                    </div>
                </div>
            </div>
        </S.PopNewCard>
    )
}

export default PopNewCard
