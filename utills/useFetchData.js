import { useEffect, useState } from "react";

const useFetchData =(url) =>{
    const [filteredData, setFilteredData] = useState(null);

    useEffect(()=>{
        fetchData();
    },[])
  

    const fetchData =async ()=>{
        let res = await fetch(url);
        const response = await res.json();
        console.log(response?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(response?.data?.cards[2].data?.data?.cards);

        setFilteredData(response?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return filteredData;
}

export default useFetchData;