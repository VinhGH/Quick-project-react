import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider')
    }
    return context
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Check if user is logged in
        const token = localStorage.getItem('token')
        if (token) {
            // Fetch user data
            // setUser(userData)
        }
        setLoading(false)
    }, [])

    const login = async (credentials) => {
        // Call login API
        // Save token and user data
        localStorage.setItem('token', 'sample-token')
        setUser({ name: 'User', email: credentials.email })
    }

    const register = async (userData) => {
        // Call register API
        console.log('Register:', userData)
    }

    const logout = () => {
        localStorage.removeItem('token')
        setUser(null)
    }

    const value = {
        user,
        loading,
        login,
        register,
        logout,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
