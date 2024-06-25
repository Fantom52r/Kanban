import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { paths } from '../../Routes'
import * as S from '../../styles/common.styled'

const Login = ({ setIsAuth }) => {
	const navigate = useNavigate()
	const login = (event) => {
		event.preventDefault()
		setIsAuth(true)
		navigate(paths.MAIN)
	}
	return (
		<S.ModalContainer>
			<S.Modal>
				<S.ModalBlock>
					<S.ModalTitle>
						<h2>Вход</h2>
					</S.ModalTitle>
					<S.ModalForm>
						<S.ModalInput type="text" name="login" id="formlogin" placeholder="Эл. почта" />
						<S.ModalInput type="password" name="password" id="formpassword" placeholder="Пароль" />
						<S.ModalEnterButton onClick={login}> Войти</S.ModalEnterButton>
						<S.ModalFormGroup>
							<p>Нужно зарегистрироваться?</p>
							<Link to={paths.REGISTRATION}>Регистрируйтесь здесь</Link>
						</S.ModalFormGroup>
					</S.ModalForm>
				</S.ModalBlock>
			</S.Modal>
		</S.ModalContainer>
	)
}

export default Login