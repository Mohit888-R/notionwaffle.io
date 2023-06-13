import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Avatar1 from "../assets/avatar1.png";
import TestimonialCard from './Card/testimonialCard';
import { AiFillStar } from "react-icons/ai";
import {topTestimonials,getalltestimonials} from "../api-call/index";



function section14() {
    
    const [data,setData]= useState([]);
    const [count,setCount] = useState(0);
    const [page,setPage] = useState(1);
    const [length, setlength] = useState(0);

    useEffect(()=>{
        topTestimonials().then((response)=>{
            // console.log("data : ",response?.data?.data.length);
            setlength(response?.data?.data.length);
            setData(response?.data?.data)
        })

        getalltestimonials().then((response)=>{
            setCount(response?.data?.data[1]?.Totalcounts);
        });

    },[])
    return (
        <div className='flex m-auto justify-center py-16 px-16'>
            <div>
                <div className='pb-16 text-center'>
                    <h2 className='text-[40px] py-2 font-semibold'>Community of +40,000 productivity seekers</h2>
                    <p className='text-[20px] opacity-70'>Changing people's lives with a tool that we all adore - Notion.</p>
                </div>

                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                   
                    {data.slice(0,page*5).map((items, index) => (
                        <li key={index} className="list-none">
                            <TestimonialCard imgsrc={Avatar1} userName={items.username} rating={items.rating} userComment={items.description} month={items.time} />
                        </li>
                    ))}
                </div>
                {
                    (length > 0 )&& ((page) < (length/5)) && (
                        <div className='text-center'>
                        <button className='border border-black rounded-lg bg-gray-100 px-4 py-2' onClick={()=>setPage(page+1)}>Load More </button>
                    </div>
                    )
                }
               
                <div className='border border-dashed my-8 py-4 m-auto justify-center md:flex items-center'>
                    <div className='md:flex  justify-center'>
                        <div className='flex -space-x-2 justify-center'>
                            <Image src={Avatar1} width={40} height={40} alt="" className="rounded-full border-2 border-white" />
                            <Image src={Avatar1} width={40} height={40} alt="" className="rounded-full border-2 border-white" />
                            <Image src={Avatar1} width={40} height={40} alt="" className="rounded-full border-2 border-white" />
                            <Image src={Avatar1} width={40} height={40} alt="" className="rounded-full border-2 border-white" />
                            <Image src={Avatar1} width={40} height={40} alt="" className="rounded-full border-2 border-white" />
                        </div>
                        <div className='px-2'>
                            <div className='flex justify-center'>
                                <AiFillStar className='w-5 h-5 text-yellow-300' />
                                <AiFillStar className='w-5 h-5 text-yellow-300' />
                                <AiFillStar className='w-5 h-5 text-yellow-300' />
                                <AiFillStar className='w-5 h-5 text-yellow-300' />
                                <AiFillStar className='w-5 h-5 text-yellow-300' />
                            </div>
                            <div className='flex justify-center'>
                                <p className='text-[14px] opacity-90'>from {count} reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className='my-8 mb-4 md:my-0'>
                        <a href='/testimonials' className='py-2 px-4 bg-white hover:bg-gray-100  border drop-shadow-md rounded-lg text-[18px] opacity-80 mx-4'>Read all testimonials</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default section14