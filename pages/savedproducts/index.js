import React, { useEffect, useState } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MobileView from '../../components/Sidebar/mobileView';
import { getSavedProduct, productById } from '../../api-call';
import Cookies from 'js-cookie';

function index() {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);

    useEffect(()=>{
        getSavedProduct(Cookies.get('userId')).then((response)=>{
            setData(response?.data?.dataObject?.savingList);
            response?.data?.dataObject?.savingList.forEach(i => {
                console.log(productById(i));
            });
        })
    },[])


  return (
    <div>
    <Header />
    <MobileView open={open} setopen={setOpen} />
    {!open ? (
        <div>
            {data.map((items)=>(
                <li type="none">
                   {items}
                </li>
            ))}
            <Footer />
        </div>
    ) : (<div></div>)

    }
</div>
  )
}

export default index