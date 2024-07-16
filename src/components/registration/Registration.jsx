import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { paths } from '../../Routes'
import * as S from '../../styles/common.styled'
import { registration } from '../../API/auth'

const Registration = () => {
  const [formData, setFormData] = useState({
    login: '',
    password: '',
    name: '',
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()
  function onChange(event) {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const onRegistration = (event) => {
    event.preventDefault()
    if (!formData.name || !formData.login || !formData.password) {
      return alert("Заполните поля")
    }
    registration({ name: formData.name, login: formData.login, password: formData.password }).then(() => {
      navigate(paths.LOGIN)
    }).catch((error) => {
      setError(error.message)
    })

  }
  return (
    <S.ModalContainer>
      <S.Modal>
        <S.ModalBlock>
          <S.ModalTitle>
            <h2>Регистрация</h2>
          </S.ModalTitle>
          <S.ModalForm onSubmit={onRegistration}>
            <S.ModalInput value={formData.name} onChange={onChange} name='name' id="first-name" placeholder="Имя" />
            <S.ModalInput value={formData.login} onChange={onChange} type="text" name="login" id="loginReg" placeholder="Эл. почта" />
            <S.ModalInput value={formData.password} onChange={onChange} type="password" name="password" id="passwordFirst" placeholder="Пароль" />
            <S.ModalEnterButton id="SignUpEnter">Зарегистрироваться </S.ModalEnterButton>
            <p>{error}</p>
            <S.ModalFormGroup>
              <p>Уже есть аккаунт?  <Link to={paths.LOGIN}>Войдите здесь</Link></p>
            </S.ModalFormGroup>
          </S.ModalForm>
        </S.ModalBlock>
      </S.Modal>
    </S.ModalContainer>
  )
}

export default Registration
