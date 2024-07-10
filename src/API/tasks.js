import { json } from "react-router-dom"

export async function getAllTasks({token}) {
    try {
        const response = await fetch('https://wedev-api.sky.pro/api/kanban',{
            method: 'GET',
            headers: {
                authorization:`
                Bearer ${token}
                `
            }
        })
        const isResponseOk = response.ok
        const result = await response.json()
       if (isResponseOk) {
        return result
       } else {
        throw new Error(result.error)
       }
    } catch (error) {
        throw new Error(error.message)
    }
}

export async function postNewTasks({token, data}) {
    try {
        const response = await fetch('https://wedev-api.sky.pro/api/kanban',{
            method: 'POST',
            headers: {
                authorization:`
                Bearer ${token}
                `
            },

            body:JSON.stringify(data)
        })
        const isResponseOk = response.ok
        const result = await response.json()
       if (isResponseOk) {
        return result
       } else {
        throw new Error(result.error)
       }
    } catch (error) {
        throw new Error(error.message)
    }
}