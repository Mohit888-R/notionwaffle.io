import React, { useEffect, useState } from 'react'
import Header from "../../components/Header/index";
import MobileView from '../../components/Sidebar/mobileView';
import Footer from "../../components/Footer/index";
import Link from 'next/link';
import {Register} from "../../api-call/index";
import Cookies from 'js-cookie';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router';

function register() {
  const router = useRouter();
  const [username, setUsername]= useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);
    
    const handleSubmit = (e)=>{
      e.preventDefault();
      Register({username,email, password}).then((response)=>{
        console.log(response?.data?.message?.userId);
        Cookies.set('userId',response?.data?.message?.userId);
        router.push('/');
        setUsername('');
        setEmail('');
        setPassword('');
      });
    }

  return (
    <div>
         <Header />
            <MobileView open={open} setopen={setOpen} />

            {!open ? (
                <div>
                   <div className='py-16'>
                   <div className='py-16 flex m-auto justify-center text-center'>
            <div className='leading-6'>
            {/* <Image src={NikeLogo} width={40} height={40} alt="" className='m-auto flex'/> */}
            <p className='uppercase text-[24px]  font-bold text-center'>YOUR ACCOUNT FOR <br></br> EVERYTHING NOTIONWAFFLE</p>
            <form className='py-8 flex flex-col space-y-4' onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Username' className='px-4 py-2 border text-[16px] font-normal'/>
                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email address' className='px-4 py-2 border text-[16px] font-normal'/>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' className='px-4 py-2 border text-[16px] font-normal'/>
                {/* <div className='flex gap-8'>
                    <div className='gap-2 flex flex-1 text-[12px] font-semibold'>
                    <input type="checkbox" id='check'></input>
                    <label htmlFor='check' >keep me signed in</label>
                    </div>
                    <a href='/authentication/forget' className='text-[14px]  opacity-70'>forgotten your password?</a>
                </div> */}
                <div className='text-[12px]'>
                By logging in, you agree to Waffle's <a href='#' className='underline'>Privacy Policy</a> and <a href='#' className='underline'>Terms of Use </a> .
                </div>
                <button className='uppercase px-8 py-2 text-[16px] border bg-black rounded-md text-white '>Sign up</button>
                <div className='text-[12px]'>
                Not a Member? <Link href='/Auth/Login' className='underline font-bold'>Login</Link>.
                </div>
            </form>
            </div>
        </div>

                    </div>
                    <Footer />
                </div>) : (<div></div>)}

    </div>
  )
}

export default register