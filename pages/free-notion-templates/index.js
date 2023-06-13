import React, { useState } from 'react';
import MobileView from '../../components/Sidebar/mobileView';
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import CourseCard1 from '../../components/Card/courseCard1';
import { templatesData } from "../../utils/constant";



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
                        {
                            templatesData.map((items) => (
                                (items?.category) === "Free Notion Template" && <CourseCard1 imgsrc={items?.imgsrc} category={items?.category} title={items?.title} description={items?.description} link={items?.description} btntxt={items?.btntxt} amount={items?.amount} />
                            ))
                        }
                    </div>
                    <Footer />
                </div>) : (<div></div>)}

        </div>
    )
}

export default index
