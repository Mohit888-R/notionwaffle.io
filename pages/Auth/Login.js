import React, { useState } from 'react'
import Header from "../../components/Header/index";
import MobileView from '../../components/Sidebar/mobileView';
import Footer from "../../components/Footer/index";
import Link from 'next/link';
import {login} from "../../api-call/index";
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

function Login() {
  const router = useRouter();
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
    
      if (email.trim() === '' || password.trim() === '') {
        alert('Please enter both email and password');
        return;
      }
    
     if(Cookies.get('userId') === undefined || Cookies.get('userId') === null || Cookies.get('userId') === ''){
       login({ email, password }).then((response) => {   
        console.log(response?.data?.message?.userId)
        if(response?.data?.statusCode == 200){
          Cookies.set('userId',response?.data?.message?.userId);
          alert('Successfully logged in');
          router.push('/');
        }
        else if(response?.data?.success != true){
          alert('Fill out Correct Information...')
        }
       
         setEmail('');
         setPassword('');
       });
     }
     
    };
    
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
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email address' className='px-4 py-2 border text-[16px] font-normal'/>
                <input type="password" value={password}  onChange={(e)=>setPassword(e.target.value)} placeholder='Password' className='px-4 py-2 border text-[16px] font-normal'/>
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
                <button className='uppercase px-8 py-2 text-[16px] border bg-black rounded-md text-white '>Sign In</button>
                <div className='text-[12px]'>
                Not a Member? <Link href='/Auth/register' className='underline font-bold'>Sign up</Link>.
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

export default Login