import React from 'react';
import CourseCard from './Card/courseCard';
import notionFundamental from "../assets/notionfundamental.png";
import creatorcourse from "../assets/creatorcourse.png";

function sectioncourse() {
    return (
        <div className='py-28 '>
            <div className=''>
                <h1 className='m-auto justify-center flex text-center md:text-[70px] text-[36px] lg:w-8/12 md:w-8/12 w-10/12 md:leading-[70px] leading-[40px]  font-semibold '>Learn how to use Notion with actionable courses</h1>
                <p className='m-auto justify-center flex text-center py-4 text-[22px] font-medium opacity-70 lg:w-8/12 md:w-8/12 w-10/12'>Skip the learning curve with Notion Courses. Learn different ways how you can make the most of the Notion app.</p>
            </div>
            <div className='w-10/12 py-10 lg:gap-8 gap-4 m-auto  justify-center grid md:grid-cols-2 grid-cols-1'>
                <CourseCard imgsrc={notionFundamental} title="Notion Fundamentals" description="Learn the fundamentals of Notion and get started. Learn how to create and use Notion pages, blocks. As well as how to manage databases and customize workspace to fit your specific needs." link="/products/notion-fundamentals-course" btntxt="Join waitlist" />

                <CourseCard imgsrc={creatorcourse} title="Creator Course" description="Make money online selling Notion templates. Notion Creator Course is a video course covering the entire process of creating and selling Notion templates." link="/comingsoon" btntxt="Learn More $89" />

            </div>
        </div>
    )
}

export default sectioncourse