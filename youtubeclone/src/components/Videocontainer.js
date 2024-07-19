import axios from "axios";
import { useEffect } from "react"
import React from 'react'
import { YOUTUBE_VIDEO_API } from "../Constant/Youtube";
import Video from "./Video";
import { Link } from "react-router-dom";
import API_KEY from "../Constant/Youtube";
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideo } from "./utils/Slice";


function Videocontainer() {


    const dispatch=useDispatch()
    
    const video=useSelector((store)=>store.app.video);
    const category=useSelector((store)=>store.app.category)
    let Videobox=async()=>{
        try{
            let resp= await axios.get(`${YOUTUBE_VIDEO_API}`);
            
            
            dispatch( setHomeVideo(resp?.data?.items))

        }catch(error){
            console.log(error);
        }
    }
    const SearchVideoBYcategory=async()=>{
       try{
        const response= await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`)
        dispatch(setHomeVideo(response.data.items))
       } catch(error){
        console.log(error);
       }
    }
    useEffect(()=>{
      if(category==='All'){
        Videobox()
      }else{
        SearchVideoBYcategory(category)
      }
    },[category])
   
  return (
    <div className="grid grid-cols-3 gap-2">
   {
    video.map((item)=>{
        return(
           <Link to={`/watch?v=${typeof  item.id=== "object"? item.id.videoId : item.id}`} key={item.id}>
             <Video  item={item}></Video>
           </Link>
        )
    })
   }
       
    </div>
  )
}

export default Videocontainer


