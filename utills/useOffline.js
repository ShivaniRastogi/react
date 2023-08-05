import { useEffect, useState } from "react";

const useOffline = () =>{
    const [offline, setOffline] = useState(false);
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOffline(true);
        })
        window.addEventListener("online",()=>{
            setOffline(false);
        })
    },[]);
    return offline;
}

export default useOffline;