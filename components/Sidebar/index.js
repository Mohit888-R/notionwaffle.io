import { React, Fragment, useState } from 'react';
import { Dialog, Transition } from "@headlessui/react";
// import Navbar from "../Header/index";
import { RiArrowDropDownLine } from 'react-icons/ri';

const SideTabs = [
    {
        tab: 'Story',
        link: '/story'
    },
    {
        tab: 'Templates',
    },
    {
        tab: 'Courses',
        link: '/cources'
    },
    {
        tab: 'Resources',
        link: '/resources'
    }
]

function sidebar() {

    const [isShowing, setIsShowing] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <div className='transition ease-in-out'>
            <div className='absolute top-[30%] left-[10%]  w-full '>
                <div className='text-xl text-left'>
                    <ul className='gap-4 space-y-8'>
                        {SideTabs.map((items, index) => {
                            if (index == 1 || index == 3) {
                                return (
                                    <a className='w-10/12 flex cursor-pointer pb-6' key={index}>
                                        <li className='flex-1'>{items.tab}</li>
                                        <RiArrowDropDownLine className='w-8 h-8 mt-0.5' />
                                    </a>
                                )
                            }
                            return (
                                <a href={items.link} className='' key={index}><li>{items.tab}</li> </a>
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
