import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement( //React.createElement is an object
//     'div',
//     {id: "parent"}, //attributes
//     [
//         React.createElement('div',{id: "child1"},"hello from child 1"),
//         React.createElement('div',{id: "child2"},"hello from child 2")
//     ] //children    
// );
const para = <p>heading is :</p> //react element

const Content = () =>{      //functional component
    return <h1>hello world</h1> 
}
const Heading = () =>{  
    return <div>
        {para}
        <Content />     
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Heading />);