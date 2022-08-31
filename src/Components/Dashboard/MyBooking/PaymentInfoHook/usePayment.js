import axios from 'axios';
import React, { useEffect, useState } from 'react';

const usePayment = (id) => {

    const [paymentInfo, setPaymentInfo] = useState([])
    // payment info
     
    useEffect(() => {
        axios.get(`http://localhost:5000/get-payment/${id}`)
            .then(res => {
                const { data } = res
                console.log(data);
                setPaymentInfo(data)
            })
    }, [id])

    return paymentInfo
};

export default usePayment;