import { useEffect, useState } from 'react';

const useLoading = () => {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])

    return [loading, setLoading]
};

export default useLoading;