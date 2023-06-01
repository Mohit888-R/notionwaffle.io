import React from 'react';
import ultimateFinTracker from "../assets/ultimate-finance-tracker.png";
import ultimateLifePlanner from "../assets/ultimate-life-planner.png";
import CompleteBundle from "../assets/complete-bundle.jpg";
import Image from "next/image";

function section13() {
    return (
        <div className='flex m-auto justify-center py-16 px-16'>
            <div>
                <div className='pb-16 text-center'>
                    <h2 className='text-[40px] py-2 font-semibold'>Most popular Notion templates</h2>
                    <p className='text-[20px] opacity-70'>The most popular Notion templates we've created.</p>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 '>
                    <div className='bg-[#F1F0EE] rounded-lg drop-shadow-md'>
                        <Image src={ultimateLifePlanner} width={500} height={200} alt="" className='p-4' />
                        <div className='px-8 pb-16'>
                            <a href='/simple-notion-templates' className='text-[24px] font-semibold'>Ultimate Life Planner</a>
                            <p className='text-[16px] opacity-70 font-medium py-2 pb-8'>Plan and achieve your goals effortlessly with ultimate life planner.</p>
                            <a href='/premium-notion-templates' className='py-2 bg-white px-4 rounded-md text-[16px] font-semibold opacity-80'>Learn more</a>
                        </div>
                    </div>
                    <div className='bg-[#F1F0EE]  rounded-lg drop-shadow-md'>
                        <Image src={ultimateFinTracker} width={500} height={300} alt="" className='p-4' />
                        <div className='px-8 pb-16'>
                            <a href='/premium-notion-templates' className='text-[24px] font-semibold'>Ultimate Finance Tracker</a>
                            <p className='text-[16px] opacity-70 font-medium py-2 pb-8'>Track and manage all your finance from one place with ultimate finance tracker.</p>
                            <a href='/premium-notion-templates' className='py-2 bg-white px-4 rounded-md text-[16px] font-semibold opacity-80'>Learn more</a>
                        </div>
                    </div>

                    <div className='bg-[#F1F0EE] rounded-lg drop-shadow-md'>
                        <Image src={CompleteBundle} width={500} height={200} alt="" className='p-4' />
                        <div className='px-8 pb-16'>
                            <a href='/simple-notion-templates' className='text-[24px] font-semibold'>Complete Bundle</a>
                            <p className='text-[16px] opacity-70 font-medium py-2 pb-8'>Get access to bundle containing all of our created premium templates.</p>
                            <a href='/premium-notion-templates' className='py-2 bg-white px-4 rounded-md text-[16px] font-semibold opacity-80'>Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default section13