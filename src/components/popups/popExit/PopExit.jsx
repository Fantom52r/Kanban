import { Link } from 'react-router-dom'
import { paths } from '../../../Routes'
import { useUser } from '../../../context/UseUser'
import * as S from "./popExit.styled"

const PopExit = () => {
    const { logOut } = useUser()
    return (
        <S.PopExit id="popExit">
            <S.PopExitContainer >
                <S.PopExitBlock >
                    <S.PopExitTtl >
                        <h2>Выйти из аккаунта?</h2>
                    </S.PopExitTtl>
                    <form className="pop-exit__form" id="formExit" action="#">
                        <S.PopExitFormGroup>
                            <S.PopExitYes onClick={logOut}  id="exitYes"><Link to={paths.LOGIN}>Да, выйти</Link> </S.PopExitYes>
                            <S.PopExitNo id="exitNo"><Link to={paths.MAIN} >Нет, остаться</Link> </S.PopExitNo>
                        </S.PopExitFormGroup>
                    </form>
                </S.PopExitBlock>
            </S.PopExitContainer>
        </S.PopExit>
    )
}

export default PopExit
