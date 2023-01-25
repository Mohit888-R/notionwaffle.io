import React, { useState } from 'react';
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import MobileView from '../../components/Sidebar/mobileView';
import Sectionstory1 from '../../components/sectionstory1';




function index() {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <Header />
            <MobileView open={open} setopen={setOpen} />

            {!open ? (
                <div>
                    <Sectionstory1 />
                    <Footer />
                </div>) : (<div></div>)}

        </div>
    )
}

export default index