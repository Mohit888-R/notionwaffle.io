import { React, useState } from 'react';
import Image from "next/image";
import NotionLogo from "../../assets/notionlogo.png";
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
import MobileView from '../Sidebar/mobileView';
import sparcle from "../../assets/sparcle.svg";
import star from "../../assets/star.svg";
import blog from "../../assets/blog.svg";
import play from "../../assets/play.svg";
import setting from "../../assets/setting.svg";

const NavTabs = [
    {
        tab: 'Story',
        link: '/story',
    },
    {
        tab: 'Templates',
        subMenu: [
            {
                TabLogo: sparcle,
                tab: 'Premium Templates',
                tabDesc: 'Get productive and organized with premium Notion templates.',
                link: '/premium-notion-templates'
            },
            {
                TabLogo: star,
                tab: 'Simple Templates',
                tabDesc: 'Get started using Notion with simple Notion templates.',
                link: '/simple-notion-templates'
            },
            {
                TabLogo: star,
                tab: 'Free Templates',
                tabDesc: 'Get started using Notion with free Notion templates.',
                link: '/free-notion-templates'
            }
        ]
    },
    {
        tab: 'Courses',
        link: '/courses'
    },
    {
        tab: 'Resources',
        subMenu: [
            {
                TabLogo: blog,
                tab: 'Blog',
                tabDesc: 'Learn Notion and discover new resources on our blog.',
                link: '/blog'
            },
            {
                TabLogo: play,
                tab: 'Video Lessons',
                tabDesc: 'Learn Notion faster and easier with video lessons.',
                link: '/notion-video-lessons'
            },
            {
                TabLogo: setting,
                tab: 'Tools',
                tabDesc: 'Discover Notion tools to power up your workspace.',
                link: '/notion-tools'
            }
        ]

    }
]

function navbar({ setopen }) {

    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [Index, setIndex] = useState(0);

    return (
        <div>
            {/* // desktop view */}
            <div className='md:flex md:px-8 md:py-6 md:items-center hidden border-b drop-shadow-sm'>
                {/* logo */}
                <a href='/' className=''>
                    <div className='flex'>
                        <Image src={NotionLogo} width={120} height={"auto"} className="object-contain" />
                    </div>
                </a>
                {/* nav tabs */}
                <div className='px-16 opacity-70'>
                    <div className='flex gap-8 text-[16px] items-center font-semibold' onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
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
                                <div key={index}>
                                    {
                                        items.subMenu ? (
                                            <div key={index} className="" onMouseEnter={() => { setDropdown(true); setIndex(index) }} onMouseLeave={() => { setDropdown(false); }}>
                                                <button type="button" aria-haspopup="menu">
                                                    {items.tab}{' '}
                                                </button>
                                                {dropdown && (Index == index) ?
                                                    (
                                                        <div className='border p-2 rounded-md absolute top-13 gap-4 bg-slate-200 w-[400px] '>
                                                            {
                                                                items.subMenu.map((item, index) => (
                                                                    <div key={index} className="hover:bg-white rounded-md drop-shadow-md my-2 border px-4 py-2">
                                                                        <div className='flex space-x-2'>
                                                                            <Image src={item.TabLogo} width={20} height={20} className="" />
                                                                            <a href={item.link} className="text-[18px] font-semibold"> {item.tab} </a>
                                                                        </div>
                                                                        <div className='text-[16px] font-normal'>
                                                                            {item.tabDesc}
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    ) :
                                                    (
                                                        <div></div>
                                                    )}

                                            </div>
                                        ) : <a href={items.link}>{items.tab}</a>
                                    }
                                </div>
                            )
                        }
                        )}
                    </div>
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


        </div>
    )
}

export default navbar
