import React from 'react'

const PrimaryButton = ({name}) => {
  return (
    <button className='bg-gradient-to-br from-[#255793] to-[#004292] text-white font-medium w-full px-8 py-2 rounded-xl hover:bg-[#255793]'>{name}</button>
  )
}

export default PrimaryButton