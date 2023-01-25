import React, { useState } from 'react';
import Header from "../../components/Header/index";
import MobileView from '../../components/Sidebar/mobileView';
import Footer from "../../components/Footer/index";
import Sectioncourse from '../../components/sectioncourse';
function index() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Header />
            <MobileView open={open} setopen={setOpen} />

            {!open ? (
                <div>
                    <Sectioncourse />
                    <Footer />
                </div>) : (<div></div>)}

        </div>
    )
}

export default index