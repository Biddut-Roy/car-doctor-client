import { useContext } from "react";
import { GlobalContext } from "./AuthContext";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const { user , loader } = useContext(GlobalContext)
    const location = useLocation();

    if (loader) {
        return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children
    }
    return(
        <div>
            <Navigate state={location.pathname} to={"/login"}></Navigate>
        </div>
    )
};

export default PrivateRoute;