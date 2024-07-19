import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import API_KEY from './Constant/Youtube';
import Avatar from 'react-avatar';
import { AiOutlineLike,AiOutlineDislike  } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { GoDownload } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuSendHorizonal } from "react-icons/lu";
import Livechat from './components/Livechat';
import { useDispatch } from 'react-redux';
import { setMessage } from './components/utils/ChatSlice';
const Watch = () => {
    const [input,setInput]=useState("");
    const [searchparams]=useSearchParams();
const videoid=searchparams.get('v');
let dispatch=useDispatch()
    const [singlevideo,setSinglevideo]=useState('');
    let getsinglevideo=async()=>{
        try{
            let resp= await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoid}&key=${API_KEY}`)
            setSinglevideo(resp?.data?.items[0])
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        getsinglevideo();
    },[])
    const SendMessage=()=>{
        
        dispatch(setMessage({
            name:'Ankit',
            message:input,
        }))
        setInput("");
        
    }
  
   

  return (
    <div className='ml-5 flex w-[100%] mt-2 pr-2'>
   <div className='flex w-[88%]'>
   <div>
    <iframe
                        width="800"
                        height="400"
                        src={`https://www.youtube.com/embed/${videoid}?&autoplay=1`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>

                    </iframe>

    <h1 className='font-bold mt-2 text-base'>{singlevideo?.snippet?.title}</h1>
    <div className='flex items-center justify-between ' >
       <div className='flex items-center justify-between w-[35%] '>
    <div className='flex justify-between '>
    <Avatar src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" round={true} size={35}/>
       <h1 className='font-bold ml-2 font-base '>{singlevideo?.snippet?.channelTitle}</h1>
    </div>
    <button className='px-3 ml-4 py-4 font-bold bg-black text-white rounded-full'>subscribe</button>
       </div>
     <div className='flex items-center justify-between w-[40%] gap-2 mt-2'>
     <div className='flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full  '>
    <AiOutlineLike size='20px' className='mr-5 '/>
    <AiOutlineDislike size='20px' />
     </div>
       <div className='flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full '>
            <PiShareFatLight size='24px' className='mr-2'/>
            <span>Share</span>
       </div>
       <div className='flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full'>
        <GoDownload size='24px' />
        <span>Download</span>
       </div>
     </div>
      
    </div>
    </div>
   
    {/* chat section is starting from this point */}
    <div className='w-[100%] border border-gray-300 ml-8 rounded-lg p-4 mr-2'>
        <div className='flex items-center justify-between '>
    <h1>Top Chat</h1>
    <BsThreeDotsVertical />
    

        </div>
        <div className='overflow-y-auto h-[28rem] p-4 flex flex-col-reverse'>
            <Livechat/>
        </div>
        {/* footer section starts here of live chat  */}
<div className='flex items-center justify-between border-t p-2'>
<div className='flex items-center w-[90%]'>
    <div>
    <Avatar src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" round={true} size={35}/>
    </div>
    <input value={input} onChange={(e)=>{
        setInput(e.target.value);
    }}  type="text " className='border-b border-gray-300 outline-none ml-2' placeholder='send message'/>
    <div className='bg-gray-200 cursor-pointer p-2 rounded-full'>
    <LuSendHorizonal onClick={SendMessage} />
    </div>
</div>
</div>
    </div>
   </div>
</div>
  )
}

export default Watch
