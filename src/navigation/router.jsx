import { createBrowserRouter } from "react-router";
import App from "../App";
import Account from "../components/account/Account";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import Home from "../components/home/Home";
import Users from "../components/users/Users";


const router = createBrowserRouter(
    [
        {
            element: <App />,
            children:
                [
                    {
                        path: '/',
                        element: <Home></Home>
                    },
                    {
                        path: '/home',
                        element: <Home></Home>
                    },
                    {
                        path: '/account',
                        element: <Account></Account>
                    }
                    ,
                    {
                        path: '/users',
                        element: <Users></Users>
                    }

                ]
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Signup></Signup>
        }


    ]
);

export default router;