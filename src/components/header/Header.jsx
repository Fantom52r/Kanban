import React, { useState } from 'react'
import { Container } from '../../styles/common.styled'
import * as S from "./Header.styled"
import { Link } from 'react-router-dom'
import { paths } from '../../Routes'
import { useUser } from '../../context/UseUser'


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
	const {user} = useUser()

    return (
        <S.Header>
            <Container>
                <S.HeaderBlock>
                    <S.HeaderLogo>
                        <a href="" target="_self"><img src="/images/logo.png" alt="logo" /></a>
                    </S.HeaderLogo>
                    <S.HeaderLogo>
                        <a href="" target="_self"><img src="/images/logo_dark.png" alt="logo" /></a>
                    </S.HeaderLogo>
                    <S.HeaderNav>
                        <S.HeaderBtnMainNew ><Link to='/new-card'>Создать новую задачу</Link></S.HeaderBtnMainNew>
                        <a href="#user-set-target" onClick={() => setIsOpen(!isOpen)} className="header__user _hover02">{user.name}</a>
                        {
                            isOpen ? <S.HeaderPopUserSet id="user-set-target">
                                <S.PopUserSetName>{user.name}</S.PopUserSetName>
                                <S.PopUserSetMail>{user.login}</S.PopUserSetMail>
                                <S.PopUserSetTheme>
                                    <p>Темная тема</p>
                                    <input type="checkbox" className="checkbox" name="checkbox" />
                                </S.PopUserSetTheme>
                                <S.PopUserSetButton><Link to={paths.EXIT}>Выйти</Link></S.PopUserSetButton>
                            </S.HeaderPopUserSet> : null
                        }

                    </S.HeaderNav>
                </S.HeaderBlock>
            </Container>
        </S.Header>
    )
}

export default Header
