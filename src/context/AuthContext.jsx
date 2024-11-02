import { createContext, useState } from "react"


const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState('');
    const [isLoading, setIsLoading] = useState(true);



    return <AuthContext.Provider value={currentUser}>
        {!isLoading && children}
    </AuthContext.Provider>
}

export default AuthProvider