import React, { useState } from 'react';
import Avatar1 from "../assets/avatar1.png";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { useRouter } from 'next/router';
import * as Axios from '../api-call/index';
import {ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function section11() {
    const router = useRouter();
    const [email,setEmail] = useState('');

    const submithandle = () => {
        let statuscode;
        // e.preventDefault();
        Axios.Subscribe(email).then((response) => {
            statuscode = response?.data?.statusCode
            if(email === ""){
                toast.error('Enter Email Address!', {
                    autoClose: 2000, 
                    position: toast.POSITION.TOP_RIGHT
                });
            }
            else if(statuscode==300){
                toast.warning('Email Already Registered!', {
                    autoClose: 2000, 
                    position: toast.POSITION.TOP_RIGHT
                });
            }else if(statuscode==200){
                toast.success('Successfully registered!', {
                    autoClose: 2000, 
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        });
        router.push('/');
        setEmail('');
       
    }

    return (
        <div className='m-auto justify-center text-center'>
            <h1 className='md:text-[60px] text-[40px] font-semibold lg:w-6/12 md:w-10/12 w-full pt-32 md:pb-8 pb-4  px-4 leading-[60px] m-auto'>Get productive and organized with Notion</h1>
            <p className='lg:w-6/12 md:w-8/12 w-11/12  m-auto md:text-[20px] text-[16px] font-normal opacity-80 pb-4'>Unlock the way to maximum productivity. Become more productive and organized in your personal and business lives with Notion.</p>
            
            <div className='py-4'>
                <input placeholder='Enter your email' type="email" value={email} onChange={(e)=>{setEmail(e.target.value);}} className='border border-gray-300 drop-shadow-sm rounded-md py-2 px-4 w-4/12 mx-4 font-light text-black outline-1 outline-blue-400 ' required />
                <button className='py-2 px-4 bg-black text-white rounded-md' onClick={submithandle}>Join +10K readers</button>
                <ToastContainer />
            </div>

            <p className='text-[16px] opacity-80 pb-4'>Notion templates, resources, lessons and more. Unsubscribe anytime.</p>

            <div className=''>
                <div className='flex  m-auto justify-center text-center'>
                    <div className='flex -space-x-4'>
                        <Image src={Avatar1} width={40} height={40} alt="" className='border-2 rounded-full border-white' />
                        <Image src={Avatar1} width={40} height={40} alt="" className='border-2 rounded-full border-white' />
                        <Image src={Avatar1} width={40} height={40} alt="" className='border-2 rounded-full border-white' />
                        <Image src={Avatar1} width={40} height={40} alt="" className='border-2 rounded-full border-white' />
                    </div>
                    <div className='pl-2'>
                        <div className='flex'>
                            <AiFillStar className='text-yellow-500 w-5 h-5' />
                            <AiFillStar className='text-yellow-500 w-5 h-5' />
                            <AiFillStar className='text-yellow-500 w-5 h-5' />
                            <AiFillStar className='text-yellow-500 w-5 h-5' />
                            <AiFillStar className='text-yellow-500 w-5 h-5' />
                        </div>
                        <p className='text-[14px] opacity-80'>
                            from 462 reviews
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default section11