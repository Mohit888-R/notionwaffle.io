import React, { useEffect, useState } from 'react';
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
import {templatesData} from "../../utils/constant";
import { useRouter } from 'next/router';
import { data } from 'autoprefixer';

function index() {
    const router = useRouter();
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
{
    templatesData.map((items)=>(
        (items?.category) === "Premium Notion Templates" && <CourseCard imgsrc={items?.imgsrc} category={items?.category} title={items?.title} description={items?.description} link={items?.description} btntxt={items?.btntxt} amount={items?.amount}/>
        
    ))
}
                        </div>
                    <Footer />
                </div>) : (<div></div>)}

        </div>
    )
}

export default index
