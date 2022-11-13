import React from 'react'
import icons from '../assets/img/icons'
import { Tooltip } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

//----------------------------------------------- Navbar -------------------------------------------------
export const Nav = (props) => {

  return (
    <div>
      <div className="select-none fixed flex w-full z-50 flex-col text-blue-200">
        <div className='flex bg-[#0f1729] justify-between'>
          <Link to="/pydast-docs/">
            <div className='flex m-2 -space-x-1'>
              <div className='font-sans px-2 font-semibold text-3xl'>pydast</div>
              <span className='py-1.5 px-2 m-1 text-sm font-bold text-[#0f1729] bg-blue-200 rounded-full'>v 0.0.1</span>
              <div className='text-blue-200 uppercase text-xs font-bold p-3'>alpha</div>
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

              <li><div className='px-1'>|</div></li>

              <li>
                  <div className='hover:text-white ease-in duration-300'>
                    <a className='flex space-x-1' href="https://github.com/ThinkWithKush/PyDaSt">
                      <div className='h-8 w-8'>{icons["github"]}</div>
                      <div className='flex align-middle p-1 font-mono font-bold'>GitHub</div>
                    </a>
                  </div>
              </li>
            </ul>

            {(props.title==="InfoPage")?
            <div className='px-1 m-3 hidden md:flex'> | </div>:null }

            <div className='flex hover:text-white ease-in duration-300 m-3'>
            {(props.title==="InfoPage")?
              
              <Tooltip className='z-[60] font-bold px-2 py-1' content="Nav">
                <div class="relative group" onClick={()=>{
                  props.setMenu(!props.menu);
                }}>
                  <div class="relative flex items-center justify-center rounded-full transform transition-all bg-blue-200 hover:bg-white group-focus:bg-white duration-200 h-8 w-8">
                    <div class="flex p-1 flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 group-focus:-rotate-[45deg] origin-center">
                      <div class="bg-[#0f1729] h-[3px] rounded"></div>
                      <div class="bg-[#0f1729] h-[3px] rounded"></div>
                      <div class="bg-[#0f1729] h-[3px] rounded"></div>
                    </div>
                  </div>
                </div>
              </Tooltip>
            :null}
            </div>

          </div>
        </div>
        <div className='w-full h-7 bg-gradient-to-b from-[#0f1729] to-transparent text-white'></div>
      </div>

    </div>
  )
}
