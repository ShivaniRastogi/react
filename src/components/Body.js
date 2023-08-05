import ResCard, { topRatedCard } from "./ResCard"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useFetchData from "../../utills/useFetchData";
import { useContext, useEffect, useState } from "react";
import useOffline from "../../utills/useOffline";
import UserContext from "../../utills/UserContext";
const Search = (props) =>{
    const {data,setFilteredData=()=>{}} = props;
    const { setUserName, loggedInUser } = useContext(UserContext)
    return <div className="search">
        <button id="filterBtn" onClick={()=>{
            let topData = data.filter((item)=>(
                item?.data?.avgRating > 4
            ))
            setFilteredData(topData);
        }}>
            Top Rated
        </button>
        <input type="text"></input>
        <button>Search</button>

        <div>
            <label>change user : </label>
            <input type="text" value={loggedInUser} onChange={(e)=> setUserName(e.target.value)}></input>

        </div>
    
    </div>
}


const RestaurantSection = (props) =>{
    const TopRatedCards = topRatedCard(ResCard);
    return <div className="resSeaction">
        {props?.data?.map(item => (
            <Link key={item.info.id} to={"/restaurant/"+ item.info.id}>
                {item.info.avgRating > 4 ? <TopRatedCards key={item.info.id} data={item.info}/> :<ResCard key={item.info.id} data={item.info}/>}
            </Link>
            
            
        ))}
        
    </div>
}
const Body = () =>{
    const Data = useFetchData("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING");
    const [filteredData, setFilteredData] = useState([]);
    
    useEffect(()=>{
        console.log(Data);
        if(Data) setFilteredData(Data);
    },[Data]);

    const offline = useOffline();
    if(offline === true) return <h1>Looks like you are offline</h1>
    return <div className="body">
        <Search setFilteredData = {setFilteredData} data ={filteredData}/>
        {filteredData?.length === 0 ? 
        <Shimmer/>
        : <RestaurantSection data = {filteredData}/>}
    </div>
}

export default Body