import React, { Children, createContext, useEffect, useState } from 'react'
import axiosInstance from '../services/axiosInstance';

const UserAuthContext = createContext();

function UserAuthProvider({ children }) {
    const [response, setResponse] = useState({ user: {}, errorMessage: '' });
    const userLSData = localStorage.getItem('user');
    const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(userLSData) ? JSON.parse(userLSData).token : false);

    useEffect(() => {
        const initialise = async () => {
            try {
                if (isLoggedIn) {
                    const data = await axiosInstance.get('auth/me', {
                        headers: {
                            'Authorization': `Bearer ${isLoggedIn}`,
                        }
                    })
                    setResponse({ user: data.data })
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                }
            } catch (e) {
                setIsLoggedIn(false);
            }
        }

        initialise();
    }, [])

    const login = async (credentials) => {
        try {
            const data = await axiosInstance.post('auth/login', credentials,
                { headers: { 'Content-Type': 'application/json' } }
            )
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.data.token}`;
            localStorage.setItem("user", JSON.stringify(data.data));
            setResponse({ user: data.data });
            setIsLoggedIn(true);
        } catch (e) {
            console.error(e);
            setResponse({ errorMessage: e.response.data.message })
            return;
        }
    }

    const setErrorMessage = () => {
        setResponse({ errorMessage: "" })
    }
    return (
        <UserAuthContext.Provider value={{
            login,
            isLoggedIn,
            user: response.user,
            errorMessage: response.errorMessage,
            setErrorMessage,
            setIsLoggedIn
        }}>
            {children}
        </UserAuthContext.Provider>
    )
}

export { UserAuthContext, UserAuthProvider }