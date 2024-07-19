import React from 'react'
import { CiHome } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useSelector } from 'react-redux';
const sideBarItem=[
    {
        icons:<CiHome size={'24px'}/>,
        title:"Home"
    },
    {
        icons:<SiYoutubeshorts size={'24px'}/>,
        title:"Shorts"
    },
    {
        icons:<MdOutlineSubscriptions size={'24px'}/>,
        title:"Subscriptions",
    },
    {
        icons:<CiHome size={'24px'}/>,
        title:"Home"
    },
    {
        icons:<SiYoutubeshorts size={'24px'}/>,
        title:"Shorts"
    },
    {
        icons:<MdOutlineSubscriptions size={'24px'}/>,
        title:"Subscriptions",
    },
    {
        icons:<CiHome size={'24px'}/>,
        title:"Home"
    },
    {
        icons:<SiYoutubeshorts size={'24px'}/>,
        title:"Shorts"
    },
    {
        icons:<MdOutlineSubscriptions size={'24px'}/>,
        title:"Subscriptions",
    },
    {
        icons:<CiHome size={'24px'}/>,
        title:"Home"
    },
    {
        icons:<SiYoutubeshorts size={'24px'}/>,
        title:"Shorts"
    },
    {
        icons:<MdOutlineSubscriptions size={'24px'}/>,
        title:"Subscriptions",
    },
    {
        icons:<CiHome size={'24px'}/>,
        title:"Home"
    },
    {
        icons:<SiYoutubeshorts size={'24px'}/>,
        title:"Shorts"
    },
    {
        icons:<MdOutlineSubscriptions size={'24px'}/>,
        title:"Subscriptions",
    }, {
        icons:<CiHome size={'24px'}/>,
        title:"Home"
    },
    {
        icons:<SiYoutubeshorts size={'24px'}/>,
        title:"Shorts"
    },
    {
        icons:<MdOutlineSubscriptions size={'24px'}/>,
        title:"Subscriptions",
    }
];


function Sidebar() {
const open = useSelector((store)=>store.app.open)
  return (
    <div className={`reltive ${open?'w-[20%]' : "w-[7%]"} left-0 p-5 h-[calc(100vh-4.625rem)] bg-white overflow-y-scroll overflow-x-hidden`}>
    {
        sideBarItem.map((item,index)=>{
            return (
                <div key={index} className='my-3 ml-2 flex'>
                    {item.icons}
                   <p className={`ml-5 ${open ? "" : "hidden"}`}>{item.title}</p>
                </div>
            )
        })
    }
    </div>
  )
}

export default Sidebar
