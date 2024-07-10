import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getValueFromLs } from "../lib/localstorage"

export const UserContext = createContext(null)

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(getValueFromLs('user'))
    const navigate = useNavigate()
    function login(userData) {
        localStorage.setItem('user', JSON.stringify(userData))
        setUser(userData)
        navigate(paths.MAIN)
    }

    function logOut() {
        localStorage.removeItem('user')
        setUser(null)
    }
    return (
        <UserContext.Provider value={{ user, login, logOut }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
