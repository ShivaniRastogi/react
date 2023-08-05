import React from "react";
import UserContext from "../../utills/UserContext";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            count : 0,
            userinfo:{
                name:"Dummy",
                location:"Dummy"
            },
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/ShivaniRastogi");
        const json = await data.json();
        console.log("api result", json);
        this.setState({
            userinfo :json,
        })
    }

    render(){
        // const {name, location} = this.props;
        const {count, userinfo} = this.state;
        const {name, location} = userinfo

        return <div className="userClass">
            <h1>Count: {count}</h1>

            <button onClick={()=>{
                this.setState({count : this.state.count +1})
            }}>increment</button>

            <h3>Name: {name}</h3>
            <h3>Location: {location}</h3>
            <h3>Contact: email@gmail.com</h3>
            <div>
                <UserContext.Consumer>
                    { ({loggedInUser}) => <h3>loggedIn User : {loggedInUser}</h3> }
                </UserContext.Consumer>
            </div>
        </div>
    }

}
export default UserClass;