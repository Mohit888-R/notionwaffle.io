import React, { useEffect, useState } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MobileView from '../../components/Sidebar/mobileView';
import { getSavedProduct } from '../../api-call';
import Cookies from 'js-cookie';

function index() {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);

    useEffect(()=>{
        getSavedProduct(Cookies.get('userId')).then((response)=>{
            console.log(response);
        })
    },[])

  return (
    <div>
    <Header />
    <MobileView open={open} setopen={setOpen} />
    {!open ? (
        <div>
                this is savedlist
            

            <Footer />
        </div>
    ) : (<div></div>)

    }
</div>
  )
}

export default index