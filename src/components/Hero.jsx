import React from 'react';
import { Link } from 'react-router-dom';
import { Footer} from './Page_Utilities';
import { Nav } from './Navbar';
import bg_hero from '../assets/img/hero_bg.jpg';

const Hero = () => {

  return (
    <div>
      {/* #0f1729 */}
      <div className="flex flex-col h-screen -z-50">

        <img src={bg_hero} className='flex h-screen w-full fixed -z-10'/>

        <Nav title="Hero"/>

        {/* Hero Section */}
        <div className="flex flex-col select-none px-5 py-6 bg-black text-white mx-2 my-2 mt-16 rounded-lg bg-opacity-70 w-auto h-fit">

          <div className='flex text-8xl md:text-9xl font-sans font-bold justify-center m-3'>
            <div className="bg-clip-text bg-gradient-to-r from-blue-500 to-yellow-500 text-transparent">
              Pydast
            </div>
          </div>

          <div className='flex text-3xl py-3 px-4 font-mono font-bold uppercase justify-center bg-black text-white rounded-xl'>
            <div className='text-center'>
              Python Data Structures
            </div>
          </div>

          <div className="text-center font-sans font-bold text-4xl m-2">
            " Don't Repeat,
            But Improvise "
          </div>
          <div className="text-center m-auto p-3 text-lg font-semibold md:max-w-3xl">
            <span className='font-bold text-blue-400 text-xl uppercase'>Pydast </span>
            provides you with pre-built ready-to-use 
            <span className='font-bold text-blue-400 text-xl uppercase'> Data Structures </span> 
            with high
            <span className='font-bold text-blue-400 text-xl uppercase'> flexibility </span>
             
            to transform for your own use
          </div>
          <Link className="bg-blue-200 text-black hover:bg-black hover:py-3 hover:px-8 hover:text-xl hover:text-white font-bold text-lg m-auto py-2 px-6 rounded-full w-fit ease-in duration-300"
          to='/pydast-docs/getStarted'>
            Get Started
          </Link>
        </div>

        <Footer title="Hero" />
        
      </div>
    </div>
  )
}

export default Hero