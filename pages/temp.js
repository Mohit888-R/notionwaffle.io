// import React, { useState } from 'react';
// import Header from "../components/Header/index";
// import Footer from "../components/Footer/index";
// import MobileView from '../components/Sidebar/mobileView';
// import Tagline from "../components/tagline";
// import { BiDownload,BiCart, BiPurchaseTag } from 'react-icons/bi';
// import { BsBookmark } from 'react-icons/bs';
// import CarouselProduct from "../components/carouselProduct";

// function temp() {
//     const [open, setOpen] = useState(false);


//     return (
//         <div>
//             <Header />
//             <MobileView open={open} setopen={setOpen} />
//             {!open ? (
//                 <div>

//                     <div className='py-8'>
//                         <h1 className='text-center text-[40px] font-bold pb-8'>Ultimate Finance Tracker</h1>
//                         <div className='space-y-4'>
//                             <Tagline tagtitle="Category" tagdesc="Premium Notion templates" />
//                             <Tagline tagtitle="Template" tagdesc="Ultimate Life Planner" />
//                             <Tagline tagtitle="Description" tagdesc="Get access to an exclusive, complete bundle containing all of the Notion premium templates that we've created. Perfectly balanced for business needs and everyday personal use." />
//                             <Tagline tagtitle="Price" tagdesc="$261" />
//                             <div className='flex flex-row gap-4 md:ml-80 ml-10 mt-10'>
//                                 <button className='border  px-2 py-1 active:scale-110 flex gap-2 text-white bg-[#1976D2]' ><BiCart className="w-6 h-6"/> Add to Cart</button>
//                                 <button className='border  px-2 py-1 active:scale-110 flex text-white bg-[#FF9800]' ><BiPurchaseTag className='w-6 h-6 mr-2'/> Buy Now</button>
//                                 <div className='flex gap-4'>
//                                     <button className='border border-black px-2 py-1 flex gap-2 active:scale-110' >
//                                     <BsBookmark className='w-5 h-5 '/>
//                                     </button>
//                                     <button className='border gap-2 border-black px-2 py-1 active:scale-110 flex' ><BiDownload className='w-6 h-6'/> 25</button>
//                                 </div>
//                             </div>
//                         </div>
// <div className='md:ml-80 '>
// <CarouselProduct/>
//     </div>
//                         <div className='flex gap-4'>
//                             <div className='w-7/12 ml-80 mt-4'>
//                                 <h2 className='text-[25px]'>About Template</h2>
//                                 <p>
//                                     Ultimate Finance Tracker is a productivity tool that categorizes features and roadmap items based on their Value, Effort, Confidence level, and Risk Level. The matrix is divided into four quadrants: Build Now, Test Further/Split, Parking, and Kill. The Notion template for this matrix provides a digital space to list and categorize items, making it a useful tool for Product Managers and Development teams to streamline their Roadmap Planning Process.
//                                 </p>
//                             </div>
                            
//                         </div>
//                     </div>

//                     <Footer />
//                 </div>
//             ) : (<div></div>)

//             }
//         </div>
//     )
// }




// export default temp