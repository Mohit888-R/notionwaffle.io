import Image from 'next/image';
import React from 'react';
import Avatar1 from "../assets/avatar1.png";
import TestimonialCard from './Card/testimonialCard';
import { AiFillStar } from "react-icons/ai";



function section14() {
    const data = [{
        UserImg: Avatar1,
        UserName: 'Julie Juz',
        UserComment: 'Very useful Notion templates that inspired me to create my own following my needs. Thank you to give that to the world.',
        month: 'oct',
        date: '14',
        year: '2022',
    },
    {
        UserImg: Avatar1,
        UserName: 'Ángela Sánchez',
        UserComment: 'I started Notion recently, and I have to say that Notionway has helped me start creating my Second Brain, with inspiration and templates. Thank you!',
        month: 'oct',
        date: '12',
        year: '2022',
    },
    {
        UserImg: Avatar1,
        UserName: 'Mari Ullom',
        UserComment: 'Notionway is an amazing place to find extremely useful and time saving Notion templates. They have definitely saved me tons of time. Highly recommend.',
        month: 'oct',
        date: '12',
        year: '2022',
    },
    {
        UserImg: Avatar1,
        UserName: 'Sila Hassan',
        UserComment: 'These templates have proved to be so helpful for my business as well as personal growth. 100% recommended.',
        month: 'oct',
        date: '12',
        year: '2022',
    },
    {
        UserImg: Avatar1,
        UserName: 'Sandi Eveleth',
        UserComment: 'I have purchased many products from Notionway and LOVE them ALL! I recommend them to my clients all the time. The customer service and personal attention is also top-notch so... There\'s just no excuse NOT to buy!',
        month: 'oct',
        date: '8',
        year: '2022',
    },
    {
        UserImg: Avatar1,
        UserName: 'Andres',
        UserComment: 'Notionway has been quite helpful to me in managing my agency, managing my time, and managing my life. Modest\'s templates saved me hours and I would recommend everyone to have a look at what he has to offer. You won\'t be disappointed.',
        month: 'oct',
        date: '4',
        year: '2022',
    },
    {
        UserImg: Avatar1,
        UserName: 'Anurag',
        UserComment: 'I’ve used multiple templates and yours have helped out a lot with my finances in many ways, i’ve been better disciplined and know where every penny goes. Thank you !',
        month: 'oct',
        date: '4',
        year: '2022',
    },
    {
        UserImg: Avatar1,
        UserName: 'Manthan Ank',
        UserComment: 'There are several notion templates in Notionway, each with a clean and user-friendly appearance',
        month: 'oct',
        date: '1',
        year: '2022',
    },
    {
        UserImg: Avatar1,
        UserName: 'Martín Peralta',
        UserComment: 'There are several notion templates in Notionway, each with a clean and user-friendly appearance',
        month: 'sep',
        date: '30',
        year: '2022',
    },
    {
        UserImg: Avatar1,
        UserName: 'Ana Conti',
        UserComment: 'Incredible templates! Amazing for those wanting to streamline their business processes. 10/10',
        month: 'sep',
        date: '30',
        year: '2022',
    },
    {
        UserImg: Avatar1,
        UserName: 'Angel Viera',
        UserComment: 'Awesome product!',
        month: 'sep',
        date: '29',
        year: '2022',
    },
    {
        UserImg: Avatar1,
        UserName: 'laure lozano',
        UserComment: 'amazing template! I really appreciate your work. Keep it up!',
        month: 'sep',
        date: '29',
        year: '2022',
    },
    {
        UserImg: Avatar1,
        UserName: 'Ruairi Fitzsimmons',
        UserComment: 'I love templates from Notionway! The level of detail they put into their work is fantastic. I can trust that they are well thought out and will just work without long setup processes or crazy workarounds. Whenever I need a new template, Notionway is always my first stop!',
        month: 'sep',
        date: '29',
        year: '2022',
    },
    {
        UserImg: Avatar1,
        UserName: 'Jinson',
        UserComment: 'Notionway has helped me find easy and ready-to-go solutions for my team\'s workpace! It\'s a lifesaver.',
        month: 'sep',
        date: '28',
        year: '2022',
    },
    {
        UserImg: Avatar1,
        UserName: 'Henrique Marino',
        UserComment: 'It is from Twitter I came to know about you and your work. The templates have been very helpful. I was searching for templates everywhere initially, and now I have a one stop solution. And it is your website. Great work buddy. Wish you all the best.',
        month: 'sep',
        date: '28',
        year: '2022',
    },
    ]

    return (
        <div className='flex m-auto justify-center py-16 px-16'>
            <div>
                <div className='pb-16 text-center'>
                    <h2 className='text-[40px] py-2 font-semibold'>Community of +40,000 productivity seekers</h2>
                    <p className='text-[20px] opacity-70'>Changing people's lives with a tool that we all adore - Notion.</p>
                </div>

                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                    {data.map((items, index) => (
                        <li key={index} className="list-none">
                            <TestimonialCard imgsrc={items.UserImg} userName={items.UserName} userComment={items.UserComment} month={items.month} date={items.date} year={items.year} />
                        </li>
                    ))}
                </div>
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
                                <p className='text-[14px] opacity-90'>from 477 reviews</p>
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