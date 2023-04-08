import Image from 'next/image'
import React, { useState } from 'react';
import NotionVerification from "../../assets/notionverification.jpg";
import { AiOutlineInstagram, AiOutlineYoutube, AiOutlineTwitter } from "react-icons/ai";
import {useRouter} from "next/router";
import * as Axios from "../../api-call/index";
import {ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function index() {
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
        <div className='px-8 m-auto flex'>
            <div>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 border-y py-8'>
                    <div className=''>
                        <h2 className='text-[20px] font-semibold opacity-90'>Get Started with Notion</h2>
                        <div className='text-[16px] opacity-70 font-medium '>Sign up for our weekly newsletter and receive free Notion templates, free resources, access to the community, and more!</div>
                        <div className='space-x-4 pt-4'>
                            <input placeholder='Enter your email' type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} className='border py-2 w-6/12 px-4 rounded-md drop-shadow  outline-blue-300' />
                            <button className='px-4 py-2 border bg-black text-white rounded-md drop-shadow' onClick={submithandle}>Subscribe</button>
                            <ToastContainer />
                        </div>
                        <p className='text-[14px] font-normal opacity-80 py-2'>One email per week. Unsubscribe anytime.</p>
                    </div>
                    <div className='flex lg:justify-end justify-start'>
                        <Image src={NotionVerification} width={100} height={80} alt="" className='w-16 h-16 object-contain' />
                    </div>
                </div>
                <div className='py-8'>
                    <a href='/affiliate' className='text-[18px] opacity-70 underline'>Become an affiliate</a>
                    <div className='flex py-8'>
                        <p className='text-[16px] opacity-70 flex-1'>&copy; 2023 NotionWaffle. All rights reserved.</p>
                        <div className='gap-4 flex'>
                            <AiOutlineInstagram className="w-6 h-6 opacity-60" />
                            <AiOutlineYoutube className="w-6 h-6 opacity-60" />
                            <AiOutlineTwitter className="w-6 h-6 opacity-60" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index