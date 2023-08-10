import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../../utills/cartSlice";

const Menu =()=>{
    const params = useParams();
    const cart = useSelector((store)=> store.cart.item)
    const dispatch = useDispatch();
    console.log("the restaurant params", cart);
    return(
        <>
            <h1> Menu of restaurant with id: {params.resId}</h1>
            <button onClick={()=>{
                dispatch(addItem(params.resId))
            }}>add</button>
        </>


    )
}
export default Menu;