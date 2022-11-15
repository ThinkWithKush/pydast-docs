import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import { Nav, Footer, Table, Sidebar } from './Page_Utilities';
import { Prism } from '@mantine/prism';
import PageData from '../assets/data';

const InfoPage = (props) => {

  let title = useParams()["doc"];
  const data = PageData[title];
  const keys= Object.keys(PageData);
  const [menu, setMenu] = useState(window.innerWidth>640);
  const index = keys.indexOf(title);
  const left = (index===0)?undefined:keys[index-1];
  const right = (index===keys.length-1)?undefined:keys[index+1];

  const updateMenu = () => {
    if (window.innerWidth<640){
      setMenu(false);
    }
  }

  return (
    <div>

      <Nav title="InfoPage" menu={menu} setMenu={setMenu} active={menu}/>

      <div className='flex flex-col min-h-screen bg-[#0f1729] overflow-x-hidden'>

        <div className="w-full flex mt-16">

          <div className={((menu)?"hidden":"flex flex-col")+" sm:flex sm:flex-col select-none px-5 py-6 bg-black text-white m-2 rounded-lg bg-opacity-70 w-full "+(menu?"sm:w-[70%] md:w-[76%] lg:w-[78%] sm:ml-4":"")}>
            {
              Object.keys(data).map((keyName,i)=>{
                const style=data[keyName][0];
                const text = data[keyName][1];
                return (
                (style==="page-title")?<div key={i} className="font-sans font-bold text-4xl m-2">{text}</div>:
                (style==="highlight")?<div key={i} className='border-l-4 border-blue-500 bg-slate-300 m-2 ml-5 text-black italic px-2 py-1.5 text-sm'>{text}</div>:
                (style==="subheading")?<div key={i} className="font-sans font-semibold text-xl m-2 text-blue-200 capitalize">{text}</div>:
                (style==="text")?<div key={i} className="select-text font-sans md:ml-5 m-2 text-sm text-white">{text}</div>:
                (style==="codeblock")?<Prism key={i} className="m-2 selection:bg-black text-white" withLineNumbers colorScheme='dark' language="python">{text}</Prism>:
                (style==="shell-block")?<Prism key={i} className="m-2" colorScheme='dark' language="bash">{text}</Prism>:
                (style==="table")?<Table key={i} table={text}/>:
                (style==="break")?<div key={i}><br/></div>:
                <div key={i}>{text}</div>
                )
              })
            }
            <hr className='h-1 my-3 mx-5 bg-transparent text-transparent'/>
            <div className="flex justify-between text-md p-2 font-mono font-semibold">
              {left?<Link 
              className='h-5 hover:bg-gradient-to-br hover:text-transparent hover:text-lg transition-all from-blue-500 to-green-500 bg-clip-text ease-in duration-300 ' 
              to={"/pydast-docs/"+left}>{"# "+PageData[left][0][1]}</Link>:<span/>}
              {right?<Link 
              className='h-5 hover:bg-gradient-to-br hover:text-transparent hover:text-lg transition-all from-blue-500 to-green-500 bg-clip-text ease-in duration-300 ' 
              to={"/pydast-docs/"+right}>{"# "+PageData[right][0][1]}</Link>:<span/>}
            </div>
            
            <div className='m-3 bg-gradient-to-br bg-clip-text to-blue-500 via-purple-500 from-yellow-500 text-transparent h-fit'>
              <div className='font-mono text-xl font-semibold'>Links</div>
            </div>
          </div>
          {menu?<Sidebar className="hidden sm:flex" updateMenu={updateMenu} active={menu} navlinks={keys} data={PageData}/>:null}
        </div>

        <div className='h-9 '></div>

      </div>

      <Footer title="InfoPage"/>
      
    </div>
  )
}

export default InfoPage