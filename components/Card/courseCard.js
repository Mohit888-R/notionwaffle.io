import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { checkoutpayment } from '../paymentwindow';

function courseCard({ imgsrc, title, description, link, btntxt,amount }) {
    return (
        <div className='bg-[#f1f0ee] rounded-lg'>
            {/* <Link href={link} > */}
                <Image src={imgsrc} width={600} height={600} />
                <div className='lg:px-8 px-4 py-4'>
                    <p className='md:text-[32px] text-[28px] font-semibold'>{title}</p>
                    <p className='md:text-[20px] text-[16px] py-2 font-normal opacity-80'>{description}</p>
                    <button onClick={()=>checkoutpayment(amount)} className='text-[18px]  drop-shadow-md  bg-white border rounded-md py-2 my-4 px-4'>{btntxt} </button>
                </div>
            {/* </Link> */}
        </div>
    )
}

export default courseCard