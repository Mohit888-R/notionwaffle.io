import React from 'react';
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";


function testimonialCard({ imgsrc, userName, userComment, rating,  date }) {

  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<AiFillStar key={i} className='w-6 h-6 text-yellow-400' />);
  }

    return (
        <div className='border drop-shadow-md p-4 rounded-md bg-white' >
            <div className='flex items-center gap-4'>
                <Image src={imgsrc} width={40} height={40} alt="" className='rounded-full' />
                <p className='font-semibold opacity-80'>{userName}</p>
            </div>
            <div className='flex py-2'>
                {stars}
                {/* for(var i=0; i<rating;i++){
                <AiFillStar className='w-6 h-6 text-yellow-400' />
           } */}
                {/* <AiFillStar className='w-6 h-6 text-yellow-400' />
                <AiFillStar className='w-6 h-6 text-yellow-400' />
                <AiFillStar className='w-6 h-6 text-yellow-400' /> */}
            </div>
            <p className='opacity-90'>{userComment}</p>
            <p className='capitalize opacity-50 py-2'>{date}</p>
        </div >
    )
}

export default testimonialCard