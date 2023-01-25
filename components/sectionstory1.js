import Image from 'next/image'
import React from 'react';
import NotionChar from "../assets/notioncharacter.png"

function sectionstory1() {
    return (
        <div className='py-20'>
            <h1 className='lg:text-[72px] md:text-[60px] text-[40px] md:leading-[80px] leading-10 text-center font-semibold lg:w-8/12 md:w-10/12 m-10/12 flex  m-auto'>The short story of how Notionway was created</h1>
            <p className='py-10 text-[20px] opacity-70 text-center font-semibold lg:w-8/12 md:w-10/12 m-10/12 flex  m-auto'>From a small obsession with a favorite tool called - Notion. Into a rapidly growing Notion community of over 40,000 people and small businesses built around it.</p>
            <div className='bg-gray-100 drop-shadow py-10 lg:w-8/12 w-10/12 rounded-md m-auto '>
                <div className='flex m-auto'>
                    <Image src={NotionChar} width={50} height={50} className="flex m-auto rounded-full border-2 border-white" />
                </div>
                <div className='text-center'>
                    <h1 className='py-8 text-[20px] md:px-0 px-4 font-semibold'>Hey, I'm Mohit from Notionwaffle</h1>
                    <div className='md:px-10 px-6 md:text-[20px] text-[16px] opacity-80 space-y-8'>
                        <p>My journey with Notion started more than 2 years ago. I was working on my UX design studio and tried Notion to organize my projects and tasks. And I loved it.</p>
                        <p>The simplicity and flexibility of Notion, the beautiful minimalistic design. All of it. Notion soon became one of my favorite tools to use for my business and personal needs.</p>
                        <p>I created a systems for myself and shared it with others. The feedback I received was more than encouraging. That's when I decided to continue exploring Notion possibilities. I started creating more Notion templates and then the Notionway was born.</p>
                        <p>Since then, I've helped over 40,000 people get more organized and productive with Notion. I'm a Notion certified expert and future ambassador. When designing new products, I focus on two major things - product design and usability. All the time, my main goal is to create systems that are both beautiful and easy to use.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default sectionstory1