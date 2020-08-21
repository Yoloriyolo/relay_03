import React, { useState, useContext, createContext} from 'react'
const ContextState = createContext();
const ContextDispatch = createContext();

export const Provider = ({children}) => {
    const [login, setLogin] = useState(false);
    const [userId, setUserId] = useState('');
    const stateObj = {
        login,
        userId
    }
    const setObj = {
        setLogin, setUserId
    }
    return (
        <ContextState.Provider value = {stateObj}>
            <ContextDispatch.Provider value = {setObj}>
                {children}
            </ContextDispatch.Provider>
        </ContextState.Provider>
    )
}

export const useContextState = () => {
    return useContext(ContextState)
}

export const useContextDispatch = () => {
    return useContext(ContextDispatch)
}