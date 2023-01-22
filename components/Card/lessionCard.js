import Image from 'next/image'
import React from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';

function lessionCard({ bannerImg, title, description, Instalink, YtubeLink }) {
    return (
        <div className='w-full py-4 px-2 border drop-shadow-md rounded-md'>
            <div className='w-10/12 md:h-72 h-60 my-4 overflow-hidden m-auto rounded-lg border'>
                <Image src={bannerImg} alt="" width={500} className='object-scale-down lg:-my-36 md:-my-28 ' />
            </div>
            <div className='w-10/12 m-auto'>
                <h2 className='text-[20px] font-semibold pt-2 pb-4'>{title}</h2>
                <p className='text-[16px] opacity-90 py-2'>{description}</p>
                <div className='space-y-4 py-2'>
                    <a href={Instalink} className="py-2 bg-white border rounded-md drop-shadow-sm flex m-auto justify-center font-semibold opacity-80">

                        Instagram <HiOutlineExternalLink className='w-6 h-6 mx-2' />
                    </a>
                    <a href={YtubeLink} className="py-2 bg-white border rounded-md drop-shadow-sm flex m-auto justify-center font-semibold opacity-80">
                        Youtube <HiOutlineExternalLink className='w-6 h-6 mx-2' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default lessionCard