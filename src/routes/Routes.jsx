import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layout/Root";
import Home from "../components/pages/Home/Home";
import ErrorPage from "../components/layout/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/', 
        element:<Root></Root>, 
        errorElement: <ErrorPage></ErrorPage>, 
        children:[
            {
                path: '/', 
                element: <Home></Home>
            }
        ]
    }
])

export default router; 