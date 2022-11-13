import React from 'react'
import { Link } from 'react-router-dom'

//----------------------------------------------- Sidebar -----------------------------------------------
export const Sidebar = (props) => {

  const links = props.navlinks;
  const data = props.data;
  const isActive = props.active;

  return (
    <div className=''>
      <div className={(isActive?"flex flex-col select-none px-5 py-6 bg-black text-white m-2 rounded-lg bg-opacity-70 ":" hidden")+' select-none sm:fixed sm:top-16 sm:right-2 bg-black bg-opacity-70 font-mono text-sm font-bold rounded-lg sm:flex sm:flex-col sm:m-2 sm:p-3 w-[100%] sm:w-[25%] md:w-[18%] md:mr-4 h-screen overflow-y-auto'}>
        <div className='text-center font-mono font-bold text-white text-2xl'>Quick Links</div>
        <div className='h-2 flex flex-col align-middle'/>
        <ul>
          {
            links.map((item,i)=>{
              return (<li key={i} className='text-slate-400 hover:text-slate-100 py-1 hover:text-xl ease-out duration-300' onClick={props.updateMenu}>
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
      <div className={"flex pt-6 flex-col bg-gradient-to-t from-[#003c5f] "+((props.title=="InfoPage ")?"to-[#0f1729]":"to-transparent w-full fixed bottom-0")}>
        
        <div className="m-3 font-bold text-xs text-white text-center"> Copyright 2022 | Pydast </div>
      </div>
    </div>
  )
}
