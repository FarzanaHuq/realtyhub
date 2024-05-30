import React from 'react'

const Input = ({type,name}) => {
  return (
    <div className='flex flex-col'>
    <label className='font-bold'>{name}</label>
     <input type={type} name="" id="" className='border-b-2 focus:outline-none border-b-black pb-2  bg-none focus-none px-1' />
    </div>
   
  )
}

export default Input