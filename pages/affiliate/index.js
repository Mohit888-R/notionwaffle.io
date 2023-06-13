import React, { useState } from 'react';
import MobileView from '../../components/Sidebar/mobileView';
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import Avatar1 from "../../assets/avatar1.png";
import TestimonialCard from '../../components/Card/testimonialCard';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";


const questionsTab = [
    {
        que: "What is an affiliate program?",
        ans: "An affiliate program is a way for individuals or businesses to earn commission by promoting and selling our products. As an affiliate, you will receive a unique link that you can share on your website, social media, or other online platforms. When someone clicks on your link and makes a purchase, you will earn a commission on the sale."
    },
    {
        que: "How do I join your affiliate program?",
        ans: "Joining our affiliate program is easy and free. Simply click here and fill out the affiliate application form. Once your application is approved, you will receive a unique affiliate link that you can use to promote our products."
    },
    {
        que: "How do I earn commission?",
        ans: "To earn commission, you simply need to promote our products and services on your website, social media, or other online platforms. When someone clicks on your affiliate link and makes a purchase, you will earn a percentage of the sale."
    },
    {
        que: "How much commission do I earn?",
        ans: "As an affiliate in our program, you will earn a 20% commission on every sale made through your unique affiliate link. This means that for every purchase made through your link, you will receive 20% of the sale as commission."
    },
    {
        que: "When do I get paid?",
        ans: "Gumroad processes payouts on a weekly basis, with payments being made on Friday of each week. This means that if you make a affiliate sale, you will receive your payment on the following Friday."
    },
    {
        que: "What is Notion?",
        ans: "Notion is an all-in-one workspace that allows you to take notes, add tasks, manage projects, and get organized. Whether you're writing or planning, Notion has a versatile design for getting things done."
    }, {
        que: "What is Notion template?",
        ans: "Notion templates are pre-built Notion components that can be imported into your Notion workspace and are a great way to boost your productivity in Notion."
    },
    {
        que: "I have more questions",
        ans: "Send your question at codewaffle@gmail.com. I will be more than happy to answer."
    }
]


function index() {

    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    const [Index, setIndex] = useState(false);

    return (
        <div>
            <Header />
            <MobileView open={open} setopen={setOpen} />
            {!open ? (
                <div>
                    <div className='py-20'>
                        <h1 className='lg:text-[72px] md:text-[60px] text-[40px] md:leading-[80px] leading-10 text-center font-semibold lg:w-8/12 md:w-10/12 m-10/12 flex  m-auto'>Become our affiliate and earn commission</h1>
                        <p className='py-10 text-[20px] opacity-70 text-center font-semibold lg:w-8/12 md:w-10/12   m-10/12 flex  m-auto'>Join our affiliate program and become a member of our team! As an affiliate, you will earn commission on sales made through your unique affiliate link</p>
                        <button className='bg-black text-white px-6 py-3 drop-shadow-sm text-[20px] rounded-md m-auto justify-center flex'>Become an affiliate</button>
                    </div>
                    <div className='py-8 text-center'>
                        <div className='text-[36px] font-semibold'>Have questions?</div>
                        <div className='text-[20px] font-normal opacity-80'>Below you will find some of the most frequently asked questions.</div>
                        <div className='py-8 text-start w-10/12 m-auto justify-center space-y-8 cursor-default'>
                            {
                                questionsTab.map((items, index) => (
                                    <div className='border rounded-md bg-white bg-opacity-5 py-2 px-4' onClick={() => { setShow(!show); setIndex(index); }}>
                                        <div className='flex items-center' >
                                            <p className='text-[20px] font-semibold flex-1' >{items.que}</p>
                                            {!show ? (<AiOutlinePlusCircle className='w-6 h-6' />) : (<AiOutlineMinusCircle className='w-6 h-6' />)}
                                        </div>
                                        {show && (Index == index) ?
                                            (<div className='border-t mt-4 pt-2 text-[18px]'>
                                                {items.ans}
                                            </div>) : (<div>

                                            </div>)
                                        }

                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <Footer />
                </div>) : (<div></div>)}

        </div>
    )
}

export default index
