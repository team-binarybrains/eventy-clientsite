/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react"

const useRefetch = (url,initialValue=[],callback=()=>0)=> {
    const [data,setData] = useState(initialValue);
    const [refetch,setRefetch] = useState(true);
    const [loading,setLoading] = useState(true);

    useEffect(()=> {
        axios.get(url).then(({data}) => {
            setData(data);
            setLoading(false);
            callback(data);
        })
    },[refetch,url]);

    return [data,loading,()=>{setRefetch(previous=>!previous)}]
}

export default useRefetch;