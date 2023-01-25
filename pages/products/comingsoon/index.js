import Image from 'next/image';
import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import Avatar1 from "../../../assets/avatar1.png";
import Header from "../../components/Header/index";
import MobileView from '../../components/Sidebar/mobileView';
import Footer from "../../components/Footer/index";

const questionsTab = [{
        que: "What is Notion?",
        ans: "Notion is an all-in-one workspace that allows you to take notes, add tasks, manage projects, and get organized. Whether you're writing or planning, Notion has a versatile design for getting things done."
    },
    {
        que: "How much the course will cost?",
        ans: "There is no pricing information available at this time."
    },
    {
        que: "Will I need to pay to use Notion?",
        ans: "No, Notion does offer a free plan with no strings attached."
    },
    {
        que: "I have more questions",
        ans: "Send your question at modest@notionway.com. I will be more than happy to answer."
    }
]

function index() {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    const [Index, setIndex] = useState(false);
    const handleClose = () => {
        setShow(false);
    }
    return ( <
            div >
            <
            Header / >
            <
            MobileView open = { open }
            setopen = { setOpen }
            /> {
                !open ? ( <
                        div >
                        <
                        h1 className = 'text-[60px] text-center py-36 font-bold' > Coming soon... < /h1> <
                        Footer / >
                        <
                        /div>

                    ) :
                    ( < div >

                        <
                        /div>)}

                        <
                        /div>
                    )
            }

            export default index