import React from 'react';
import Header from '../Header/Header';
import './DefaultLayout.scss';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import SideBar from '../SideBar/SideBar';
const { Content, Footer, Sider } = Layout;
type Props = {
    children: React.ReactNode;
    isFilterTicket: boolean;
    childComponent: React.ReactNode;
};
const DefaultLayout = ({ children, isFilterTicket, childComponent }: Props) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout className="h-[100vh]">
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
                className="bg-white"
            >
                <div className="logo" />
                <SideBar />
            </Sider>
            <Layout>
                <Header />
                <div className="flex">
                    <Content>
                        <div
                            style={{
                                padding: 24,
                                minHeight: 360,
                                background: colorBgContainer,
                                marginRight: isFilterTicket ? 24 : 40,
                                borderRadius: '24px',
                                width: isFilterTicket ? '1097px' : 'auto',
                            }}
                        >
                            {children}
                        </div>
                    </Content>
                    {isFilterTicket && (
                        <Content>
                            <div
                                style={{
                                    padding: 24,
                                    minHeight: 360,
                                    background: colorBgContainer,
                                    marginRight: 40,
                                    borderRadius: '24px',
                                    width: '446px',
                                }}
                            >
                                {childComponent}
                            </div>
                        </Content>
                    )}
                </div>
                {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer> */}
            </Layout>
        </Layout>
    );
};

export default DefaultLayout;
