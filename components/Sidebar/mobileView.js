import Image from 'next/image';
import React, { useState } from 'react';
import { FiBarChart2 } from 'react-icons/fi';
import Sidebar from './index';
import NotionLogo from "../../assets/notionlogo.png"
import { IoMdClose } from 'react-icons/io';
// import Main from "../"

function mobileView({ open, setopen }) {
    // const [open, setOpen] = useState(false);

    return (
        <div>

            <div className='md:hidden flex px-4 py-4 bg-white'>
                {
                    !open ? (<div onClick={() => setopen(true)}> <FiBarChart2 className='w-8 h-8 rotate-90' /> </div>) : <div ><div className='mt-1 ' onClick={() => setopen(false)}><IoMdClose className='w-6 h-6' /></div><div><Sidebar /> </div> </div>
                }
                <a href='/' className='flex m-auto  justify-center'>
                    <Image src={NotionLogo} width={120} height={40} className="object-contain" />
                </a>
                {/* <div>
                    <a href='/Auth/Login' className='flex gap-4 items-center'>
                        <BiSearchAlt className='md:w-6 md:h-6 hidden' />
                        <button className='text-[15px] font-semibold bg-black rounded-md text-white py-1 px-2'>Log In</button>
                    </a>
                </div> */}
            </div>
        </div>
    )
}

export default mobileView