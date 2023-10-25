import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import AddCoffee from "../Components/AddCoffee/AddCoffee";
import UpdateCoffee from "../Components/UpdateCoffee/UpdateCoffee";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";

const Router = createBrowserRouter([
    {
        path : '/',
        element : <Layout/>,
        children : [
            {
                path : '/',
                element : <Home/>,
                loader : ()=> fetch('https://coffee-emporium-server.vercel.app/coffees')
            },
            {
                path : '/add-coffee',
                element : <AddCoffee/>
            },
            {
                path : '/update-coffee/:id',
                element : <UpdateCoffee/>,
                loader : ({params})=> fetch(`https://coffee-emporium-server.vercel.app/coffees/${params.id}`)
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/register',
                element : <Register></Register>
            }
        ]
    }
])

export default Router;