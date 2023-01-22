import { React, useState } from 'react';
import Image from "next/image";
import NotionLogo from "../../assets/notion_logo.png";
import { BsLightningCharge } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiBarChart2 } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import Sidebar from "../Sidebar/index";
import { IoMdClose } from "react-icons/io";
import Section11 from '../section11';
import Section12 from '../section12';
import Section13 from '../section13';
import Section14 from '../section14';
import Section15 from '../section15';

const NavTabs = [
    {
        tab: 'Story',
        link: '/story',
    },
    {
        tab: 'Templates',
        subMenu: [
            {
                TabLogo: 'L',
                tab: 'Premium Templates',
                tabDesc: 'Get productive and organized with premium Notion templates.',
                link: '/premium-notion-templates'
            },
            {
                TabLogo: 'S',
                tab: 'Simple Templates',
                tabDesc: 'Get started using Notion with simple Notion templates.',
                link: '/simple-notion-templates'
            },
            {
                TabLogo: 'F',
                tab: 'Free Templates',
                tabDesc: 'Get started using Notion with free Notion templates.',
                link: '/free-notion-templates'
            }
        ]
    },
    {
        tab: 'Courses',
        link: '/cources'
    },
    {
        tab: 'Resources',
        subMenu: [
            {
                TabLogo: 'B',
                tab: 'Blog',
                tabDesc: 'Learn Notion and discover new resources on our blog.',
                link: '/blog'
            },
            {
                TabLogo: 'V',
                tab: 'Video Lessons',
                tabDesc: 'Learn Notion faster and easier with video lessons.',
                link: '/notion-video-lessons'
            },
            {
                TabLogo: 'T',
                tab: 'Tools',
                tabDesc: 'Discover Notion tools to power up your workspace.',
                link: '/notion-tools'
            }
        ]

    }
]

function navbar() {


    const [open, setOpen] = useState(false);

    return (
        <div>
            {/* // desktop view */}
            <div className='md:flex md:px-8 md:py-6 md:items-center hidden border-b drop-shadow-sm'>
                {/* logo */}
                <a href='/' className=''>
                    <div className='flex'>
                        <Image src={NotionLogo} width={120} height={40} className="object-contain" />
                    </div>
                </a>
                {/* nav tabs */}
                <div className='px-16 opacity-70'>
                    <ul className='flex gap-8 text-[16px] items-center font-semibold'>
                        {NavTabs.map((items, index) => {

                            {/* if (index == 1 || index == 3) {
                                return (<a className='flex cursor-pointer items-center'>
                                    <li className='' key={index}>{items.tab}</li>
                                    <RiArrowDropDownLine className='w-7 h-7 mt-0.5' />
                                </a>
                                )
                            }
                            return (
                                <a href={items.link} className='' key={index}>{items.tab}</a>
                            ) */}
                            return (
                                <li key={index}>
                                    {
                                        items.subMenu ? (
                                            <li key={index}>
                                                <button type="button" aria-haspopup="menu">
                                                    {items.tab}{' '}
                                                </button>
                                            </li>
                                        ) : <a href={items.link}>{items.tab}</a>
                                    }
                                </li>
                            )
                        }
                        )}
                    </ul>
                </div>

                {/* login & signup button */}
                {/* <div>
                    <ul className='flex items-center gap-4'>
                        <a href='/Auth/Login' className='login'>
                            <button className='text-[15px] font-semibold'>Log In</button>
                        </a>

                        <a href='/Auth/register'>
                            <button className=' bg-black rounded-md text-[15px] text-white py-1 px-2'>Sign Up </button>
                        </a>
                    </ul>
                </div> */}
            </div>

            {/* mobile view */}
            <div className='md:hidden flex px-4 py-4 '>
                {
                    !open ? (<div onClick={() => setOpen(true)}> <FiBarChart2 className='w-8 h-8 rotate-90' /> </div>) : <div ><div className='mt-1 ' onClick={() => setOpen(false)}><IoMdClose className='w-6 h-6' /></div><div><Sidebar /> </div> </div>
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


            {!open ? (<div>
                <Section11 />
                <Section12 />
                <Section13 />
                <Section14 />
                <Section15 />
            </div>) : (<div></div>)}

        </div>
    )
}

export default navbar
