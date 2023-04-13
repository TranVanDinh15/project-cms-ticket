import './SideBar.scss';
import React, { useContext, useState } from 'react';
import { menuData } from '../../../data/data';
import { useNavigate } from 'react-router';
import { MyContext } from '../../context/context';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HomeOutlined } from '@ant-design/icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faDesktop, faGear, faHouse, faList, faReceipt, faTicket } from '@fortawesome/free-solid-svg-icons';
const houseIcon = faHouse as IconProp;
const ticketIcon = faTicket as IconProp;
const receiptIcon = faReceipt as IconProp;
const listIcon = faList as IconProp;
const desktopIcon = faDesktop as IconProp;
const gearIcon = faGear as IconProp;
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}
const items: MenuItem[] = [
    getItem('Trang chủ', '/', <FontAwesomeIcon icon={houseIcon} />),
    getItem('Quản lý vé', '/TicketManagement', <FontAwesomeIcon icon={ticketIcon} />),
    getItem('Đối soát vé', '/TicketCheck', <FontAwesomeIcon icon={receiptIcon} />),
    getItem('Danh sách sự kiện', '4', <FontAwesomeIcon icon={listIcon} />),
    getItem('Quản lý thiết bị', '5', <FontAwesomeIcon icon={desktopIcon} />),
    getItem('Cài đặt', '/setting', <FontAwesomeIcon icon={gearIcon} />, [
        getItem('Gói dịch vụ ', '/setting/goi-dich-vu'),
    ]),
];
const SideBar = () => {
    const { id, setId } = useContext(MyContext);
    console.log(id);
    const navigate = useNavigate();

    const [collapsed, setCollapsed] = useState(false);
    const [currentKey, setCurrentKey] = useState<string>('/');
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    const onClick: MenuProps['onClick'] = (e) => {
        // console.log('click ', e);
        // setCurrent(e.key);
        navigate(e.key);
        setId(e.key);
    };
    return (
        <div className="w-[321px] h-[1080px] bg-header-sidebar wrapperSideBar">
            <div className="SideBar__Container">
                <div className="sms_ticket_logo">
                    <div className="sms_ticket_logo__item"></div>
                </div>

                <Menu
                    defaultSelectedKeys={[id]}
                    // defaultOpenKeys={['sub1']}
                    mode="inline"
                    inlineCollapsed={collapsed}
                    items={items}
                    onClick={onClick}
                    style={{
                        background: '#f9f6f4',
                        padding: '0 33px',
                        fontSize: '16px',
                        border: 'none',
                    }}
                />
            </div>
        </div>
    );
};

export default SideBar;
