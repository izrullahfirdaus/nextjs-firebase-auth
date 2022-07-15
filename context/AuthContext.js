import {createContext, useContext, useEffect, useState} from 'react';
import {onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {auth} from '../firebaseConfig';

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user)=> {
            if(user){
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName
                })
            } else {
                setUser(null)
            }
        })
        return () => unsubscribe()
    }, [])

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = async () => {
        setUser(null)
        await signOut(auth)
    }
    return (
        <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>
    )
}

