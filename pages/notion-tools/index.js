import React, { useState } from 'react';
import MobileView from '../../components/Sidebar/mobileView';
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";

import Indify from "../../assets/notionTools/Indify.png";
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
import ProBackup from "../../assets/notionTools/proBackup.png";
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
import Notion2Chars from "../../assets/notionTools/notion2Charts.png";
import NoCodeLetters from "../../assets/notionTools/noCodeLetters.png";
import Noto from "../../assets/notionTools/Noto.png";
import Wunderpresentation from "../../assets/notionTools/wunderpresentation.png";
import NotionCharts2 from "../../assets/notionTools/notionCharts3.png";
import NotionQuotes from "../../assets/notionTools/notionQuotes.png";
import NotionEnhancer from "../../assets/notionTools/notionEnhancer.png";
import NotionForms2 from "../../assets/notionTools/notionForms2.png";
import ChiliPepper from "../../assets/notionTools/chiliPepper.png";
import SnackThis from "../../assets/notionTools/snacksThis.png";
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink } from "react-icons/fi";


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
        link: "https://feather.so/?ref=notionway "
    },
    {
        imgsrc: Queue,
        title: "Queue ",
        description: "Twitter scheduling Tool for Notion. Schedule tweets & threads without leaving Notion. ",
        link: "https://www.queue.so/?ref=notionway "
    },
    {
        imgsrc: SaveToNotion,
        title: " Save to Notion",
        description: "Save social media content onto your own notion account.",
        link: "https://savetonotion.com/?ref=notionway "
    },
    {
        imgsrc: widgetBox,
        title: "Widgetbox",
        description: "Library of multiple embedable Notion widgets in once place.",
        link: "https://widgetbox.app/?ref=notionway "
    },
    {
        imgsrc: Notaku,
        title: "Notaku",
        description: " Publish awesome websites using Notion to manage content.",
        link: "https://notaku.so/?ref=notionway "
    },
    {
        imgsrc: Zorbi,
        title: " Zorbi",
        description: "Work with your friends to create flashcard and notes inside your Notion workspace. ",
        link: " https://zorbi.com/?ref=notionway"
    },
    {
        imgsrc: Clockify,
        title: "Clockify ",
        description: "Track time on notes right from Notion with just one click. Later, run time reports. ",
        link: " https://clockify.me/notion-time-tracking/?ref=notionway"
    },
    {
        imgsrc: Actions,
        title: "Actions ",
        description: "Huge collection of 45+ Notion widgets that make your life easier. ",
        link: "https://www.actions.so/?ref=notionway "
    },
    {
        imgsrc: Apption,
        title: "Apption ",
        description: "Library of multiple embedable Notion widgets in once place. ",
        link: "https://apption.co/?ref=notionway "
    },
    {
        imgsrc: CustomBlocks,
        title: "Custom Blocks",
        description: "Build unique charts, flows, lists and more to spice up your workspace in seconds.",
        link: " https://getcustomblocks.com/?ref=notionway"
    },
    {
        imgsrc: Writeboard,
        title: "Writeboard ",
        description: "Fast real-time online whiteboard to write things on Notion app.     ",
        link: "https://witeboard.com/?ref=notionway "
    },
    {
        imgsrc: Asoftmurmur,
        title: " Asoftmurmur",
        description: "Online background noise generator that you can embed on your Notion workspace.",
        link: " https://asoftmurmur.com/?ref=notionway"
    },
    {
        imgsrc: Blocs,
        title: "Blocs ",
        description: " Build better habits on notion with multiple beautiful embedable widgets.",
        link: " https://www.blocs.me/?ref=notionway"
    },
    {
        imgsrc: ProBackup,
        title: "Pro Backup ",
        description: "Get daily, automated backups of your Notion pages, comments and files. ",
        link: "https://probackup.io/backup/notion/?ref=notionway "
    },
    {
        imgsrc: Simple,
        title: " Simple",
        description: " Customize design and publish professional websites in seconds with Notion.",
        link: "https://www.simple.ink/?ref=notionway "
    },
    {
        imgsrc: NotionMetrics,
        title: " Notion Metrics",
        description: "Your most important metrics, live in Notion pages. No more multiple dashboards.",
        link: "https://notionmetrics.com/?ref=notionway "
    },
    {
        imgsrc: NotionExtensions,
        title: "Notion Extensions ",
        description: "Small & configurable extensions that make you more productive on Notion.",
        link: " https://app.notionextensions.com/?ref=notionway"
    },
    {
        imgsrc: NoChart,
        title: "No Chart ",
        description: "Turn your Notion database into interactive and customizable Notion charts. ",
        link: "https://nochart.co/?ref=notionway "
    },
    {
        imgsrc: Notion2Sheets,
        title: "Notion 2 Sheets ",
        description: " Keep your databases from Notion automatically in sync with Google Sheets.",
        link: " https://notion2sheets.com/?ref=notionway"
    },
    {
        imgsrc: Notelet,
        title: "Notelet ",
        description: "Write in Notion, publish to the web. Custom domain, analytics, themes and more. ",
        link: "https://notelet.so/?ref=notionway "
    },
    {
        imgsrc: Joey,
        title: " Joey",
        description: "Establish connections with your audience from reaction inside Notion.",
        link: "https://joey.team/?ref=notionway "
    },
    {
        imgsrc: Engine,
        title: "Engine ",
        description: "Transform your existing Notion pages into a self-service knowledge base. ",
        link: "https://engine.so/?ref=notionway "
    },
    {
        imgsrc: Notionql,
        title: " Notionql",
        description: "GraphQL for Notion. Deploy a GraphQL API for your Notion workspace. ",
        link: " https://notionql.com/?ref=notionway"
    },
    {
        imgsrc: Butn,
        title: "Butn",
        description: "Generate different call-to-action buttons that you can use inside Notion.",
        link: "https://butn.one/?ref=notionway "
    },
    {
        imgsrc: Niftyman,
        title: "Niftyman",
        description: "Beautifully crafted Notion experience in MacOS menu bar!",
        link: "https://shadowfax.app/?ref=notionway "
    },
    {
        imgsrc: Float,
        title: "Float ",
        description: "Turn your docs in Notion into a fully operational online course in minutes. ",
        link: "https://www.float.so/?ref=notionway "
    },
    {
        imgsrc: NotionBackups,
        title: "Notion Backups ",
        description: "Easily back up and restore your Notion workspaces. Keep your data is safe. ",
        link: "https://notionbackups.com/?ref=notionway "
    },
    {
        imgsrc: Fruition,
        title: " Fruition",
        description: "Free, open source toolkit for building websites with Notion. ",
        link: "https://fruitionsite.com/?ref=notionway "
    },
    {
        imgsrc: ThreadNotes,
        title: " Thread Notes",
        description: "Save, sort, and schedule your favourite Twitter tweets & threads in Notion. ",
        link: "https://threadnotes.com/?ref=notionway "
    },
    {
        imgsrc: Notion2Chars,
        title: "Notion 2 Chartss ",
        description: "Generate beautiful and easily embeddable charts from your Notion data. ",
        link: "https://notion2charts.com/?ref=notionway "
    },
    {
        imgsrc: NoCodeLetters,
        title: "No Code Letters ",
        description: "Write and send your newsletters directly from your Notion workspace. ",
        link: " https://www.nocodeletters.com/?ref=notionway"
    },
    {
        imgsrc: Noto,
        title: "Noto ",
        description: "Noto Link is a seamlessly integrated URL shortener and beautifier for Notion. ",
        link: "https://www.noto.tools/?ref=notionway "
    },
    {
        imgsrc: Wunderpresentation,
        title: "Wunderpresentation ",
        description: "Create and run interactive presentation slides in no time from Notion. ",
        link: " https://wunderpresentation.com/?ref=notionway"
    },
    {
        imgsrc: NotionCharts2,
        title: "Notion Charts ",
        description: " Generate embeddable charts, beautifully optimized for Notion.",
        link: "https://www.notion.vip/charts/?ref=notionway "
    },
    {
        imgsrc: NotionQuotes,
        title: "Notion Quotes ",
        description: "Get a new quote every time you open Notion workspace. ",
        link: " https://notion-quotes.vercel.app/?ref=notionway"
    },
    {
        imgsrc: NotionEnhancer,
        title: " Notion Enhancer",
        description: "An enhancer/customiser for the all-in-one productivity workspace Notion. ",
        link: "https://notion-enhancer.github.io/?ref=notionway "
    },
    {
        imgsrc: NotionForms2,
        title: "Notion Forms ",
        description: "Notion Forms by Simple.ink: embed, edit and collect answers, all within Notion. ",
        link: "https://www.simple.ink/notion-forms/?ref=notionway "
    },
    {
        imgsrc: ChiliPepper,
        title: "Chili Pepper ",
        description: "Create and embed visually appealing forms. Get responses in your Notion table. ",
        link: "https://chilipepper.io/?ref=notionway "
    },
    {
        imgsrc: SnackThis,
        title: "Snack This ",
        description: "Automaticly create beautiful presentations from your Notion link. ",
        link: "https://snackthis.co/presentations/?ref=notionway "
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
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-8 gap-4 px-8'>
                        {ToolsData.map((items, index) => (
                            <div>
                                <div className='border rounded-md drop-shadow-md inline-block px-8 py-4'>
                                    <Image src={items.imgsrc} width={80} height={80} className="bg-gray-100 p-2 rounded-md" />
                                    <div className='text-[20px] font-semibold py-2'>{items.title}</div>
                                    <div className='text-[16px] pb-2 font-normal opacity-90'>{items.description}</div>
                                    <Link href={items.link} className="border inline-flex px-4 rounded-md py-2 drop-shadow-md items-center  opacity-80 text-[18px]">Learn more <FiExternalLink className='w-5 h-5 mx-2' /></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Footer />
                </div>) : (<div></div>)}

        </div>
    )
}

export default index
