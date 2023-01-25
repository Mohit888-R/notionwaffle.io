import React, { useState } from 'react';
import MobileView from '../../components/Sidebar/mobileView';
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import CourseCard from '../../components/Card/courseCard';
import Img1 from "../../assets/premiumNotionTemplate/img1.png"
import Img2 from "../../assets/premiumNotionTemplate/img2.png"
import Img3 from "../../assets/premiumNotionTemplate/img3.png"
import Img4 from "../../assets/premiumNotionTemplate/img4.png"
import Img5 from "../../assets/premiumNotionTemplate/img5.png"
import Img6 from "../../assets/premiumNotionTemplate/img6.png"
import Img7 from "../../assets/premiumNotionTemplate/img7.png"
import Img8 from "../../assets/premiumNotionTemplate/img8.png"

function index() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Header />
            <MobileView open={open} setopen={setOpen} />
            {!open ? (
                <div>
                    <div className='py-20'>
                        <h1 className='lg:text-[72px] md:text-[60px] text-[40px] md:leading-[80px] leading-10 text-center font-semibold lg:w-8/12 md:w-10/12 m-10/12 flex  m-auto'>Premium Notion templates to make you 2x productive</h1>
                        <p className='py-10 text-[20px] opacity-70 text-center font-semibold lg:w-8/12 md:w-10/12 m-10/12 flex  m-auto'>Become 2x productive and organized with premium Notion templates. Premium templates are multi-page systems that can help you achieve a specific goal.</p>
                    </div>
                    <div className='m-auto justify-center grid md:grid-cols-2 grid-cols-1 w-10/12 lg:gap-10 gap-4 py-28'>
                        <CourseCard imgsrc={Img1} title="Complete Bundle" description="Get access to an exclusive, complete bundle containing all of the Notion premium templates that we've created. Perfectly balanced for business needs and everyday personal use." link="/comingsoon" btntxt="Learn more $261" />
                        <CourseCard imgsrc={Img2} title="Ultimate Life Planner" description="Plan and achieve your goals effortlessly with Notion Ultimate Life Planner. It will help you turn your goals into reality with a systemized & structured approach to planning and achieving your goals." link="/comingsoon" btntxt="Learn more $41" />
                        <CourseCard imgsrc={Img3} title="Ultimate Productivity System" description="Become twice productive and get things done with Notion Ultimate Productivity System. It will help you complete more tasks, projects, and goals while staying in complete control of your productivity." link="/comingsoon" btntxt="Learn more $49" />
                        <CourseCard imgsrc={Img4} title="Ultimate Finance Tracker" description="The Notion Ultimate Finance Tracker is a template pack, a system that has everything you need to successfully track and manage your entire finances from one place." link="/comingsoon" btntxt="Learn more $29" />

                        <CourseCard imgsrc={Img5} title="Small Business Kit" description="The easiest way to start and manage your small business. In this Notion Small Business Kit you will find everything you need to know and have as a successful small business owner." link="/comingsoon" btntxt="Learn more $59" />
                        <CourseCard imgsrc={Img6} title="E-Commerce Kit" description="The Notion E-commerce Business KIT is an easy-to-use package that has everything you need to run a successful e-commerce business from one place." link="/comingsoon" btntxt="Learn more $59" />

                        <CourseCard imgsrc={Img7} title="Freelancer Kit" description="The Notion Freelancer Pack is a template pack, a system that has everything you need to successfully start, run and manage your entire freelance business from one place." link="/comingsoon" btntxt="Learn more $59" />

                        <CourseCard imgsrc={Img8} title="Social Media Kit" description="The easiest way to plan and grow your social media channels. Inside this Notion Social Media Kit, you will find everything you need to grow your social media accounts." link="/comingsoon" btntxt="Learn more $59" />
                    </div>
                    <Footer />
                </div>) : (<div></div>)}

        </div>
    )
}

export default index
