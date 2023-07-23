import { useEffect, useState } from "react"
import ResCard from "./ResCard"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Search = (props) =>{
    const {data,setFilteredData=()=>{}} = props;

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
    </div>
}


const RestaurantSection = (props) =>{
    return <div className="resSeaction">
        {props?.data?.map(item => (
            <Link key={item.data.id} to={"/restaurant/"+ item.data.id}>
                <ResCard key={item.data.id} data={item.data}/>
            </Link>
            
            
        ))}
        
    </div>
}
const Body = () =>{
    const [filteredData, setFilteredData] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData =async ()=>{
        let res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING");
        const response = await res.json();
        setFilteredData(response?.data?.cards[2].data?.data?.cards);
    }
    return <div className="body">
        <Search setFilteredData = {setFilteredData} data ={filteredData}/>
        {filteredData?.length === 0 ? 
        <Shimmer/>
        : <RestaurantSection data = {filteredData}/>}
    </div>
}

export default Body