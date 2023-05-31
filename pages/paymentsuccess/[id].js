import { useRouter } from 'next/router';
import React from 'react';

function index() {
    const router = useRouter();
    console.log(router?.query?.id);
  return (
    <span className='justify-center flex mt-40'>
        Successfully received payments for <span className='font-bold px-1'>{router?.query?.id}</span>
    </span>
  )
}

export default index;