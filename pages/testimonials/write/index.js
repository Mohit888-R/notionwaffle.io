import React, { useEffect, useState } from 'react'
import Testimonial from "../../../components/Card/testimonialCard";
import Imgsrc from "../../../assets/avatar1.png";
import Carousel from "../../../components/Carousel";
import { Swiper, SwiperSlide } from 'swiper/react';
import Header from "../../../components/Header/index";
import MobileView from '../../../components/Sidebar/mobileView';
import Footer from "../../../components/Footer/index";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import {ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { PostTestimonial } from '../../../api-call';

function index() {
    const [open,setOpen] = useState(false);
    const [username,setUsername] = useState('');
    const [rating,setrating] = useState('');
    const [description,setDescription] = useState('');
    
    const onSubmit = (e)=>{
        e.preventDefault();
        if(rating === "" || username === "" || description === ""){
            toast.error('Enter all credentials!', {
                autoClose: 2000, 
                position: toast.POSITION.TOP_RIGHT
            });
        }else{
            PostTestimonial({username,rating,description}).then((response)=>{
                const statuscode = response?.data?.statusCode;
                if(statuscode==200){
                toast.success('Successfully Submited!', {
                    autoClose: 2000, 
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        })
            setUsername('');
            setrating('');
            setDescription('');
        }        
    }

  

    return (
        
        <div>
            <Header />
            <MobileView open={open} setopen={setOpen} />

            {
                !open?(<div>
 <div className='md:grid md:grid-cols-2'>
                <div className='md:visible invisible p-8 px-16  h-screen bg-gray-200 pt-[10em]'>
                    <h1 className='flex flex-wrap font-bold text-4xl'>Post your Reviews about your best experience.</h1>
                    <h2 className='flex flex-wrap font-light text-xl py-4'>Changing people's lives through the use of a tool that we all love - Notion. If you believe we have changed your life, please leave a testimonial.</h2>
                    <div className='mt-8'>

                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={100}
                            slidesPerView={1}
                            navigation={false}
                            pagination={{ clickable: true }}
                            className='hover:cursor-pointer'
                            autoplay={true}
                        //    scrollbar={{ draggable: true }}
                        //    onSwiper={(swiper) => console.log(swiper)}
                        //    onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide className=''><Testimonial imgsrc={Imgsrc} userName={"Julie Juz"} userComment={"Very useful Notion templates that inspired me to create my own following my needs. Thank you to give that to the world."} month={"April"} date={"12"} year={"2023"} /></SwiperSlide>
                            <SwiperSlide><Testimonial imgsrc={Imgsrc} userName={"Julie Juz"} userComment={"Very useful Notion templates that inspired me to create my own following my needs. Thank you to give that to the world."} month={"April"} date={"12"} year={"2023"} /></SwiperSlide>
                            <SwiperSlide><Testimonial imgsrc={Imgsrc} userName={"Julie Juz"} userComment={"Very useful Notion templates that inspired me to create my own following my needs. Thank you to give that to the world."} month={"April"} date={"12"} year={"2023"} /></SwiperSlide>
                            <SwiperSlide><Testimonial imgsrc={Imgsrc} userName={"Julie Juz"} userComment={"Very useful Notion templates that inspired me to create my own following my needs. Thank you to give that to the world."} month={"April"} date={"12"} year={"2023"} /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>

            <div className='flex justify-center' >
                <form className='md:relative absolute top-0 ' onSubmit={onSubmit}>
                    <p className=' text-2xl  pt-[8em] text-center font-bold'>Write Testimonial</p>
                    <div className='flex justify-center pt-8'>
                        <label>
                            <p className='text-[12px] text-light opacity-70'>Name</p>
                            <input type='text' placeholder='Enter name' value={username} onChange={(e)=>{setUsername(e.target.value);}} className='w-80 border  border-black outline-none text-[15px] px-2 py-2 font-semibold'></input>
                        </label>
                    </div>
                    <div className='flex justify-center pt-2'>
                        <label>
                            <p className='text-[12px] text-light opacity-70'>Rating</p>
                            <select placeholder='Select Rating' value={rating} onChange={(e)=>{setrating(e.target.value);}} className='border w-80 border-black outline-none text-[15px] px-2 py-2 font-semibold' >
                                <option>Select</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </label>
                    </div>
                    <div className='flex justify-center pt-2'>
                        <label>
                            <p className='text-[12px] text-light opacity-70'>Description</p>
                            <textarea type='text' placeholder='Drop a comment' value={description} onChange={(e)=>setDescription(e.target.value)} className='w-80 border border-black outline-none text-[15px] px-2 py-2 font-semibold'></textarea>
                        </label>
                    </div>
                    <div className='text-center w-full pt-4'>
                        <button className='bg-blue-500 text-white py-1 w-80 rounded-lg uppercase' >Post</button>
                    </div>
                </form>
                <ToastContainer/>
            </div>
            </div>
            <Footer/>
                </div>):(<div></div>)
            }
        </div>
    )
}

export default index