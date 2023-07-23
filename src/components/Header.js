import { useState } from "react"
import { LOGO_URL } from "../../utills/constant"
import { Link } from "react-router-dom"
const Logo = () =>{
    return <img 
    className="logo"
    src={LOGO_URL}/>
    
}
const NavSection =()=>{
    const [status, setStatus] = useState("Login");
    return <ul className="nav">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About Us</Link>
        </li>
        <li>
            <Link to="/contact">Contact Us</Link>
        </li>
        <li>
            <Link to="/cart">Cart</Link>
        </li>
        <button className="loginBtn" onClick={()=> status === "Login" ? setStatus("Logout") : setStatus("Login")}>
            {status}
        </button>
    </ul>
}
const Header = () =>{
    return <div className="header">
        <Logo/>
        <NavSection/>
    </div>
}

export default Header