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
            callback(data);
            setLoading(false);
        })
    },[refetch,url]);

    return [data,loading,()=>{setLoading(true);setRefetch(previous=>!previous)}]
}

export default useRefetch;