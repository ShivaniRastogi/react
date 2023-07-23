import { useParams } from "react-router-dom";

const Menu =()=>{
    const params = useParams();
    console.log("the restaurant params", params);
    return(
        <h1> Menu of restaurant with id: {params.resId}</h1>

    )
}
export default Menu;