export function getValueFromLs(key) {
    try {
      const value = localStorage.getItem(key)
      return value ? JSON.parse(value) : null 
    } catch {
        return null
    }
}