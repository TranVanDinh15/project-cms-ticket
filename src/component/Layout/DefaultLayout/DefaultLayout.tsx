import React from 'react'
import Header from '../Header/Header'
import './DefaultLayout.scss'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import SideBar from '../SideBar/SideBar';
const { Content, Footer, Sider } = Layout;
type Props= {
  children: React.ReactNode,
}
const DefaultLayout = ({children}: Props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
     <Layout
     className='h-[100vh]'
     >
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        width={'321px'}
        // theme='light'
       className='bg-white'
      >
        <div className="logo" 
        
        />
        <SideBar/>
      </Sider>
      <Layout>
        <Header/>
        <Content>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer, marginRight: 40 ,
          borderRadius: '24px'
          }}>
            {children}
          </div>
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer> */}
      </Layout>
    </Layout>
    
  )
}

export default DefaultLayout