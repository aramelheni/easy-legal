import axios from "axios";
import apiUrl from "../apiConfig";
import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useState } from 'react';
import { capitalizeFirst } from "../components/utilities/TextUtilities";

const isSignedIn = () => {
    return localStorage.getItem("token") != null;
}

const getUserId = () => {
    const token = localStorage.getItem("token");
    if (token) {
        try {
            const decodedToken = jwtDecode(token);
            return decodedToken.user._id;
        } catch (error) {
            console.error("Token decoding error:", error);
            return "ID_ERR";
        }
    }

    return null;
}

const getUserRole = () => {
    const token = localStorage.getItem("token");
    if (token) {
        try {
            const decodedToken = jwtDecode(token);
            return decodedToken.user.role;
        } catch (error) {
            console.error("Token decoding error:", error);
            return "ROLE_ERR";
        }
    }

    return null;
}

const getUserFirstName = () => {
    const token = localStorage.getItem("token");
    if (token) {
        try {
            const decodedToken = jwtDecode(token);
            return capitalizeFirst(decodedToken.user.firstName);
        } catch (error) {
            console.error("Token decoding error:", error);
        }
    }
    return null;
}

const getUserLastName = () => {
    const token = localStorage.getItem("token");
    if (token) {
        try {
            const decodedToken = jwtDecode(token);
            return capitalizeFirst(decodedToken.user.lastName);
        } catch (error) {
            console.error("Token decoding error:", error);
        }
    }
    return null;
}

const getUserFullName = () => {
    const token = localStorage.getItem("token");
    if (token) {
        try {
            const decodedToken = jwtDecode(token);
            const firstName = capitalizeFirst(decodedToken.user.firstName);
            const lastName = capitalizeFirst(decodedToken.user.lastName);
            return firstName + " " + lastName;
        } catch (error) {
            console.error("Token decoding error:", error);
        }
    }

    return null;
}

const getUser = () => {
    const token = localStorage.getItem("token");
    if (token) {
        try {
            return jwtDecode(token).user;
        } catch (error) {
            console.error("Token decoding error:", error);
        }
    }

    return null;
}

const initialUserContextValue = {
    isSignedIn,
    getUserRole,
    getUserFullName,
    getUserFirstName,
    getUserLastName,
    getUserId,
    getUser,
    signIn: null,
    signOut: null,
}
const UserContext = createContext(initialUserContextValue);
export function useUserContext() {
    return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
    // const updateCurrentUserInfo = () => {
    //     axios.get(apiUrl + "/users/currentUser").then(response => {

    //     }).catch(error => {
    //         console.log("Failed getting current user's info:", error);
    //     });
    // };

    const signIn = (email, password, callback) => {
        const body = { email, password }

        axios.post(apiUrl + "/users/signin", body).then(response => {
            console.log("successful");
            const token = response.data.token;
            localStorage.setItem("token", token);

            callback(null);
        }).catch(error => {
            callback("Could not sign in: " + error);
        });
    }

    const signOut = () => {
        localStorage.removeItem('token');
    }

    const [userContextValue, /*setUserContextValue*/] = useState({
        ...initialUserContextValue,
        signIn,
        signOut
    });

    return (<UserContext.Provider value={userContextValue}>
        {children}
    </UserContext.Provider>);
}