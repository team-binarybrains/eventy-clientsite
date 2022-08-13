import React, { useEffect, useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import Loading from '../../../Share/Loading/Loading';


const CheckoutForm = ({ product }) => {
    console.log(product);

    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    // console.log(clientSecret);

    const { _id, eventPrice, email, name, price, totalPrice } = product
    console.log(eventPrice)

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ totalPrice })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });

    }, [totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        setCardError(error?.message || '')
        setSuccess('');
        setProcessing(true);

        // card payment confirmation
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },

            });

        if (processing) {
            return <Loading></Loading>
        }

        if (intentError) {
            setCardError(intentError?.message);
            // setProcessing(false);
        }
        else {
            setCardError('')
            setTransactionId(paymentIntent.id)
            console.log(paymentIntent)
            setSuccess('Congrats! Your payment is done successfully.')


            // store payment info in database
            const payment = {
                productId: _id,
                productName: name,
                email: email,
                transactionId: paymentIntent.id
            }
            fetch(`http://localhost:5000/myaddedorders/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            }).then(res => res.json())
                .then(data => {
                    setProcessing(false);
                    console.log(data);
                })

        }


    }

console.log(transactionId);
    return (
        <>

            <form onSubmit={handleSubmit} className='py-4'>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#322d27',
                                '::placeholder': {
                                    color: '#322d27',
                                },
                            },
                            invalid: {
                                color: '#322d27',
                            },
                        },
                    }}
                />

                <div className='flex justify-end w-full mt-5'>
                    <button type="submit" disabled={!stripe || !clientSecret} className="btn btn-outline px-16 rounded-full hover:bg-transparent hover:text-black"> PAY </button>
                </div>
            </form>

            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {success && <div className='text-stone-800 '>
                <p className='text-green-800'>{success}  </p>
                <p className='text-lg '>Your Transaction Id : <span className="font-bold">{transactionId}</span> </p>
            </div>
            }
        </>
    );
};

export default CheckoutForm;
