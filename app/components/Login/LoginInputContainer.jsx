import React from 'react'
import Input from '../Ui/Input'
import LogInOption from './LogInOption'
import PrimaryButton from '../Ui/PrimaryButton'
import SecondaryButton from '../Ui/SecondaryButton'
import Link from 'next/link'

const LoginInputContainer = () => {
  return (
    <div className='mt-[100px]'>
        <Input name={"Email"} type={"text"}/>
        <div className='mt-6'>
        <Input name={"Password"} type={"password"}/>
        </div>
       
        <LogInOption />
        <div className='mt-[200px]'>
        <PrimaryButton name={"Log in with Email"}/>
        <div className='mt-4'>
        <SecondaryButton name={"Continue with SMS"}/>
        </div>
        <div className='flex justify-center mt-4'>
        <span className='font-bold text-sm text-center'>Don't have an account yet? <Link href="/sign-up" className="text-sm font-medium hover:underline">Sign up</Link></span>
        </div>
       
        </div>
       
       
    </div>
  )
}

export default LoginInputContainer