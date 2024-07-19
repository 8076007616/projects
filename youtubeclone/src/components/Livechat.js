import React, { useEffect } from 'react';
import Chatmessage from './Chatmessage';
import {  useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setMessage } from './utils/ChatSlice';
import { generateRandomMessage,generateRandomName } from './utils/Helper';
const Livechat = () => {
  const dispatch=useDispatch()
  const messages = useSelector((store) => store.chat.messages);
  useEffect(()=>{
  const intervalid=  setInterval(()=>{
      dispatch(setMessage(
        {
          name:generateRandomName(),
          message:generateRandomMessage(),
        }
      ))
    },2000)
    return (()=>{
      clearInterval(intervalid);
    })
   },[])
  
  
  return (
    <div className='px-4 py-1'>
      {
        messages.map((item, idx) => (
          <Chatmessage key={idx} item={item} />
        ))
      }
    </div>
  );
}

export default Livechat;

