import { createBrowserRouter } from "react-router";
import App from "../App";
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