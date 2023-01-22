import React from 'react';
import LessionCard from './Card/lessionCard';
import LifePWidget from "../assets/life_progress_widget.jpg";
import BestWidget from "../assets/best_places_widgets.jpg";
import RecurringTask from "../assets/recurring_tasks.jpg";
import Footer from "./Footer/index";

function section15() {
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
        <>
            <div className='flex m-auto justify-center py-16 px-8'>
                <div>
                    <div className='pb-16 text-center'>
                        <h2 className='text-[40px] py-2 font-semibold'>Most recent Notion video lessons</h2>
                        <p className='text-[20px] opacity-70'>Learn how to use Notion with easy-to-follow video lessons.</p>
                    </div>
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

            </div>
            <Footer />
        </>
    )
}

export default section15