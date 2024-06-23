import React from 'react'
import { Link } from 'react-router-dom'
import { paths } from '../../Routes'
import * as S from '../../styles/common.styled'

const Registration = () => {
  return (
    <S.ModalContainer>
      <S.Modal>
        <S.ModalBlock>
          <S.ModalTitle>
            <h2>Регистрация</h2>
          </S.ModalTitle>
          <S.ModalForm>
            <input type="text" name="first-name" id="first-name" placeholder="Имя" />
            <input className="modal__input login" type="text" name="login" id="loginReg" placeholder="Эл. почта" />
            <input className="modal__input password-first" type="password" name="password" id="passwordFirst" placeholder="Пароль" />
            <S.ModalEnterButton id="SignUpEnter"><a href="../main.html">Зарегистрироваться</a> </S.ModalEnterButton>
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
