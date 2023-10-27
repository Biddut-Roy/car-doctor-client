import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/Home/home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import CheckOut from "./pages/Checkout/CheckOut";
import Booking from "./pages/Bokking/Booking";
import PrivateRoute from "./Authprovider/PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
          },
        {
            path: "/login",
            element: <Login></Login>,
          },
        {
            path: "/signUp",
            element: <Register></Register>,
          },
        {
            path: "/checkout/:id",
            element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
            loader: ({params})=>fetch(`http://localhost:2500/services/${params.id}`)
          },
          {
            path: "/Booking",
            element: <PrivateRoute><Booking></Booking></PrivateRoute>,
          }
      ]
    },
  ]);

export default router;