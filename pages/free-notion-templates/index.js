import React, { useState } from 'react';
import MobileView from '../../components/Sidebar/mobileView';
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import CourseCard1 from '../../components/Card/courseCard1';
import Img1 from "../../assets/simpleNotionTemplate/img1.jpg";
import Img2 from "../../assets/simpleNotionTemplate/img2.jpg";
import Img3 from "../../assets/simpleNotionTemplate/img3.jpg";
import Img4 from "../../assets/simpleNotionTemplate/img4.jpg";
import Img5 from "../../assets/simpleNotionTemplate/img5.jpg";
import Img6 from "../../assets/simpleNotionTemplate/img6.jpg";
import Img7 from "../../assets/simpleNotionTemplate/img7.jpg";
import Img8 from "../../assets/simpleNotionTemplate/img8.jpg";
import Img9 from "../../assets/simpleNotionTemplate/img9.jpg";
import Img10 from "../../assets/simpleNotionTemplate/img10.jpg";
import Img11 from "../../assets/simpleNotionTemplate/img11.jpg";
import Img12 from "../../assets/simpleNotionTemplate/img12.jpg";
import Img13 from "../../assets/simpleNotionTemplate/img13.jpg";
import Img14 from "../../assets/simpleNotionTemplate/img14.jpg";
import Img15 from "../../assets/simpleNotionTemplate/img15.jpg";
import Img16 from "../../assets/simpleNotionTemplate/img16.jpg";
import Img17 from "../../assets/simpleNotionTemplate/img17.jpg";
import Img18 from "../../assets/simpleNotionTemplate/img18.jpg";
import Img19 from "../../assets/simpleNotionTemplate/img19.jpg";
import Img20 from "../../assets/simpleNotionTemplate/img20.jpg";


function index() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Header />
            <MobileView open={open} setopen={setOpen} />
            {!open ? (
                <div>
                    <div className='py-20'>
                        <h1 className='lg:text-[72px] md:text-[60px] text-[40px] md:leading-[80px] leading-10 text-center font-semibold lg:w-8/12 md:w-10/12 m-10/12 flex  m-auto'>Free Notion templates to get you started with Notion.</h1>
                        <p className='py-10 text-[20px] opacity-70 text-center font-semibold lg:w-8/12 md:w-10/12 m-10/12 flex  m-auto'>Discover our free Notion templates to get started with Notion. From simple habit trackers to simple project management systems, we have you covered.</p>
                    </div>
                    <div className='m-auto justify-center grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-10/12 lg:gap-10 gap-4 py-10'>

                        <CourseCard1 imgsrc={Img4} title="Notion Idea Manager" description="Manage and organize your ideas for future possibilities." link="/comingsoon" btntxt="Get it now $0" />

                        <CourseCard1 imgsrc={Img5} title="Notion Task Manager" description="Become more organized and productive in your daily life." link="/comingsoon" btntxt="Get it now $0" />

                        <CourseCard1 imgsrc={Img6} title="Notion Planners" description="Get more things done by managing your daily tasks and notes." link="/comingsoon" btntxt="Get it now $0" />

                        <CourseCard1 imgsrc={Img7} title="Notion CRM" description="Customer relationship management system in your favorite tool." link="/comingsoon" btntxt="Get it now $0" />

                        <CourseCard1 imgsrc={Img8} title="Notion Content System" description="Create more engaging and converting content by having the right system." link="/comingsoon" btntxt="Get it now $0" />

                        <CourseCard1 imgsrc={Img9} title="Notion Habit Tracker" description="Gain new habits by taking the 30-day challenge." link="/comingsoon" btntxt="Get it now $0" />

                        <CourseCard1 imgsrc={Img10} title="Notion Bookmark Manager" description="Simple yet effective system that allows you to manage your bookmarks." link="/comingsoon" btntxt="Get it now $0" />

                        <CourseCard1 imgsrc={Img11} title="Notion Social Media Planner" description="Simple social media planner to manage all your social media content." link="/comingsoon" btntxt="Get it now $0" />

                        <CourseCard1 imgsrc={Img12} title="Notion Subscription Tracker" description="With this Notion template, you'll be able to track and review your subscriptions." link="/comingsoon" btntxt="Get it now $0" />


                        <CourseCard1 imgsrc={Img13} title="Notion Mood Tracker" description="Get clarity on what makes you happy or sad. Improve your mental well-being." link="/comingsoon" btntxt="Get it now $0" />

                        <CourseCard1 imgsrc={Img14} title="Notion Travel Manager" description="GKeep track of all your travels and plan even better new ones." link="/comingsoon" btntxt="Get it now $0" />
                    </div>
                    <Footer />
                </div>) : (<div></div>)}

        </div>
    )
}

export default index
