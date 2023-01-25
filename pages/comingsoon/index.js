import React, { useState } from 'react';
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import MobileView from '../../components/Sidebar/mobileView';

function index() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Header />
            <MobileView open={open} setopen={setOpen} />
            {!open ? (
                <div>
                    <div className='md:text-[60px] text-[36px] font-bold py-28 text-center' >Coming soon...</div>
                    <Footer />
                </div>) : (<div></div>)}
        </div>
    )
}

export default index