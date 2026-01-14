import { createBrowserRouter } from "react-router";
import App from "../App";
import Account from "../components/account/Account";
import Login from "../components/auth/Login";
import Home from "../components/home/Home";


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

                ]
        },
        {
            path: '/login',
            element: <Login></Login>
        }


    ]
);

export default router;