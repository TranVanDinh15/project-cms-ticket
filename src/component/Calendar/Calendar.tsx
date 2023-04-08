import { CalendarOutlined } from "@ant-design/icons"
import React, { useState } from "react"
import { Calendar, theme } from 'antd';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import type { Dayjs } from 'dayjs';
import ModalCustom from "../modal/modal";
const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  
const CalendarCustom=()=>{
    const { token } = theme.useToken();

    const wrapperStyle: React.CSSProperties = {
      width: 300,
      border: `1px solid ${token.colorBorderSecondary}`,
      borderRadius: token.borderRadiusLG,
    };
    const [isCalendar, setIsCalendar]=useState<boolean>(false)
    const handleShow=()=>{
        setIsCalendar(true)
    }
    const handleCancel=()=>{
        setIsCalendar(false)
    }
    return (
        <div className="CalendarWrapper ">
            <div className="CalendarContainer flex w-[155px] h-[40px] 
            item-center border-solid border-[1px] border-[#E6E0E0] justify-center rounded-[4px]
            cursor-pointer
            "
            onClick={handleShow}
            >
                <div className="CalendarText  flex items-center text-[14px] font-medium">
                    Tháng 4, 2021
                </div>
                <div className="calendarIcon
                flex items-center ml-[13px] 
                ">
                <CalendarOutlined 
                style={{
                    color: '#FF993C'
                }}
                />
                </div>
            </div>
            <ModalCustom isModalOpen={isCalendar} handleCancel={handleCancel}
            handleOk={handleShow} showModal={handleShow} width={370}
            >
              <Calendar fullscreen={false} onPanelChange={onPanelChange} />
            </ModalCustom>
            
        </div>
    )
}
export default CalendarCustom