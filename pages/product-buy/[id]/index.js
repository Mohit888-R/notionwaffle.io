import React, { useEffect, useState } from 'react';
import Header from "../../../components/Header/index";
import Footer from "../../../components/Footer/index";
import MobileView from '../../../components/Sidebar/mobileView';
import Tagline from "../../../components/tagline";
import { BiDownload,BiCart, BiPurchaseTag, BiCategory } from 'react-icons/bi';
import { BsBookmark } from 'react-icons/bs';
import CarouselProduct from "../../../components/carouselProduct";
import { useRouter } from 'next/router';
import {templatesData} from "../../../utils/constant";
import {checkoutpayment} from '../../../components/paymentwindow';
import { product } from '../../../api-call';

function index() { 
    const router = useRouter();
    
    const [open, setOpen] = useState(false);
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [about, setAbout] = useState('');
    const [media, setMedia] = useState([]);

    

    const titlehead = router?.query?.title;
    useEffect(()=>{
        product().then((response) => {
            response?.data?.data.map((items,key)=>{
                if(items.templateName === router?.query?.title){
                    setAmount(items?.price)
                    setDescription(items.description);
                    setCategory(items.categoryName);
                    setAbout(items.aboutTemplate);
                    setMedia(items.videoLink)
                }
            })
        })
    },[router?.query])

    console.log("price",category)


    return (
        <div>
            <Header />
            <MobileView open={open} setopen={setOpen} />
            {!open ? (
                <div>

                    <div className='py-8'>
                        <h1 className='text-center text-[40px] font-bold pb-8'>{titlehead}</h1>
                        <div className='space-y-4'>
                            <Tagline tagtitle="Category" tagdesc={category} />
                            <Tagline tagtitle="Template" tagdesc={titlehead} />
                            <Tagline tagtitle="Description" tagdesc={description}/>
                            <Tagline tagtitle="Price" tagdesc={"$"+amount} />
                            <div className='flex flex-row gap-4 md:ml-80 ml-10 mt-10'>
                                <button className='border  px-2 py-1 active:scale-110 flex gap-2 text-white bg-[#1976D2]' ><BiCart className="w-6 h-6"/> Add to Cart</button>
                                <button onClick={()=>checkoutpayment(amount)} className='border  px-2 py-1 active:scale-110 flex text-white bg-[#FF9800]' ><BiPurchaseTag className='w-6 h-6 mr-2'/> Buy Now</button>
                                <div className='flex gap-4'>
                                    <button className='border border-black px-2 py-1 flex gap-2 active:scale-110' >
                                    <BsBookmark className='w-5 h-5 '/>
                                    </button>
                                    {/* <button className='border gap-2 border-black px-2 py-1 active:scale-110 flex' ><BiDownload className='w-6 h-6'/> 25</button> */}
                                </div>
                            </div>
                        </div>
<div className='md:ml-80 '>
<CarouselProduct media={media}/>
    </div>
                        <div className='flex gap-4'>
                            <div className='w-7/12 ml-80 mt-4'>
                                <h2 className='text-[25px]'>About Template</h2>
                                <p>
                                    {about} </p>
                            </div>
                            
                        </div>
                    </div>

                    <Footer />
                </div>
            ) : (<div></div>)

            }
        </div>
    )
}




export default index