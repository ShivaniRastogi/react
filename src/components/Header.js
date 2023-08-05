import { useContext, useState } from "react"
import { LOGO_URL } from "../../utills/constant"
import { Link } from "react-router-dom"
import UserContext from "../../utills/UserContext"
const Logo = () =>{
    return <img 
    className="logo"
    src={LOGO_URL}/>
    
}
const NavSection =()=>{
    const [status, setStatus] = useState("Login");
    const {loggedInUser} = useContext(UserContext);

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
        <li>
            {loggedInUser}
        </li>
    </ul>
}
const Header = () =>{
    return <div className="header">
        <Logo/>
        <NavSection/>
    </div>
}

export default Header