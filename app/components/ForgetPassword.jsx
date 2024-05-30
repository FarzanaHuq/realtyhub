import React from 'react'
import ForgetPasswordInputContainer from './ForgetPassword/ForgetPasswordInputContainer'
import Link from 'next/link'
import SecondaryButton from './Ui/SecondaryButton'

const ForgetPassword = () => {
  return (
    <div>
        <Link href={"/"} className='hidden md:block'>
        <span className='flex items-center gap-2 text-[#4D5155]'><svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.52727 1L1 6.52727H17" stroke="#4D5155" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
Back to log in</span>
        </Link>
      
<p className='text-3xl font-bold mt-4'>Forget Password</p>
<p className='mt-2'>Don’t worry! It happens to the best of us!</p>
<div className='mt-[400px]'>
<ForgetPasswordInputContainer />
<Link href={"/"} className='mt-4 block md:hidden'><SecondaryButton name={"Back to log in"}/></Link>
</div>

    </div>
  )
}

export default ForgetPassword