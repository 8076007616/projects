import axios from 'axios';
import React, { useState } from 'react'
import Avatar from 'react-avatar';
import API_KEY from '../Constant/Youtube';
import { useEffect } from 'react';

function Video({item}) {
    const [yticon,setYticon]=useState("")
    let ChannelList= async()=>{
        try{
            const response= await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`);
            
            setYticon(response.data.items[0].snippet.thumbnails.high.url)
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        ChannelList()
    },)
  return (
    <div className='w-94 cursor-pointer'>
  <img className='rounded-xl w-full' src={item.snippet.thumbnails.medium.url} alt='YOU_TUBE_IMAGE'/>
  <div className='flex mt-2 '>
     <Avatar src={yticon} round={true} size={35}/>
   <div className='ml-2'>
   <h1 className='font-bold'>{item.snippet.title}  </h1>
    <p className='text-sm text-gray-500'>{item.snippet.channelTitle}</p>
   </div>
    </div>    
    </div>
  )
}

export default Video
