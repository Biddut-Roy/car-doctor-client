import { useContext } from "react";
import { GlobalContext } from "../Authprovider/AuthContext";


const UseAuth = () => {
  const auth = useContext(GlobalContext)
  return auth
};

export default UseAuth;