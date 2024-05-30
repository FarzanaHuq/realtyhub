import React from 'react'
import Wrapper from '../components/Wrapper'
import LogoHeader from '../components/LogoHeader'
import Container from '../components/Container'
import ForgetPassword from '../components/ForgetPassword'

const ForgetPasswordPage = () => {
  return (
    <>
    <Wrapper>
    <div className="hidden md:block md:basis-2/4 2xl:basis-3/4">
    <LogoHeader />
    </div>
<div className="w-full px-4 md:px-0 md:basis-2/4 2xl:basis-1/4">
<Container>
    <ForgetPassword />
  </Container>
  </div>
  </Wrapper>
  </>   
  )
}

export default ForgetPasswordPage