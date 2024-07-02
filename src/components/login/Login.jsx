import React, { useState } from 'react'
import { Link, json, useNavigate } from 'react-router-dom'
import { paths } from '../../Routes'
import * as S from '../../styles/common.styled'
import { login } from '../../API/auth'

const Login = ({ setIsAuth }) => {
	const [formData, setFormData] = useState({
		login: '',
		password: '',
	})
	const [error, setError] = useState('')
	const navigate = useNavigate()
	const onLogin = (event) => {
		event.preventDefault()
		if (!formData.login || !formData.password) {
			return alert("Заполните поля")
		}
		login({ login: formData.login, password: formData.password }).then((user) => {
			localStorage.setItem('user',JSON.stringify(user.user))
			setIsAuth(true)
			navigate(paths.MAIN)
		}).catch((error)=> {
			setError(error.message)
		})

	}
	function onChange(event) {
		const { name, value } = event.target
		setFormData({ ...formData, [name]: value })
	}
	return (
		<S.ModalContainer>
			<S.Modal>
				<S.ModalBlock>
					<S.ModalTitle>
						<h2>Вход</h2>
					</S.ModalTitle>
					<S.ModalForm onSubmit={onLogin}>
						<S.ModalInput value={formData.login} onChange={onChange} type="text" name="login" id="formlogin" placeholder="Эл. почта" />
						<S.ModalInput value={formData.password} onChange={onChange} type="password" name="password" id="formpassword" placeholder="Пароль" />
						<S.ModalEnterButton> Войти</S.ModalEnterButton>
						<p>{error}</p>
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
