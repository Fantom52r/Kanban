import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { paths } from '../../Routes'
import * as S from '../../styles/common.styled'
import { login as loginApi } from '../../API/auth'
import { useUser } from '../../context/UseUser'

const Login = () => {
	const [formData, setFormData] = useState({
		login: '',
		password: '',
	})
	const [error, setError] = useState('')
	const { login } = useUser()

	const onLogin = (event) => {
		event.preventDefault()
		if (!formData.login || !formData.password) {
			return alert("Заполните поля")
		}
		loginApi({ login: formData.login, password: formData.password }).then((user) => {
			login(user.user)
		}).catch((error) => {
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
