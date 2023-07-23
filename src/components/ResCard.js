import { CDN_URL } from "../../utills/constant";

const ResCard = (props) =>{
    const { data } = props;
    const {
        name,
        cuisines,
        avgRating,
        cloudinaryImageId,
    } = data;

    return <div className="resCard">
        <img src={CDN_URL+ cloudinaryImageId}/>
        <div className="cardCont">
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <p>rating : {avgRating}</p> 
        </div>

    </div>
}

export default ResCard