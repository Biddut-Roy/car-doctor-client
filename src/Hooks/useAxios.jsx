import axios from "axios";
import { useEffect } from "react";
import UseAuth from "./useAuth";
import { useNavigate } from "react-router-dom";


const createAxios = axios.create({
    baseURL: 'http://localhost:2500',
    withCredentials: true,
})


const useAxios = () => {
    const { logOut } = UseAuth();
    const navigate = useNavigate();

    useEffect(() => {
        createAxios.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('check a error check', error.response);
            if (error.response.status === 401 || error.response.status === 403) {
                logOut()
                    .then(() => {
                        alert('Sign-out successful.')
                    }).catch((error) => {
                        console.log(error.message);
                    });
                    navigate("/login")
            }
        })

    }, [])
    return createAxios;
}

export default useAxios;