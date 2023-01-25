import React, { useState } from "react";
import Header from "../components/Header/index";
import Section11 from '../components/section11';
import Section12 from '../components/section12';
import Section13 from '../components/section13';
import Section14 from '../components/section14';
import Section15 from '../components/section15';
import MobileView from "../components/Sidebar/mobileView";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Header />
      <MobileView open={open} setopen={setOpen} />
      {!open ? (
        <div>
          <Section11 />
          <Section12 />
          <Section13 />
          <Section14 />
          <Section15 />
        </div>) : (<div></div>)}
    </div>
  )
}
