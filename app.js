const heading = React.createElement( //React.createElement is an object
    'div',
    {id: "parent"}, //attributes
    [
        React.createElement('div',{id: "child1"},"hello from child 1"),
        React.createElement('div',{id: "child2"},"hello from child 2")
    ] //children    
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);