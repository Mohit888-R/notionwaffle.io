import React, { useState } from 'react';
import MobileView from '../../components/Sidebar/mobileView';
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";

import Indify from "../../assets/notionTools/Indigy.png";
import Helpkit from "../../assets/notionTools/helpkit.png";
import NotionForms from "../../assets/notionTools/notionForms.png";
import Super from "../../assets/notionTools/super.png";
import TallyForms from "../../assets/notionTools/Tally.png";
import Popsy from "../../assets/notionTools/popsy.png";
import Potion from "../../assets/notionTools/potion.png";
import Notionlytics from "../../assets/notionTools/notionlytics.png";
import NotionCharts from "../../assets/notionTools/notioncharts.png";
import NotionAutomations from "../../assets/notionTools/notionAutomations.png";
import Finotion from "../../assets/notionTools/finotion.png";
import Feather from "../../assets/notionTools/feather.png";
import Queue from "../../assets/notionTools/queue.png";
import SaveToNotion from "../../assets/notionTools/savetoNotion.png";
import widgetBox from "../../assets/notionTools/widgetbox.png";
import Notaku from "../../assets/notionTools/notaku.png";
import Zorbi from "../../assets/notionTools/zorbi.png";
import Clockify from "../../assets/notionTools/clockify.png";
import Actions from "../../assets/notionTools/actions.png";
import Apption from "../../assets/notionTools/apption.png";
import CustomBlocks from "../../assets/notionTools/customblocks.png";
import Writeboard from "../../assets/notionTools/writeboard.png";
import Asoftmurmur from "../../assets/notionTools/asoftmurmur.png";
import Blocs from "../../assets/notionTools/blocks.png";
import ProBackup from "../../assets/notionTools/probackup.png";
import Simple from "../../assets/notionTools/simple.png";
import NotionMetrics from "../../assets/notionTools/notionMetrics.png";
import NotionExtensions from "../../assets/notionTools/notionExtensions.png";
import NoChart from "../../assets/notionTools/noCharts.png";
import Notion2Sheets from "../../assets/notionTools/notion2Sheets.png";
import Notelet from "../../assets/notionTools/notelet.png";
import Joey from "../../assets/notionTools/joey.png";
import Engine from "../../assets/notionTools/engine.png";
import Notionql from "../../assets/notionTools/notionql.png";
import Butn from "../../assets/notionTools/butn.png";
import Niftyman from "../../assets/notionTools/niftyman.png";
import Float from "../../assets/notionTools/float.png";
import NotionBackups from "../../assets/notionTools/notionBackups.png";
import Fruition from "../../assets/notionTools/fruition.png";
import ThreadNotes from "../../assets/notionTools/threadNotes.png";
import Notion2Chars from "../../assets/notionTools/notion2Chars.png";
import NoCodeLetters from "../../assets/notionTools/noCodeLetters.png";
import Noto from "../../assets/notionTools/noto.png";
import Wunderpresentation from "../../assets/notionTools/wunderpresentation.png";
import NotionCharts2 from "../../assets/notionTools/notionCharts2.png";
import NotionQuotes from "../../assets/notionTools/notionQuotes.png";
import NotionEnhancer from "../../assets/notionTools/notionEnhancer.png";
import NotionForms2 from "../../assets/notionTools/notionForms2.png";
import ChiliPepper from "../../assets/notionTools/chiliPepper.png";
import SnackThis from "../../assets/notionTools/snackThis.png";


const ToolsData = [
    {
        imgsrc: Indify,
        title: "Indify",
        description: "Level up your Notion docs with widgets. Fully customizable, and seamless to set up.",
        link: "https://indify.co/"
    },
    {
        imgsrc: Helpkit,
        title: "Helpkit",
        description: "Turn your Notion docs into a self-service knowledge base for your customers.",
        link: "https://www.helpkit.so/?ref=notionway "
    },
    {
        imgsrc: NotionForms,
        title: "Notion Forms ",
        description: "Create and embed visually appealing forms. Get responses in your Notion table.",
        link: "https://notionforms.io/?via=notionway"
    },
    {
        imgsrc: Super,
        title: "Super",
        description: "Customize design and publish professional websites in seconds with Notion.",
        link: "https://super.so/?ref=notionway"
    },
    {
        imgsrc: TallyForms,
        title: "Tally Forms",
        description: "Create and embed visually appealing forms. Get responses in your Notion table. ",
        link: "https://tally.so/?ref=notionway"
    },
    {
        imgsrc: Popsy,
        title: "Popsy ",
        description: "Customize design and publish professional websites in seconds with Notion.",
        link: " https://popsy.co/?ref=notionway"
    },
    {
        imgsrc: Potion,
        title: " Potion",
        description: "Customize design and publish professional websites in seconds with Notion. ",
        link: "https://potion.so/?ref=notionway "
    },
    {
        imgsrc: Notionlytics,
        title: " Notionlytics",
        description: " See who views your Notion pages, when they do it, and more with analytics in Notion.",
        link: "https://notionlytics.com/?ref=notionway "
    },
    {
        imgsrc: NotionCharts,
        title: " Notioncharts",
        description: " Create beautiful embeddable visuals charts from your Notion databases.",
        link: " https://notioncharts.io/?ref=notionway"
    },
    {
        imgsrc: NotionAutomations,
        title: "Notion Automations ",
        description: " Make Notion the true all-in-one workspace. Connect Notion with your Apps.",
        link: "https://notion-automations.com/?ref=notionway"
    },
    {
        imgsrc: Finotion,
        title: "Finotion ",
        description: "Your financial transactions in Notion, synced automatically. Connect your bank. ",
        link: "https://www.finotion.app/?ref=notionway "
    },
    {
        imgsrc: Feather,
        title: " Feather",
        description: "Write your content on Notion and automatically publish it to your SEO-friendly blog. ",
        link: " "
    },
    {
        imgsrc: Queue,
        title: "Queue ",
        description: "Twitter scheduling Tool for Notion. Schedule tweets & threads without leaving Notion. ",
        link: " "
    },
    {
        imgsrc: SaveToNotion,
        title: " Save to Notion",
        description: "Save social media content onto your own notion account.",
        link: " "
    },
    {
        imgsrc: widgetBox,
        title: "Widgetbox",
        description: "Library of multiple embedable Notion widgets in once place.",
        link: " "
    },
    {
        imgsrc: Notaku,
        title: "Notaku",
        description: " Publish awesome websites using Notion to manage content.",
        link: " "
    },
    {
        imgsrc: Zorbi,
        title: " Zorbi",
        description: "Work with your friends to create flashcard and notes inside your Notion workspace. ",
        link: " "
    },
    {
        imgsrc: Clockify,
        title: "Clockify ",
        description: "Track time on notes right from Notion with just one click. Later, run time reports. ",
        link: " "
    },
    {
        imgsrc: Actions,
        title: "Actions ",
        description: "Huge collection of 45+ Notion widgets that make your life easier. ",
        link: " "
    },
    {
        imgsrc: Apption,
        title: "Apption ",
        description: "Library of multiple embedable Notion widgets in once place. ",
        link: " "
    },
    {
        imgsrc: CustomBlocks,
        title: "Custom Blocks",
        description: "Build unique charts, flows, lists and more to spice up your workspace in seconds.",
        link: " "
    },
    {
        imgsrc: Writeboard,
        title: "Writeboard ",
        description: "Fast real-time online whiteboard to write things on Notion app.     ",
        link: " "
    },
    {
        imgsrc: Asoftmurmur,
        title: " Asoftmurmur",
        description: "Online background noise generator that you can embed on your Notion workspace.",
        link: " "
    },
    {
        imgsrc: Blocs,
        title: "Blocs ",
        description: " Build better habits on notion with multiple beautiful embedable widgets.",
        link: " "
    },
    {
        imgsrc: ProBackup,
        title: "Pro Backup ",
        description: " ",
        link: " "
    },
    {
        imgsrc: Simple,
        title: " ",
        description: " ",
        link: " "
    },
    {
        imgsrc: NotionMetrics,
        title: " ",
        description: " ",
        link: " "
    },
    {
        imgsrc: NotionExtensions,
        title: " ",
        description: " ",
        link: " "
    },
    {
        imgsrc: NoChart,
        title: " ",
        description: " ",
        link: " "
    },
    {
        imgsrc: Notion2Sheets,
        title: " ",
        description: " ",
        link: " "
    },
    {
        imgsrc: Notelet,
        title: " ",
        description: " ",
        link: " "
    },
    {
        imgsrc: Joey,
        title: " ",
        description: " ",
        link: " "
    },
    {
        imgsrc: Engine,
        title: " ",
        description: " ",
        link: " "
    },
    {
        imgsrc: Engine,
        title: " ",
        description: " ",
        link: " "
    },
    {
        imgsrc: Notionql,
        title: " ",
        description: " ",
        link: " "
    },
    {
        imgsrc: Butn,
        title: " ",
        description: " ",
        link: " "
    },
    {
        imgsrc: Niftyman,
        title: " ",
        description: " ",
        link: " "
    },
    {
        imgsrc: Float,
        title: " ",
        description: " ",
        link: " "
    },
    {
        imgsrc: NotionBackups,
        title: " ",
        description: " ",
        link: " "
    },
    {
        imgsrc: Fruition,
        title: " ",
        description: " ",
        link: " "
    },
    {
        imgsrc: ThreadNotes,
        title: " ",
        description: " ",
        link: " "
    },
    {
        imgsrc: Notion2Chars,
        title: " ",
        description: " ",
        link: " "
    },
    {
        imgsrc: NoCodeLetters,
        title: " ",
        description: " ",
        link: " "
    },
    {
        imgsrc: Noto,
        title: " ",
        description: " ",
        link: " "
    },
    {
        imgsrc: Wunderpresentation,
        title: " ",
        description: " ",
        link: " "
    },
    {
        imgsrc: NotionCharts2,
        title: " ",
        description: " ",
        link: " "
    },
    {
        imgsrc: NotionQuotes,
        title: " ",
        description: " ",
        link: " "
    },
    {
        imgsrc: NotionEnhancer,
        title: " ",
        description: " ",
        link: " "
    },
    {
        imgsrc: NotionForms2,
        title: " ",
        description: " ",
        link: " "
    },
    {
        imgsrc: ChiliPepper,
        title: " ",
        description: " ",
        link: " "
    },
    {
        imgsrc: SnackThis,
        title: " ",
        description: " ",
        link: " "
    }
]

function index() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Header />
            <MobileView open={open} setopen={setOpen} />
            {!open ? (
                <div>
                    <div className='py-20'>
                        <h1 className='lg:text-[60px] md:text-[48px] text-[40px] lg:leading-[80px] leading-10 text-center font-semibold lg:w-8/12 m-10/12 flex  m-auto'>Learn Notion faster and easier with video lessons</h1>
                        <p className='py-10 text-[20px] opacity-70 text-center font-semibold lg:w-8/12 md:w-10/12 m-10/12 flex  m-auto'>Enhance your Notion skills and improve your productivity with quick, easy-to-follow video lessons inside your favorite social media channel.</p>
                    </div>
                    <div>

                    </div>
                    <Footer />
                </div>) : (<div></div>)}

        </div>
    )
}

export default index
