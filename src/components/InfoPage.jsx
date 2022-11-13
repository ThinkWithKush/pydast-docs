import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Footer, Sidebar } from './Page_Utilities';
import { Nav } from './Navbar';
import { Prism } from '@mantine/prism';
import PageData from '../assets/data';

const InfoPage = (props) => {

  let title = useParams()["doc"];
  const data = PageData[title];
  const keys= Object.keys(PageData);
  const [menu, setMenu] = useState(window.innerWidth>640);

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

          <div className={((menu)?"hidden":"flex flex-col")+" sm:flex sm:flex-col select-none px-5 py-6 bg-black text-white m-2 rounded-lg bg-opacity-70 w-full "+(menu?"sm:w-[70%] md:w-[78%] sm:ml-4":"")}>
            {
              Object.keys(data).map((keyName,i)=>{
                const style=data[keyName][0];
                const text = data[keyName][1];
                return (
                (style==="page-title")?<div key={i} className="font-sans font-bold text-4xl m-2">{text}</div>:
                (style==="subheading")?<div key={i} className="font-sans text-xl m-2 text-blue-200 uppercase">{text}</div>:
                (style==="general-text")?<div key={i} className="font-sans m-2 text-sm text-white">{text}</div>:
                (style==="codeblock")?<Prism key={i} className="m-2" withLineNumbers colorScheme='dark' language="python">{text}</Prism>:
                (style=="shell-block")?<Prism key={i} className="m-2" colorScheme='dark' language="bash">{text}</Prism>
                :<div>{text}</div>
                )
              })
            }
            <div className='m-6'></div>
          </div>
          {menu?<Sidebar className="hidden sm:flex" updateMenu={updateMenu} active={menu} navlinks={keys} data={PageData}/>:null}
        </div>

      </div>

      <Footer title="InfoPage"/>
      
    </div>
  )
}

export default InfoPage