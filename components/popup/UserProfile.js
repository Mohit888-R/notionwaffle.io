import Image from 'next/image';
import React, { useState } from 'react';
import Model from "./Model";
import Avatar1 from '../../assets/avatar1.png';

function UserProfile({popupOpen, setPopupOpen}) {
  return (
    <Model open={popupOpen} setOpen={setPopupOpen}>
          <div className='m-8 px-8 text-center'>
              <p className='text-center text-bold text-[24px]'> Profile Information </p>
              <div className='justify-center flex pt-4 pb-2'>
              <Image src={Avatar1} width={60} height={60} className="border border-black rounded-full "/>
              </div>
              <p><b> Name : </b><span>Mohit Singh</span></p>
              <p><b> Email : </b><span>xyz@gmail.com</span></p>
              <p><b> UserId : </b><span>Sample_of_userId</span></p>
           </div>
    </Model>
  )
}

export default UserProfile