import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)
const STORAGE_KEY = 'user'

function loadUser() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY))
    } catch {
        return null
    }
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(loadUser) // { id, username, email } or null

    function login(userData) {
        setUser(userData)
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(userData)) } catch { /* ignore */ }
    }

    function logout() {
        setUser(null)
        try { localStorage.removeItem(STORAGE_KEY) } catch { /* ignore */ }
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}
