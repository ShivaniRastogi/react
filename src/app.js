import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Menu from "./components/Menu";

const FoodOrderingApp = () =>{
    return <div className="app">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
}
const appRouter = createBrowserRouter([
    { 
        path :"/",
        element: <FoodOrderingApp/>,
        children:[
            {
                path :"/",
                element: <Body/>
            },
            {
                path :"/about",
                element: <About/>
            },
            {
                path :"/contact",
                element: <Contact/>
            },
            {
                path :"/restaurant/:resId", //for dynamic routes
                element: <Menu/>
            }
        ],
        errorElement:<Error/>
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);