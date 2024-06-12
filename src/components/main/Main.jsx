import React from 'react'
import Column from '../column/Column'
import { statusList } from '../../lib/Status'


const Main = ({tasks}) => {
    return (
        <main className="main">
            <div className="container">
                <div className="main__block">
                    <div className="main__content">
                        {
                            statusList.map((status) => <Column key={status} tasks={tasks.filter((task) => status === task.status)} title={status} />)
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
