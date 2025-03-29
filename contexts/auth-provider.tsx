"use client"

import {
    createContext,
    PropsWithChildren,
    useContext,
    useState,
} from "react";

interface AuthProps {
    token: string
}

const AuthContext = createContext<AuthProps>({
    token: ""
});

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }: PropsWithChildren) {

    const [token, setToken] = useState<string>("");

    return <AuthContext.Provider value={{ token }}>
        {children}
    </AuthContext.Provider>
}