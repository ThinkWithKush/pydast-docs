import React,{ useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBox = (props) => {
  const [value,setValue] = useState("");
  const [filteredData,setFilteredData] = useState([]);
  const setSearch = props.setSearch
  const navigate = useNavigate()
  let textInput = "";

  document.addEventListener("keydown",(event)=>{
    if (event.key=='Enter'){
      setSearch(false);
    }
  })

  const handleChange = (event) =>{
    const currvalue = event.target.value;
    if (["heaps","tries","structures"].includes(currvalue.toLowerCase())){
      navigate("/pydast-docs/"+currvalue.toLowerCase())
      setSearch(false)
    }
    setValue(event.target.value)
  }

  useEffect(()=>{
    textInput.focus()
  })

  return (
    <div className='appearance-none flex h-fit p-2 rounded-md bg-white'>
      <input ref={ (input)=>{ textInput = input } } type="text" className="h-8 w-72 focus:outline-none px-3 text-md font-sans" value={value} onChange={handleChange} placeholder='What are you looking for ...'/>
    </div> 
  )
}

const SearchModal = (props) => {

  const setSearch = props.search[1];

  const closeModalBG = (event) => {
    if (event.target.id=="searchModal"){
      setSearch(false)
    }
  }

  document.addEventListener("keydown",(event)=> {
    if (event.key=='/'){
      event.preventDefault();
      if (!props.search[0]){
        setSearch(true)
      }
      console.log("Done")
    }
    if (event.key=='Escape'){
      event.preventDefault();
      if (props.search[0]){
        setSearch(false)
      }
    }
  })

  return (
    <div id="searchModal" onClick={closeModalBG} className={((props.search[0])?"":"hidden")+' fixed flex z-[500] inset-0 w-full h-screen bg-black/50 backdrop-blur-sm justify-center align-middle'}>
      <div className='relative flex h-fit top-40 justify-center'>
        {
          (props.search[0])?<SearchBox setSearch={setSearch}/>:null
        }
      </div>
    </div>
  )
}

export default SearchModal