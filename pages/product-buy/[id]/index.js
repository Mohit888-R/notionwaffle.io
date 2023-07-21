import React, { useEffect, useState } from 'react';
import Header from "../../../components/Header/index";
import Footer from "../../../components/Footer/index";
import MobileView from '../../../components/Sidebar/mobileView';
import Tagline from "../../../components/tagline";
import { BiDownload,BiCart, BiPurchaseTag, BiCategory } from 'react-icons/bi';
import {BsBookmarkFill} from "react-icons/bs";
import { BsBookmark } from 'react-icons/bs';
import CarouselProduct from "../../../components/carouselProduct";
import { useRouter } from 'next/router';
import {checkoutpayment} from '../../../components/paymentwindow';
import { getSavedProduct, product, productSave } from '../../../api-call';
import Cookies from 'js-cookie';

function index() { 
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [about, setAbout] = useState('');
    const [media, setMedia] = useState([]);
    const [productId, setProductId] = useState('');
    const [ImgUrl, setImgUrl] = useState('');
    const [templateName, setTemplateName] = useState('');
    const [saved, setSaved] = useState(false);


    const titlehead = router?.query?.title;
    useEffect(()=>{
        product().then((response) => {
            response?.data?.data.map((items,key)=>{
                if(items.templateName === router?.query?.title){
                    setTemplateName(items?.templateName)
                    setImgUrl(items?.imgUrl[0])
                    setAmount(items?.price)
                    setDescription(items.description);
                    setCategory(items.categoryName);
                    setAbout(items.aboutTemplate);
                    setMedia(items.videoLink)
                    setProductId(items?.productId)
                }
            })
        })
    },[router?.query])

    useEffect(()=>{
        const dataset = Cookies.get('savinglist')
        if(Cookies.get('savinglist') === undefined || Cookies.get('savinglist') === null || Cookies.get('savinglist') === ""){
           setSaved(false);
        }else{
            JSON.parse(dataset).forEach(element => {
                console.log(element?.productId, productId)
                if(element?.productId == productId){
                    setSaved(true);
                }else{
                    setSaved(false);
                }
            });
        }
    },[productId])

    useEffect(()=>{
        getSavedProduct(Cookies.get('userId')).then((response) => {
            Cookies.set('savinglist',JSON.stringify(response?.data?.dataObject?.savingList))
        })
    },[])
    
    const handleSave = ()=>{
        if(Cookies.get('userId') !== undefined || Cookies.get('userId') !== null || Cookies.get('userid') !== ''){
            productSave(Cookies.get('userId'),productId, ImgUrl, templateName, category, amount ).then((response) => {
                const savingListString = JSON.stringify(response?.data?.dataObject?.savingList);
                Cookies.set("savelisting", savingListString);
                alert("product saved successfully!!!")
            })
        }else{
            router.push('/Auth/Login')
        } 
    }



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
                                    <button className='border border-black px-2 py-1 flex gap-2 active:scale-110' onClick={()=>handleSave()}>
                                    {!saved?
                                    (<div>
                                    <BsBookmark className='w-5 h-5 '/> {console.log(saved)}</div> ):(<div>
                                        <BsBookmarkFill className='w-5 h-5 '/>
                                    </div>)
                                    }
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