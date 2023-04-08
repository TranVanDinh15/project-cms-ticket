import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faDesktop, faGear, faHouse, faList, faReceipt, faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HomeOutlined } from '@ant-design/icons';
const houseIcon= faHouse as IconProp
const ticketIcon= faTicket as IconProp
const receiptIcon= faReceipt as IconProp
const listIcon= faList as IconProp
const desktopIcon= faDesktop as IconProp
const gearIcon= faGear as IconProp
export const menuData=[
    {
        id: 0,
        icon: <HomeOutlined />,
        title: 'Trang chủ',
        path: '/'
    },
    {
        id: 1,
        icon:<FontAwesomeIcon icon={ticketIcon}/>,
        title: 'Quản lý vé',
        path: '/TicketManagement'
    },
    {
        id: 2,
        icon:<FontAwesomeIcon icon={receiptIcon}/>,
        title: 'Đối soát vé',
        path: '/TicketCheck'
    },
    {
        id: 3,
        icon: <FontAwesomeIcon icon={listIcon}/>,
        title: 'Danh sách sự kiện'
    },
    {
        id: 4,
        icon: <FontAwesomeIcon icon={desktopIcon}/>,
        title: 'Quản lý thiết bị'
    },
    {
        id: 5,
        icon: <FontAwesomeIcon icon={gearIcon}/>,
        title: 'Cài đặt',
        child: [
            {
                title: 'Gói dịch vụ'
            }
        ]
    },
]