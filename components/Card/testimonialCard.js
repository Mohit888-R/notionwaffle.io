import React from 'react';
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";


function testimonialCard({ imgsrc, userName, userComment, month, date, year }) {


    return (
        <div className='border drop-shadow-md p-4 rounded-md' >
            <div className='flex items-center gap-4'>
                <Image src={imgsrc} width={40} height={40} alt="" className='rounded-full' />
                <p className='font-semibold opacity-80'>{userName}</p>
            </div>
            <div className='flex py-2'>
                <AiFillStar className='w-6 h-6 text-yellow-400' />
                <AiFillStar className='w-6 h-6 text-yellow-400' />
                <AiFillStar className='w-6 h-6 text-yellow-400' />
                <AiFillStar className='w-6 h-6 text-yellow-400' />
                <AiFillStar className='w-6 h-6 text-yellow-400' />
            </div>
            <p className='opacity-90'>{userComment}</p>
            <p className='capitalize opacity-50 py-2'>{month} {date},{year}</p>
        </div >
    )
}

export default testimonialCard