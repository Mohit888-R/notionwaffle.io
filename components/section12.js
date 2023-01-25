import React from 'react';
import PremiumImage from "../assets/premium-notion-temp.png";
import SimpleImage from "../assets/simple-notion-temp.png";
import Image from "next/image";

function section12() {
    return (
        <div className='m-auto justify-center flex my-16 px-16'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-8 '>
                <div className='bg-[#F1F0EE]  rounded-lg drop-shadow-md'>
                    <Image src={PremiumImage} width={500} height={"auto"} alt="" className='p-4' />
                    <div className='px-8 pb-16'>
                        <a href='/premium-notin-templates' className='text-[30px] font-semibold'>Premium Notion templates</a>
                        <p className='text-[16px] opacity-70 font-medium py-2 pb-8'>Become 2x productive and organized with premium Notion templates. Premium templates are multi-page systems that can help you achieve a specific goal.</p>
                        <a href='/premium-notion-templates' className='py-2 bg-white px-4 rounded-md text-[16px] font-semibold opacity-80'>View premium templates</a>
                    </div>
                </div>
                <div className='bg-[#F1F0EE] rounded-lg drop-shadow-md'>
                    <Image src={SimpleImage} width={500} height={300} alt="" className='p-4' />
                    <div className='px-8 pb-16'>
                        <a href='/simple-notin-templates' className='text-[30px] font-semibold'>Simple Notion templates</a>
                        <p className='text-[16px] opacity-70 font-medium py-2 pb-8'>Get started and familiar using Notion with simple Notion templates. From simple habit trackers to simple project management systems, we have you covered.</p>
                        <a href='/premium-notion-templates' className='py-2 bg-white px-4 rounded-md text-[16px] font-semibold opacity-80'>View premium templates</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default section12