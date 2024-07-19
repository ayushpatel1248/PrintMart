import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";


const OrderConfirmed = () => {
    var navigate = useNavigate();

    const timer = ()=>{
        setTimeout(() => {
            navigate('/')
        }, 3000);
    }
    useEffect(()=>{
        timer();
    })

    return (
        <>
          <section class="py-24 relative">
            <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
              <h2 class="font-manrope font-bold text-4xl leading-10 text-black text-center">
                Order Successful
              </h2>
              <p class="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">
                Thanks for making a purchase you can check our order summary frm
                below
              </p>
            </div>
          </section>
        </>
      );
}

export default OrderConfirmed