import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchModal from './SearchModal'
import icons from '../assets/img/icons'

//----------------------------------------------- Navbar -------------------------------------------------
export const Nav = (props) => {

  const [searchBar, setSearchBar] = useState(false);

  return (
    <div>
      
      <SearchModal search={[searchBar,setSearchBar]}/>

      <div className="select-none fixed flex w-full z-50 flex-col text-blue-200">
        <div className='flex bg-[#0f1729] justify-between'>
          <Link to="/pydast-docs/">
            <div className='flex m-2 -space-x-1'>
              <div className='font- px-2 font-semibold text-3xl'>pydast</div>
              <span className='py-1.5 px-2 m-1 text-sm font-bold text-[#0f1729] bg-blue-200 rounded-full'>0.0.1</span>
              <div className='text-blue-200 uppercase text-xs font-bold p-3'>alpha</div>
            </div>
          </Link>
          <div className='flex'>

            {/* SearchIcon */}
            <div className="my-3 py-1 -px-3 flex" onClick={()=>setSearchBar(true)}>
              <div className="relative w-8 h-8 text-blue-200 rounded-full hover:text-white ease-in duration-300 cursor-pointer">{icons["search"]}
              </div>
            </div>

            <ul className='hidden md:flex space-x-4 m-3'>

              <li><div className='px-2'>|</div></li>

              <li><div className='hover:text-white ease-in duration-300'>
                <a className='flex' href="https://pypi.org/project/pydast/">
                  <div className='h-8 w-8'>{icons["python"]}</div>
                  <div className='flex align-middle p-1 font-mono font-bold'>Host</div>
                </a>
              </div></li>

              <li><div className='px-2'>|</div></li>

              <li>
                  <div className='hover:text-white ease-in duration-300'>
                    <a className='flex space-x-1' href="https://github.com/ThinkWithKush/PyDaSt">
                      <div className='h-8 w-8'>{icons["github"]}</div>
                      <div className='flex align-middle p-1 font-mono font-bold'>Source</div>
                    </a>
                  </div>
              </li>
            </ul>

            {(props.title==="InfoPage")?
            <div className='px-1 m-3 hidden md:flex'> | </div>:null }

            <div className='flex hover:text-white ease-in duration-300 m-3 cursor-pointer'>
            {(props.title==="InfoPage")?
                <div className="relative group flex" onClick={()=>{
                  props.setMenu(!props.menu);
                }}>
                  <div className="relative flex items-center justify-center rounded-full transform transition-all bg-blue-200 hover:bg-white group-hover:bg-white group-focus:bg-white duration-200 h-8 w-8">
                    <div className="flex p-1 flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 group-focus:-rotate-[45deg] origin-center">
                      <div className="bg-[#0f1729] h-[3px] rounded"></div>
                      <div className="bg-[#0f1729] h-[3px] rounded"></div>
                      <div className="bg-[#0f1729] h-[3px] rounded"></div>
                    </div>
                  </div>
                  <div className='px-2 py-1 font-bold font-mono sm:hidden'>Nav</div>
                </div>
            :null}
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
  const isActive = props.active;

  return (
    <div className='w-[95%] sm:w-[25%] md:w-[16%] justify-between'>
      <div className={(isActive?"flex flex-col":" hidden")+' select-none sm:fixed sm:top-16 sm:right-2 bg-black bg-opacity-70 font-mono text-sm font-bold rounded-lg sm:flex sm:flex-col m-2 p-3 w-full sm:w-[25%] md:w-[18%] md:mr-4 h-screen overflow-y-auto'}>
        <div className='text-center font-mono font-bold text-white text-2xl'>Navigate to</div>
        <div className='h-2 flex flex-col align-middle'/>
        <ul>
          {
            links.map((item,i)=>{
              return (<li key={i} className='text-slate-400 hover:text-slate-100 py-1 hover:text-xl ease-out duration-300 w-full' onClick={props.updateMenu}>
                <Link to={"/pydast-docs/"+item}># {data[item][0][1]}</Link>
              </li>)
            })
          }
        </ul>
      </div>
    </div>
  )
}

//----------------------------------------------- Footer ----------------------------------------------------
export const Footer = (props) => {
  return (
    <div>
      <div className={"select-none flex pt-6 flex-col bg-gradient-to-t from-[#003c5f] "+((props.title=="InfoPage ")?"to-[#0f1729]":"to-transparent w-full fixed bottom-0")}>
        <div className="m-3 font-bold text-xs text-white text-center"> Copyright 2022 | Pydast | Kushagra Agarwal</div>
      </div>
    </div>
  )
}

// ---------------------------------------------- Table ------------------------------------------------------
export const Table = (props) => {
  return (
    <table className='m-0.5 sm:m-3 text-sm rounded-lg bg-slate-900 overflow-hidden'>
    <tbody className='overflow-scroll'>
    {
      props.table.body.map((obj,i)=>{
        return (
          <tr className={"hover:bg-gradient-to-r hover:text-black from-green-500 to-blue-500 ease-in duration-300 transition-all overflow-scroll"} key={i}>
            {
              // console.log(obj);
              obj.map((ele,i)=>{
                return (<td key={i} className=' px-3 p-2'>{ele}</td>)
              })
            }
          </tr>
        )
      })
    }
    </tbody></table>
  )
}