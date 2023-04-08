import  './SideBar.scss'
import React, { useContext, useState } from 'react'
// import image from '../../../image/iconImage/changeTicketIcon.png'
import { menuData } from '../../../data/data'
import { useNavigate } from 'react-router'
import { MyContext } from '../../context/context'
const SideBar = () => {
   const {id, setId}= useContext(MyContext)
   const [actionMenu, setActionMenu]=useState<number>(0)
   const navigate=useNavigate()
   const handleSideBar=(obj: { [key: string]: any } )=>{
        setId(obj.id)
        navigate(obj.path)
    }
  return (
    <div className='w-[321px] h-[1080px] bg-header-sidebar wrapperSideBar'>
        <div className='SideBar__Container'>
            <div className='sms_ticket_logo'>
                <div className='sms_ticket_logo__item'>
                </div>
            </div>
            <ul className='sms_ticket_menu'>
                {
                    menuData.map((menu, index)=>{
                        return (               
               <li className={`sms_ticket_menu__item ${id==menu.id? 'actionMenu' :''}`}
               onClick={()=>{
                handleSideBar(menu)
               }}
               key={menu.id}
               >
                <div className={`sms_ticket_menu__icon `}>
                    {menu.icon}
                </div>
                <div className='sms_ticket_menu__title'>
                    <span
                    className='text-primaryText'
                    >{menu.title}</span>
                </div>
                </li> 
                        )
                    })
                }
               
            </ul>
        </div>
    </div>
  )
}

export default SideBar