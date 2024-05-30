import React from 'react'

const SecondaryButton = ({name}) => {
  return (
    <button className='bg-gray-100 text-gray-500  w-full px-8 py-2 rounded-xl hover:bg-gray-300 hover:text-gray-50'>{name}</button>
  )
}

export default SecondaryButton