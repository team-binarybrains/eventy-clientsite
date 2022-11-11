import axios from "axios";
import React, { useEffect, useState } from "react";

const usePayment = (uid) => {
  const [paymentInfo, setPaymentInfo] = useState([]);
  // payment info

  useEffect(() => {
    axios
      .get(
        `https://eventy-serversite-production.up.railway.app/get-payment/${uid}`
      )
      .then((res) => {
        const { data } = res;
        console.log(data);
        setPaymentInfo(data);
      });
  }, [uid]);

  return paymentInfo;
};

export default usePayment;
