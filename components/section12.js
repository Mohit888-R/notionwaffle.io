import React, { useEffect, useState } from 'react';
import PremiumImage from "../assets/premium-notion-temp.png";
import SimpleImage from "../assets/simple-notion-temp.png";
import Image from "next/image";
import { checkoutPayment, getRazorpayKey } from '../api-call';
import Head from 'next/head';
import { useRouter } from 'next/router';


function section12() {
    const router = useRouter();
    const [key, setKey] = useState('');
    
    const initializeRazorpay = () => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
    
          script.onload = () => {
            resolve(true);
          };
          script.onerror = () => {
            resolve(false);
          };
    
          document.body.appendChild(script);
        });
      };

    getRazorpayKey().then((response) => { setKey(response?.data?.key) });

    const checkoutpayemnt = async() => {
        const res = await initializeRazorpay();

        await checkoutPayment().then((response) => {
            // console.log(response?.data?.order?.id);
            const options = {
                key: key, // Enter the Key ID generated from the Dashboard
                amount: response?.data?.order?.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                currency: response?.data?.order?.currency,
                name: "Acme Corp",
                description: "Test Transaction",
                // image: "https://example.com/your_logo",
                order_id: response?.data?.order?.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                callback_url: "http://localhost:5000/api/v1/payment/paymentverification",
                profile: {
                    name: "Gaurav Kumar",
                    email: "gaurav.kumar@example.com",
                    contact: "9000090000"
                },
                notes: {
                    address: response?.data?.order?.notes
                },
                theme: {
                    color: "#3399cc"
                }
            };
            const razorpay_payment = new window.Razorpay(options);
            razorpay_payment.open();
        })
    }

    return (
        <div className='m-auto justify-center flex my-16 px-16'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-8 '>
                <div className='bg-[#F1F0EE]  rounded-lg drop-shadow-md'>
                    <Image src={PremiumImage} width={500} height={"auto"} alt="" className='p-4' />
                    <div className='px-8 pb-16'>
                        <a href='/premium-notin-templates' className='text-[30px] font-semibold'>Premium Notion templates</a>
                        <p className='text-[16px] opacity-70 font-medium py-2 pb-8'>Become 2x productive and organized with premium Notion templates. Premium templates are multi-page systems that can help you achieve a specific goal.</p>
                        {/* <a href='/premium-notion-templates' className='py-2 bg-white px-4 rounded-md text-[16px] font-semibold opacity-80'>View premium templates</a> */}
                        <a onClick={() => checkoutpayemnt()} className='py-2 bg-white px-4 rounded-md text-[16px] font-semibold opacity-80'>View premium templates</a>
                    </div>
                </div>
                <div className='bg-[#F1F0EE] rounded-lg drop-shadow-md'>
                    <Image src={SimpleImage} width={500} height={300} alt="" className='p-4' />
                    <div className='px-8 pb-16'>
                        <a href='/simple-notin-templates' className='text-[30px] font-semibold'>Simple Notion templates</a>
                        <p className='text-[16px] opacity-70 font-medium py-2 pb-8'>Get started and familiar using Notion with simple Notion templates. From simple habit trackers to simple project management systems, we have you covered.</p>
                        <a href='/premium-notion-templates' className='py-2 bg-white px-4 rounded-md text-[16px] font-semibold opacity-80'>View premium templates</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default section12