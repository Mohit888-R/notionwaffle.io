import { React, Fragment, useState } from 'react';
import { Dialog, Transition } from "@headlessui/react";
// import Navbar from "../Header/index";
import { RiArrowDropDownLine } from 'react-icons/ri';

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
        link: '/courses'
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

function sidebar() {

    const [isShowing, setIsShowing] = useState(false);
    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [Index, setIndex] = useState(0);

    return (
        <div className='transition ease-in-out'>
            <div className='absolute top-[30%]  w-full '>
                <div className='px-16 opacity-70'>
                    <ul className='space-y-8 text-[20px] items-center font-semibold' onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
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
                                <li key={index} className="hover:bg-slate-100 py-2 px-4 rounded-md" onMouseEnter={() => { setDropdown(true); setIndex(index) }} onMouseLeave={() => { setDropdown(false); }}>
                                    {
                                        items.subMenu ? (
                                            <li key={index} className="">
                                                <div type="button" aria-haspopup="menu">
                                                    {items.tab}{' '}
                                                </div>
                                                <div>
                                                    {dropdown && (Index == index) ?
                                                        (
                                                            <div className='border w-6/12 p-2\ mt-2 rounded-md absolute top-13 gap-4 bg-slate-50'>
                                                                {
                                                                    items.subMenu.map((item, index) => (
                                                                        <li key={index}>
                                                                            <a href={item.link}> {item.tab} </a>
                                                                        </li>
                                                                    ))
                                                                }
                                                            </div>
                                                        ) :
                                                        (
                                                            <div></div>
                                                        )}
                                                </div>

                                            </li>
                                        ) : <a href={items.link}>{items.tab}</a>
                                    }
                                </li>
                            )
                        }
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default sidebar
