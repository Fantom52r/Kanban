import React, { useState } from 'react'
import { Container } from '../../styles/common.styled'
import * as S from "./Header.styled"


const Header = ({ addTasks }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <S.Header>
            <Container>
                <S.HeaderBlock>
                    <S.headerlogo>
                        <a href="" target="_self"><img src="/images/logo.png" alt="logo" /></a>
                    </S.headerlogo>
                    <S.headerlogo>
                        <a href="" target="_self"><img src="/images/logo_dark.png" alt="logo" /></a>
                    </S.headerlogo>
                    <S.HeaderNav>
                        <S.HeaderBtnMainNew onClick={addTasks} ><a href="#">Создать новую задачу</a></S.HeaderBtnMainNew>
                        <a href="#user-set-target" onClick={() => setIsOpen(!isOpen)} className="header__user _hover02">Ivan Ivanov</a>
                        {
                            isOpen ? <S.HeaderPopUserSet id="user-set-target">
                                <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
                                <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
                                <S.PopUserSetTheme>
                                    <p>Темная тема</p>
                                    <input type="checkbox" className="checkbox" name="checkbox" />
                                </S.PopUserSetTheme>
                                <S.Hover03><a href="#popExit">Выйти</a></S.Hover03>
                            </S.HeaderPopUserSet> : null
                        }

                    </S.HeaderNav>
                </S.HeaderBlock>
            </Container>
        </S.Header>
    )
}

export default Header
