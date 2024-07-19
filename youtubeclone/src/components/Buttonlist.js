import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setCategory } from './utils/Slice';

function Buttonlist() {
  let [active,setActive]=useState("All");
    const Buttonlist=['coding','Songs','Movies','defense','comedy','development','frontend','backend','iosDevelopment','militry','fitness','bodybuilding',"fullStack","datastructureandalgorithm"]
    const dispatch=useDispatch()
    const  VideobytagName=(tag)=>{
      if(active!==tag)
      dispatch(setCategory(tag))
      setActive(tag)
    }
  return (
    <div className=' flex overflow-x-scroll w-full no-scrollbar my-1'>
     {
        Buttonlist.map((buttonName,index)=>{
            return (
                <div key={index} className=''>
<button onClick={()=>{
  VideobytagName(buttonName)
}}  className={`${active === buttonName ? "bg-slate-900 text-white" : "bg-gray-200"} w-fit font-medium mx-1 cursor-pointer px-3 py-2 rounded-lg`}><span className='whitespace-nowrap'>{buttonName}</span></button>
                </div>
            )
        })
     }
    </div>
  )
}

export default Buttonlist

