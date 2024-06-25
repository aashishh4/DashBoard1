import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export const authcontext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("login") === "true");
    console.log("isAuth",isAuth)
    const [tokan, settokan] = useState(localStorage.getItem("tokan"));
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth && tokan) {
            localStorage.setItem("tokan", tokan);
        }
    }, [isAuth, tokan]);

    const Login = (data) => {
        localStorage.setItem('login', "true");
        setIsAuth(true);
        settokan(data);
        localStorage.setItem('tokan', data);
        navigate('/');
    }

    const Logout = () => {
        localStorage.setItem('login', "false");
        localStorage.removeItem('tokan');
        setIsAuth(false);
        settokan(null);
        navigate('/login');
    }

    return (
        <authcontext.Provider value={{ Login, Logout, isAuth, tokan }}>
            {children}
        </authcontext.Provider>
    );
}

export const useAuth = () => {
    return useContext(authcontext);
}
