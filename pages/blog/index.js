import React, { useState } from 'react';
import MobileView from '../../components/Sidebar/mobileView';
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import BlogCard from '../../components/Card/blogCard';

const BlogData = [
    {
        title: "4 Best Notion Small Business Templates to Grow Your Business",
        description: "Notion Small Business templates offers many features to help you manage your business e.g. CRM, invoicing, and social media management!",
        link: '/comingsoon',
        date: "January 1,2023"
    }, {
        title: "4 Best Notion Small Business Templates to Grow Your Business",
        description: "Notion Small Business templates offers many features to help you manage your business e.g. CRM, invoicing, and social media management!",
        link: '/comingsoon',
        date: "January 1,2023"
    }, {
        title: "4 Best Notion Small Business Templates to Grow Your Business",
        description: "Notion Small Business templates offers many features to help you manage your business e.g. CRM, invoicing, and social media management!",
        link: '/comingsoon',
        date: "January 1,2023"
    }, {
        title: "4 Best Notion Small Business Templates to Grow Your Business",
        description: "Notion Small Business templates offers many features to help you manage your business e.g. CRM, invoicing, and social media management!",
        link: '/comingsoon',
        date: "January 1,2023"
    }, {
        title: "4 Best Notion Small Business Templates to Grow Your Business",
        description: "Notion Small Business templates offers many features to help you manage your business e.g. CRM, invoicing, and social media management!",
        link: '/comingsoon',
        date: "December 30,2022"
    }, {
        title: "4 Best Notion Small Business Templates to Grow Your Business",
        description: "Notion Small Business templates offers many features to help you manage your business e.g. CRM, invoicing, and social media management!",
        link: '/comingsoon',
        date: "December 28,2022"
    }, {
        title: "4 Best Notion Small Business Templates to Grow Your Business",
        description: "Notion Small Business templates offers many features to help you manage your business e.g. CRM, invoicing, and social media management!",
        link: '/comingsoon',
        date: "December 22,2022"
    },
]

function index() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Header />
            <MobileView open={open} setopen={setOpen} />
            {!open ? (
                <div>
                    <div className='py-20'>
                        <h1 className='lg:text-[72px] md:text-[60px] text-[40px] md:leading-[80px] leading-10 text-center font-semibold lg:w-8/12 md:w-10/12 m-10/12 flex  m-auto'>Learn Notion and discover new resources on our blog</h1>
                        <p className='py-10 text-[20px] opacity-70 text-center font-semibold lg:w-8/12 md:w-10/12 m-10/12 flex  m-auto'>Learn Notion from our Notionway blog. Discover Notion tools, widgets, resources, templates and more. New Notion blog post published every week.</p>
                    </div>
                    <div className='m-auto justify-center grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 lg:w-6/12 md:w-10/12 w-10/12 gap-4'>
                        {BlogData.map((items, index) => (
                            <BlogCard title={items.title} description={items.description} link={items.link} date={items.date} />
                        ))}

                    </div>
                    <Footer />
                </div>) : (<div></div>)}

        </div>
    )
}

export default index
