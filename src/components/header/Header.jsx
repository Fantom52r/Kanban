import React, { useState } from 'react'
import { Container } from '../../styles/common.styled'
import * as S from "./Header.styled"
import { Link } from 'react-router-dom'
import { paths } from '../../Routes'


const Header = ({ addTasks,isAuth }) => {
    const [isOpen, setIsOpen] = useState(false)
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
                        <S.HeaderBtnMainNew onClick={addTasks} ><a href="#">Создать новую задачу</a></S.HeaderBtnMainNew>
                        <a href="#user-set-target" onClick={() => setIsOpen(!isOpen)} className="header__user _hover02">{isAuth.name}</a>
                        {
                            isOpen ? <S.HeaderPopUserSet id="user-set-target">
                                <S.PopUserSetName>{isAuth.name}</S.PopUserSetName>
                                <S.PopUserSetMail>{isAuth.login}</S.PopUserSetMail>
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
