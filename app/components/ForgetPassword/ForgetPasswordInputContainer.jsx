import React from 'react'
import Input from '../Ui/Input'
import PrimaryButton from '../Ui/PrimaryButton'

const ForgetPasswordInputContainer = () => {
  return (
    <>
    <Input type={"text"} name={"Email"}/>
    <div className='mt-4'>
    <PrimaryButton name={"Send new password"}/>
    </div>

    </>
  )
}

export default ForgetPasswordInputContainer