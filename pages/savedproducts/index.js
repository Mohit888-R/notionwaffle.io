import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MobileView from "../../components/Sidebar/mobileView";
import { getSavedProduct, productById } from "../../api-call";
import Cookies from "js-cookie";
import Image from "next/image";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { BiCart, BiPurchaseTag } from "react-icons/bi";

function index() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getSavedProduct(Cookies.get("userId")).then((response) => {
      setData(response?.data?.dataObject?.savingList);
    });
  }, []);

  console.log("data : ", data);
  return (
    <div>
      <Header />
      <MobileView open={open} setopen={setOpen} />
      {!open ? (
        <div>
             <div className="text-[40px] text-center font-semibold py-8"> Your Saved Products </div>
          <div className="py-6 px-16 grid lg:grid-cols-2 grid-cols-1 lg:space-x-2 lg:space-y-0 space-y-2">
            {data.map((items) => (
              <li type="none" className="border border-black mx-8 inline-flex ">
                <div className="flex">
                  <Image
                    src={items?.ImgUrl}
                    width={150}
                    height={150}
                    className="object-contain pr-2"
                  />
                  <div className="px-4">
                    <p className="text-[28px] pt-3 font-semibold"> {items?.templateName} </p>
                    <p>
                      <span className="text-[20px] font-bold"> ${items?.price} </span>  - <span className="text-[16px] font-light"> ({items?.categoryName})</span>
                    </p>
                    <div className="flex space-x-2 py-4">
                    <button className="border  px-2 py-1 active:scale-110 flex gap-2 text-white bg-[#1976D2]">
                      <BiCart className="w-6 h-6" /> Add to Cart
                    </button>
                    <button className="border  px-2 py-1 active:scale-110 flex text-white bg-[#FF9800]">
                      <BiPurchaseTag className="w-6 h-6 mr-2" /> Buy Now</button>
                    <div className="flex gap-4">
                      <button
                        className="border border-black px-2 py-1 flex gap-2 active:scale-110"
                      >
                          <BsBookmarkFill className="w-5 h-5 " /> Saved 
                      </button>
                      {/* <button className='border gap-2 border-black px-2 py-1 active:scale-110 flex' ><BiDownload className='w-6 h-6'/> 25</button> */}
                    </div>
                  </div>
                  </div>
                </div>
              </li>
            ))}
          </div>
          <Footer />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default index;
