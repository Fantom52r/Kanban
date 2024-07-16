import React from 'react'
import Column from '../column/Column'
import { statusList } from '../../lib/Status'
import { Container } from '../../styles/common.styled'
import * as S from './Main.styled'
import { useTasks } from '../../context/UseTasks'

const Main = () => {
    const {tasks, error, loading} = useTasks()

    return (
        <>
        {error ? <p style={{textAlign:"center", color: 'red', paddingTop: '40px', fontSize: '60px'}}>
       {error}
       </p> :  loading ? <div style={{ textAlign: "center", paddingTop: "20px" }}>Данные загружаются</div>:<S.Main>
            <Container>
                <S.MainBlock>
                    <S.MainContent>
                        {
                            statusList.map((status) => <Column key={status} tasks={tasks.filter((task) => status === task.status)} title={status} />)
                        }
                    </S.MainContent>
                </S.MainBlock>
            </Container>
        </S.Main>
 } </>

        
    )
}

export default Main
