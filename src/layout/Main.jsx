import { Outlet } from "react-router-dom";
import Nav from "../pages/Home/Navbar/Nav";
import Footer from "../pages/Sheard/Footer/Footer";


const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;