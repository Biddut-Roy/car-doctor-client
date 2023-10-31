import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/Firebase.init";
import PropTypes from 'prop-types';
import axios from "axios";



export const GlobalContext = createContext(null)

const AuthContext = ({ children }) => {
    const [user, setUser] = useState();
    const [loader, setLoader] = useState(true)

    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            const logUser = currentUser?.email || user?.email;
            const logger = { email: logUser }
            setUser(currentUser)
            setLoader(false);
            if (currentUser) {
                axios.post('http://localhost:2500/jwt', logger, { withCredentials: true })
                    .then((res) => {
                        console.log(res.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
            else{
                axios.post('http://localhost:2500/logout', logger, { withCredentials: true })
                .then(res => {
                    console.log(res.data);
                })
            }
        })
        return () => {
            unsubscribe();
        }
    }, [user])


    const info = { user, loader, createUser, login, logOut }

    return (
        <GlobalContext.Provider value={info}>
            {children}
        </GlobalContext.Provider>
    );
};

AuthContext.propTypes = {
    children: PropTypes.node,
}


export default AuthContext;