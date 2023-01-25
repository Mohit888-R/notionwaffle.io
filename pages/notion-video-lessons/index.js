import React, { useState } from 'react';
import MobileView from '../../components/Sidebar/mobileView';
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import LifePWidget from "../../assets/life_progress_widget.jpg";
import BestWidget from "../../assets/best_places_widgets.jpg";
import RecurringTask from "../../assets/recurring_tasks.jpg"
import LessionCard from '../../components/Card/lessionCard';

function index() {
    const [open, setOpen] = useState(false);
    const data = [
        {
            bannerImg: LifePWidget,
            title: "Notion Life progress widget",
            description: "Do you know how much time you already lived? Learn how to add Life Progress Bar to Notion.",
            InstaLink: "",
            YtubeLink: ""
        },
        {
            bannerImg: RecurringTask,
            title: "Recurring tasks in Notion",
            description: "Learn how to create recurring tasks in Notion. As a result, you will never need to create the same tasks again.",
            InstaLink: "",
            YtubeLink: ""
        },
        {
            bannerImg: BestWidget,
            title: "5 Best places for Notion Widgets",
            description: "Finding good Notion widgets is difficult. So we compiled a list of the top 5 places to find your favorite widgets.",
            InstaLink: "",
            YtubeLink: ""
        }

    ]
    return (
        <div>
            <Header />
            <MobileView open={open} setopen={setOpen} />
            {!open ? (
                <div>
                    <div className='py-20'>
                        <h1 className='lg:text-[60px] md:text-[48px] text-[40px] lg:leading-[80px] leading-10 text-center font-semibold lg:w-8/12 m-10/12 flex  m-auto'>Learn Notion and discover new resources on our blog</h1>
                        <p className='py-10 text-[20px] opacity-70 text-center font-semibold lg:w-8/12 md:w-10/12 m-10/12 flex  m-auto'>Learn Notion from our Notionway blog. Discover Notion tools, widgets, resources, templates and more. New Notion blog post published every week.</p>
                    </div>
                    <div className='w-11/12 m-auto justify-center'>
                        <div className='gap-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                            {
                                data.map((items, index) => (
                                    <li key={index} className="list-none">
                                        <LessionCard bannerImg={items.bannerImg} title={items.title} description={items.description} Instalink={items.InstaLink} YtubeLink={items.YtubeLink} />
                                    </li>
                                ))
                            }
                        </div>
                    </div>
                    <Footer />
                </div>) : (<div></div>)}

        </div>
    )
}

export default index
