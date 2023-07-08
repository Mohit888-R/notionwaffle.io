import React, { useEffect, useState } from 'react';
import MobileView from '../../components/Sidebar/mobileView';
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import {templatesData} from "../../utils/constant";
import CourseCard1 from "../../components/Card/courseCard1";
import { useRouter } from 'next/router';
import { product } from '../../api-call';


function index() {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);


    useEffect(() => {
        product().then((response) => {
            setData(response?.data?.data)
        })
    }, [router])
    console.log(data);


    return (
        <div>
            <Header />
            <MobileView open={open} setopen={setOpen} />
            {!open ? (
                <div>
                    <div className='py-20'>
                        <h1 className='lg:text-[72px] md:text-[60px] text-[40px] md:leading-[80px] leading-10 text-center font-semibold lg:w-8/12 md:w-10/12 m-10/12 flex  m-auto'>Simple Notion templates to get you started with Notion</h1>
                        <p className='py-10 text-[20px] opacity-70 text-center font-semibold lg:w-8/12 md:w-10/12 m-10/12 flex  m-auto'>Get started and familiar using Notion with simple Notion templates. From simple habit trackers to simple project management systems, we have you covered.</p>
                    </div>
                    <div className='m-auto justify-center grid md:grid-cols-2 grid-cols-1 w-10/12 lg:gap-10 gap-4 py-28'>
                    {
                            data.map((items, index) => (
                                (items?.categoryName) === 'Simple Notion Template' && <CourseCard1 key={index} imgsrc={items?.imgUrl[0]}  category={items?.categoryName} title={items?.templateName} description={items?.description} link={items?.templateName} btntxt={items?.price} amount={items?.price} />
                            ))
                        }
                    </div>
                    <Footer />
                </div>) : (<div></div>)}

        </div>
    )
}

export default index
