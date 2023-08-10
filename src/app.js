import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Menu from "./components/Menu";
import UserContext from "../utills/UserContext";
import appStore from "../utills/appStore";
import { Provider } from "react-redux";

const About = lazy(()=> import('./components/About')); //lazy loading

const FoodOrderingApp = () =>{
    //fetch logged in user
    const [userName, setUserName] = useState("")
    useEffect(()=>{
        //authentication api call with username and password
        const data = {
            loggedInUser: "Shivani Rastogi"
        }

        setUserName(data.loggedInUser);
    },[])

    return (
    <Provider store = {appStore}>
        <UserContext.Provider value={{loggedInUser :userName, setUserName}}>
            <div className="app">
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
        </UserContext.Provider>
    </Provider>    

    );


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
                element:<Suspense fallback='loading ...'><About/></Suspense> 
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