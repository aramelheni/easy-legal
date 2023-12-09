import axios from "axios";
import apiUrl from "../apiConfig";
import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useState } from 'react';

const isSignedIn = () => {
    console.log("token:", localStorage.getItem("token"));
    return localStorage.getItem("token") != null;
}

const initialUserContextValue = {
    user: null,
    isSignedIn,
    signIn: null,
    signOut: null
}
const UserContext = createContext(initialUserContextValue);

export const UserProvider = ({ children }) => {
    const signIn = (email, password, callback) => {
        const body = { email, password }

        axios.post(apiUrl + "/users/signin", body).then(response => {
            console.log("successful");
            const token = response.data.token;
            localStorage.setItem("token", token);
            setUserContextValue({ ...userContextValue, user: response.data.user });
            callback(null);
        }).catch(error => {
            callback("Could not sign in: " + error);
        });
    }

    const signOut = () => {
        localStorage.removeItem('token');
    }

    const [userContextValue, setUserContextValue] = useState({
        ...initialUserContextValue,
        signIn,
        signOut
    });

    return (<UserContext.Provider value={userContextValue}>
        {children}
    </UserContext.Provider>);
}

export function useUser() {
    return useContext(UserContext);
}

const userRole = () => {
    const token = localStorage.getItem("token");
    if (token) {
        try {
            const decodedToken = jwtDecode(token);
            return decodedToken.userRole;
        } catch (error) {
            console.error("Token decoding error:", error);
        }
    }

    return null;
}

const userFullName = () => {
    const token = localStorage.getItem("token");
    if (token) {
        try {
            const decodedToken = jwtDecode(token);
            return decodedToken.userRole;
        } catch (error) {
            console.error("Token decoding error:", error);
        }
    }

    return null;
}