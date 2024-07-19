import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io"
import { CiVideoOn } from "react-icons/ci";
import Avatar from 'react-avatar';
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar,setCategory } from './utils/Slice';
import axios from "axios";
import { SEARCH_SUGGESTIONS_API } from '../Constant/Youtube';
import  {setSearchSuggetion} from './utils/Slice'


function Navbar() {
  let [input,setInput]=useState("");
  const [suggetion,setSuggetion]=useState(false)
  const {SearchSuggetion}= useSelector((store)=>store.app)
  const dispatch=useDispatch()
  const  searchVideo=()=>{
    dispatch(setCategory(input))
    setInput("")
}
const ShowSuggestion=async()=>{
  try{
    const response=await axios.get(SEARCH_SUGGESTIONS_API + input);
    dispatch(setSearchSuggetion(response?.data[1]));

  }
  catch(err){
    console.log(err);
  }
}
  useEffect(()=>{
    ShowSuggestion()
  })
  const togglehandler=()=>{
    dispatch(toggleSidebar())
    
  }
  const  openSuggetion=()=>{
    setSuggetion(true)
  }
  return (
   <div className='flex fixed top-0 justify-center items-center w-[100%] z-10 bg-white'>
     <div className='flex w-[96%] py-3 justify-between items-center'>
      <div className='flex items-center'>
        <GiHamburgerMenu onClick={togglehandler}/>
        <img className='px-4' width={'115px'} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png" alt='yt_logo'/>
      </div>
      <div className='flex items-center w-[40%] '>
        <div className='w-[100%] flex'>
          <input value={input} onFocus={openSuggetion} onChange={(e)=>setInput(e.target.value)}   type='text ' className='w-full py-2 px-4 border border-gray-400 rounded-l-full outline-none  ' placeholder='Search' />
          <button onClick={searchVideo} className='border rounded-r-full px-4 py-2 border-gray-400'>
        <CiSearch size={'25px'}/>
        </button>
        </div>
      {     (suggetion &&  SearchSuggetion.length !== 0) &&
          <div className='absolute top-3 z-50 py-5 bg-white w-[30%] shadow-lg mt-12 border border-gray-200 rounded-lg'>
          <ul>
            {
              SearchSuggetion.map((item,id)=>{
                return(
                  <div className="flex items-center px-4 hover:bg-gray-100">
                  <CiSearch size="24px" />
                  <li className="px-2 py-1 cursor-pointer text-md font-medium">{item}</li>
              </div>
                )
              })
            }
          </ul>
        </div>
      }
       
      </div>
      <div className='flex items-center gap-[40px]'>
        <IoIosNotificationsOutline size={'24px'} className='cursor-pointer'/>
        <CiVideoOn className='cursor-pointer' size={'24px'}/>
        <Avatar src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" round={true} size={35}/>
      </div>
    </div>
   </div>
  )
}

export default Navbar
