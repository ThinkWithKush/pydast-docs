import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Footer } from './Page_Utilities'

const NotFound = () => {
  return (
    <div className='fixed top-0 bg-[#0f1729] h-screen w-full'>
      <Nav title="NotFound"/>
      <div className='select-none flex flex-col font-mono m-4 bg-black bg-opacity-70 rounded-lg h-[90%]'>
        <div className='justify-between font-bold text-slate-500 text-7xl mt-auto mx-auto'>404 Not Found</div>
        <div className='mt-6 text-gray-500 font-semibold mx-auto text-xl'>Oops! This Page doesn't seem to exist</div>
        <div className='text-[#0f1729] font-bold mb-auto p-4 text-2xl mt-10 mx-auto'>
          <Link className='h-fit p-4 w-fit bg-gray-500 rounded-xl' to='/pydast-docs/'>Go To Home</Link>
          <Link className='h-fit p-4 w-fit bg-gray-500 rounded-xl ml-6' to='/pydast-docs/getStarted'>Get Started</Link>
        </div>
      </div>
      <Footer title="NotFound"/>
    </div>
  )
}

export default NotFound