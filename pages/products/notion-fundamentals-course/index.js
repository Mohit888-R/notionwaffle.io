import Image from 'next/image';
import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import Avatar1 from "../../../assets/avatar1.png";
import Header from "../../../components/Header/index";
import MobileView from '../../../components/Sidebar/mobileView';
import Footer from "../../../components/Footer/index";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const questionsTab = [
    {
        que: "What is Notion?",
        ans: "Notion is an all-in-one workspace that allows you to take notes, add tasks, manage projects, and get organized. Whether you're writing or planning, Notion has a versatile design for getting things done."
    },
    {
        que: "How much the course will cost?",
        ans: "There is no pricing information available at this time."
    },
    {
        que: "Will I need to pay to use Notion?",
        ans: "No, Notion does offer a free plan with no strings attached."
    },
    {
        que: "I have more questions",
        ans: "Send your question at modest@notionway.com. I will be more than happy to answer."
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
                    <div className='m-auto justify-center text-center bg-black pb-16 bg-opacity-10'>
                        <h1 className='md:text-[60px] text-[40px] font-semibold lg:w-8/12 md:w-10/12 w-10/12 pt-32 md:pb-8 pb-4  px-4 leading-[60px] m-auto'>Learn the fundamentals of Notion and get started</h1>
                        <p className='lg:w-8/12 md:w-10/12 w-10/12  m-auto md:text-[20px] text-[16px] font-normal opacity-80 pb-4'>Learn how to create and use Notion pages, blocks. As well as how to manage databases and customize workspace to fit your specific needs.</p>
                        <form className='py-4'>
                            <input placeholder='Enter your email' type="email" className='border border-gray-300 drop-shadow-sm rounded-md py-2 px-4 w-4/12 mx-4 font-light text-black outline-1 outline-blue-400 ' />
                            <button className='py-2 px-4 bg-black text-white rounded-md'>Join waitlist</button>
                        </form>
                        <p className='text-[16px]  opacity-80 pb-4'>You will be get early access and discount before others.</p>
                    </div>
                    <div className='text-center py-8'>
                        <h1 className='text-[36px] font-semibold'>Have Questions?</h1>
                        <p className='text-[20px] font-normal opacity-80 py-4'>Below you will find some of the most frequently asked questions.</p>

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
                </div>

            )
                : (<div>

                </div>)}

        </div>
    )
}

export default index
