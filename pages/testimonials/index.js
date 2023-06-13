import React, { useEffect, useState } from 'react';
import MobileView from '../../components/Sidebar/mobileView';
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import Avatar1 from "../../assets/avatar1.png";
import TestimonialCard from '../../components/Card/testimonialCard';
import { useRouter } from 'next/router';
import { getalltestimonials } from "../../api-call/index";


function index() {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);
    const [length,setlength] = useState(0);
    // const [date,setDate] = useState();
    const [sortOption, setSortOption] = useState("Sort");

    const router = useRouter();
    const handleclick = () => {
        router.push('/testimonials/write');
    }

    useEffect(() => {
        getalltestimonials().then((response) => {
            // console.log("data : ",response?.data?.data[0].length)
            setlength(response?.data?.data[0].length);
            setData(response?.data?.data[0]);
            setCount(response?.data?.data[1]?.Totalcounts);
        });
    }, []);


    const sortedData = [...data].sort((a, b) => {
        if (sortOption === 'Recent') {
            return new Date(b.time) - new Date(a.time);
        } else if (sortOption === 'Highest') {
            return b.rating - a.rating;
        } else if (sortOption === 'Lowest') {
            return a.rating - b.rating;
        } else {
            return 0;
        }
    });


    return (
        <div>
            <Header />
            <MobileView open={open} setopen={setOpen} />

            {!open ? (
                <div>
                    <div className='py-20'>
                        <h1 className='lg:text-[72px] md:text-[60px] text-[40px] md:leading-[80px] leading-10 text-center font-semibold lg:w-8/12 md:w-10/12 m-10/12 flex  m-auto'>Community of +10,000 productivity seekers</h1>
                        <p className='py-10 text-[20px] opacity-70 text-center font-semibold lg:w-8/12 md:w-10/12 m-10/12 flex  m-auto'>Changing people's lives through the use of a tool that we all love - Notion. If you believe we have changed your life, please leave a testimonial.</p>
                        <button className='bg-black text-white px-6 py-3 drop-shadow-sm text-[20px] rounded-md m-auto justify-center flex' onClick={handleclick}>Leave a testimonial</button>
                    </div>
                    <div className='flex justify-end pb-4'>
                        <select placeholder='Sort' value={sortOption} onChange={(e) => setSortOption(e.target.value)} className='border border-black rounded-md px-2 py-1 mt-20 text-left text-[xl]  font-semibold w-40 mr-10'>
                            <option>Sort</option>
                            <option value="Recent">Recent</option>
                            <option value="Highest">Highest Rating</option>
                            <option value="Lowest">Lowest Rating</option>
                        </select>
                    </div>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-8 pb-4'>

                        {sortedData.slice(0, page * 8).map((items, index) => (
                            <li key={index} className="list-none">
                                <TestimonialCard imgsrc={Avatar1} rating={items.rating} userName={items.username} userComment={items.description} date={items.time} />
                            </li>
                        ))}

                        {/* {datas.map((items, index) => (
                            <li key={index} className="list-none">
                                <TestimonialCard imgsrc={items.UserImg} userName={items.UserName} userComment={items.UserComment} month={items.month} date={items.date} year={items.year} />
                            </li>
                        ))} */}
                    </div>
                    {
                        (length > 0) && (page < (length / 8)) &&  (
                            <div className='text-center mt-2 pb-20' onClick={() => setPage(page + 1)}>
                                <button className='border border-black bg-gray-100 px-4 py-2 text-[15px] rounded-lg'>Load More</button>
                            </div>
                        )
                    }
                    <Footer />
                </div>) : (<div></div>)}

        </div>
    )
}

export default index
