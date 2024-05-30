import React from 'react'

import Link from 'next/link'

const LogInOption = () => {
  return (
    <div className='flex justify-between mt-4'>
   <div class="flex items-start mb-5">
    <div class="flex items-center h-5">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-gray-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Keep me log in</label>
  </div>
    <Link href={"/forget-password"} className='text-sm font-medium hover:underline'>Forget Password</Link>
    </div>
  )
}

export default LogInOption