import React from 'react'
import icons from '../assets/img/icons'
import { Link } from 'react-router-dom'

//----------------------------------------------- Navbar -------------------------------------------------
export const Nav = (props) => {

  return (
    <div>
      <div className="select-none fixed flex w-full z-50 flex-col text-blue-200">
        <div className='flex bg-[#0f1729] justify-between'>
          <Link to="/Pydast-Docs/">
            <div className='flex m-2 -space-x-1'>
              <div className='font-sans px-2 font-semibold text-2xl'>pydast</div>
              <span className='py-1 px-2 m-1 text-sm font-bold text-[#0f1729] bg-blue-200 rounded-full'>v 0.0.1</span>
            </div>
          </Link>
          <div className='flex'>

            <ul className='hidden md:flex space-x-4 m-3'>
              <li><div className='hover:text-white ease-in duration-300'>
                <a className='flex' href="https://pypi.org/project/pydast/">
                  <div className='h-8 w-8'>{icons["python"]}</div>
                  <div className='flex align-middle p-1 font-mono font-bold'>PyPi</div>
                </a>
              </div></li>

              <li><div className='hover:text-white ease-in duration-300'>
                <a className='flex space-x-1' href="https://github.com/ThinkWithKush/PyDaSt">
                  <div className='h-8 w-8'>{icons["github"]}</div>
                  <div className='flex align-middle p-1 font-mono font-bold'>GitHub</div>
                </a>
              </div></li>
            </ul>

            {(props.title==="InfoPage")?
            <div className='px-1 m-3 hidden md:flex'> | </div>:null }

            <div className='flex hover:text-white ease-in duration-300 m-3'>
            {(props.title==="InfoPage")?
            <div class="relative group" onClick={()=>{
              props.setMenu(!props.menu);
              console.log("Menu Opened")
            }}>
              <div class="relative flex items-center justify-center rounded-full transform transition-all bg-blue-200 hover:bg-white group-focus:bg-white duration-200 h-8 w-8">
                <div class="flex p-1 flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 group-focus:-rotate-[45deg] origin-center">
                  <div class="bg-[#0f1729] h-[3px] rounded"></div>
                  <div class="bg-[#0f1729] h-[3px] rounded"></div>
                  <div class="bg-[#0f1729] h-[3px] rounded"></div>
                </div>
              </div>
              </div>:null}
            </div>

          </div>
        </div>
        <div className='w-full h-7 bg-gradient-to-b from-[#0f1729] to-transparent text-white'></div>
      </div>

    </div>
  )
}

//----------------------------------------------- Sidebar -----------------------------------------------
export const Sidebar = (props) => {

  const links = props.navlinks;
  const data = props.data;

  return (
    <div className=''>
      <div className={'fixed top-16 right-2 select-none bg-black bg-opacity-70 font-mono text-sm font-bold rounded-lg hidden md:flex sm:flex-col m-2 min-w-fit p-3 md:w-2/12 md:mr-4 h-[78%]'}>
        <div className='text-center font-mono font-bold text-white text-2xl'>Quick Links</div>
        <div className='h-2 flex flex-col align-middle'/>
        <ul>
          { 
            links.map((item,i)=>{
              return (<li key={i} className='text-slate-400 hover:text-slate-100 py-1 hover:text-xl ease-out duration-300'>
                <Link to={"/Pydast-Docs/"+item}># {data[item][0][1]}</Link>
              </li>)
            })
          }
        </ul>
      </div>
    </div>
  )
}

//----------------------------------------------- Footer ----------------------------------------------------
export const Footer = () => {
  return (
    <div>
      <div className="flex pt-6 flex-col bg-gradient-to-t from-[#003c5f] to-[#0f1729]">
        <div className="m-3 font-bold text-xs text-white text-center"> Copyright 2022 | Pydast </div>
      </div>
    </div>
  )
}
