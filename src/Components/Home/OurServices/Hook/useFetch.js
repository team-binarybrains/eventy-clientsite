import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = (url, initialValue = []) => {
    const [data, setData] = useState(initialValue)

    useEffect(() => {

        axios.get(url)
            .then(res => {
                const { data } = res
                setData(data)
            })
    }, [])

    return data
}
export default useFetch