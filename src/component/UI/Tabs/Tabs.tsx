import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import './Tabs.scss'
const onChange = (key: string) => {
    console.log(key);
  };
const TabsCustom=({items}:TabsProps)=>{
    return (
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} 
      tabBarStyle={
        {
            color: '#919DBA',
            fontSize: '16px',
            
        }
      }
        />
    )
}
export default TabsCustom