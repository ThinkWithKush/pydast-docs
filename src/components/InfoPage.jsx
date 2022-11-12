import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Nav,Footer, Sidebar } from './Page_Utilities';
import { Prism } from '@mantine/prism';
import PageData from '../assets/data';

const InfoPage = (props) => {

  let title = useParams()["doc"];
  const data = PageData[title];
  const [menu, setMenu] = useState(true);

  return (
    <div>

      <Nav title="InfoPage" menu={menu} setMenu={setMenu}/>

      <div className='flex flex-col min-h-screen bg-[#0f1729]'>

        <div className="w-full flex mt-16">

          <div className={"flex flex-col select-none px-5 py-6 bg-black text-white mx-2 my-2 rounded-lg bg-opacity-70 w-full "+(menu?"md:w-9/12 md:ml-4":"")}>
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
          </div>
          {menu?<Sidebar className="hidden sm:flex" navlinks={Object.keys(PageData)} data={PageData}/>:null}
        </div>

      </div>

      <Footer/>
      
    </div>
  )
}

export default InfoPage