import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllTasks } from "../API/tasks"
import { useUser } from "./UseUser"

export const TaskContext = createContext(null)

const TaskProvider = ({ children }) => {
    const { user } = useUser()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const [tasks, setTasks] = useState([])
    useEffect(() => {
        getAllTasks({ token: user.token }).then(
            (data) => {
                setTasks(data.tasks)
            }
        ).catch((error) => {
            setError(error.message)
        }).finally(() => { setLoading(false) })

    }, [])
    return (
        <TaskContext.Provider value={{ tasks, setTasks, error, loading }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider
