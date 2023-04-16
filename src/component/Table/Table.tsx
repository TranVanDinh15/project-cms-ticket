import { Button, Popconfirm, Space, Table, Tag, Tooltip } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Pagination } from 'antd';
import './Table.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faEllipsisVertical, faMinus } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useMemo, useState } from 'react';
import ModalCustom from '../modal/modal';
import { click } from '@testing-library/user-event/dist/click';
import CalendarCustom from '../Calendar/Calendar';
import Item from 'antd/es/list/Item';
interface DataType {
    key: string;
    Bookingcode: string;
    Sove: number;
    status: string;
    useDate: string;
    exportDate: string;
    checkIn: string;
    nameEvent: string;
}
interface DataTypePE {
    key: string;
    Bookingcode: string;
    Sove: number;
    status: string;
    useDate: string;
    exportDate: string;
    checkIn: string;
}
interface DataTypeTC {
    key: string;
    sove: number;
    nameEvent: string;
    useDate: string;
    typeTicket: string;
    gateCheck: string;
    status: number;
}
// interfaceProps
interface props {
    type: string;
    ischecked: number;
}
let color = 'green';

const circle = faCircle as IconProp;
const ellipsisVertical = faEllipsisVertical as IconProp;
const minus = faMinus as IconProp;

const TableConfig = ({ type, ischecked }: props) => {
    console.log(ischecked);
    // State show, hide modal
    const [modalStatus, setModalStatus] = useState(false);
    // đóng mở toolTip
    const [open, setOpen] = useState<boolean>(false);
    // quản lý trạng thái dữ liệu đối soát vé
    const [checkTicketState, setCheckTicketState] = useState<[]>([]);
    const showModal = () => {
        setModalStatus(true);
    };
    const hideModal = () => {
        setModalStatus(false);
    };
    // Nội dung của Tooltip
    const updateContent = () => {
        return (
            <div
                className="flex  flex-col justify-center
            "
            >
                <div className="cursor-pointer mb-[4px]">
                    <p
                        className="font-medium text-[14px] text-[#1E0D03]
                         opacity-70
                    "
                    >
                        Sử dụng vé
                    </p>
                </div>
                <div
                    className="cursor-pointer text-[14px] font-medium text-[#1E0D03]
                opacity-70
                "
                    onClick={() => {
                        setModalStatus(true);
                        setOpen(false);
                    }}
                >
                    <p>Đổi ngày sử dụng</p>
                </div>
            </div>
        );
    };
    // Cột của gói gia đình
    const columnsPF: ColumnsType<DataType> = [
        {
            title: 'STT',
            dataIndex: 'key',
            key: 'key',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Bookingcode',
            dataIndex: 'Bookingcode',
            key: 'Bookingcode',
        },
        {
            title: 'Số vé',
            dataIndex: 'Sove',
            key: 'Sove',
        },
        {
            title: 'Tên sự kiện',
            dataIndex: 'nameEvent',
            key: 'namEvent',
        },
        {
            title: 'Tình trạng sử dụng',
            key: 'status',
            dataIndex: 'status',
            render: (_, record) => (
                <Space size="middle">
                    {record.status == 'Chưa sử dụng' && (
                        <Tag
                            color={color}
                            className="tagTable"
                            icon={<FontAwesomeIcon icon={circle} />}
                            style={{
                                backgroundColor: '#DEF7E0',
                                border: '1px solid #03AC00',
                                color: '#03AC00',
                            }}
                        >
                            {record.status}
                        </Tag>
                    )}
                    {record.status == 'Đã sử dụng' && (
                        <Tag
                            color="#EAF1F8"
                            className="tagTable"
                            icon={
                                <FontAwesomeIcon
                                    icon={circle}
                                    style={{
                                        color: '#919DBA',
                                    }}
                                />
                            }
                            style={{
                                color: '#919DBA',
                                border: '1px solid #919DBA',
                            }}
                        >
                            {record.status}
                        </Tag>
                    )}
                    {record.status == 'Hết hạn' && (
                        <Tag
                            color="volcano"
                            icon={<FontAwesomeIcon icon={circle} />}
                            className="tagTable"
                            style={{
                                backgroundColor: '#F8EBE8',
                                border: '1px solid #FD5959',
                                color: '#FD5959',
                            }}
                        >
                            {record.status}
                        </Tag>
                    )}
                </Space>
            ),
        },
        {
            title: 'Ngày sử dụng',
            dataIndex: 'useDate',
            key: 'useDate',
        },
        {
            title: 'Ngày xuất vé',
            dataIndex: 'exportDate',
            key: 'exportDate',
        },
        {
            title: 'Cổng check-in',
            dataIndex: `checkIn`,
            render: (_, record) => (
                <>
                    {record.checkIn ? (
                        record.checkIn
                    ) : (
                        <div className="MinusIcon">
                            <FontAwesomeIcon
                                icon={minus}
                                style={{
                                    color: '#1E0D03',
                                    fontSize: '16px',
                                    cursor: 'pointer',
                                }}
                            />
                        </div>
                    )}
                </>
            ),
        },
        {
            title: '',
            dataIndex: `checkIn`,
            render: (_, record) => (
                <>
                    {record.checkIn ? (
                        <div></div>
                    ) : (
                        <Tooltip placement="left" title={updateContent} color="#FFD2A8">
                            <div
                                className="MinusIcon"
                                onClick={() => {
                                    setOpen(true);
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={ellipsisVertical}
                                    style={{
                                        cursor: 'pointer',
                                        color: '#1E0D03',
                                        fontSize: '16px',
                                    }}
                                />
                            </div>
                        </Tooltip>
                    )}
                </>
            ),
        },
    ];
    // data của gói gia đình
    const dataPF: DataType[] = [
        {
            key: '1',
            Bookingcode: 'ALTFGHJU',
            Sove: 12723737,
            nameEvent: 'Hội chợ triển lãm tiêu dùng 2021',
            status: 'Đã sử dụng',
            useDate: '4/4/2023',
            exportDate: '5/4/2023',
            checkIn: '',
        },
        {
            key: '2',
            Bookingcode: 'ALTFGHJU',
            Sove: 12723737,
            nameEvent: 'Hội chợ triển lãm tiêu dùng 2021',
            status: 'Chưa sử dụng',
            useDate: '4/4/2023',
            exportDate: '5/4/2023',
            checkIn: 'Cổng 1',
        },
        {
            key: '3',
            Bookingcode: 'ALTFGHJU',
            Sove: 12723737,
            nameEvent: 'Hội chợ triển lãm tiêu dùng 2021',
            status: 'Hết hạn',
            useDate: '4/4/2023',
            exportDate: '5/4/2023',
            checkIn: 'Cổng 1',
        },
    ];
    // Cột của gói sự kiện
    const columnsPE: ColumnsType<DataTypePE> = [
        {
            title: 'STT',
            dataIndex: 'key',
            key: 'key',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Bookingcode',
            dataIndex: 'Bookingcode',
            key: 'Bookingcode',
        },
        {
            title: 'Số vé',
            dataIndex: 'Sove',
            key: 'Sove',
        },
        {
            title: 'Tình trạng sử dụng',
            key: 'status',
            dataIndex: 'status',
            render: (_, record) => (
                <Space size="middle">
                    {record.status == 'Chưa sử dụng' && (
                        <Tag
                            color={color}
                            className="tagTable"
                            icon={<FontAwesomeIcon icon={circle} />}
                            style={{
                                backgroundColor: '#DEF7E0',
                                border: '1px solid #03AC00',
                                color: '#03AC00',
                            }}
                        >
                            {record.status}
                        </Tag>
                    )}
                    {record.status == 'Đã sử dụng' && (
                        <Tag
                            color="#EAF1F8"
                            className="tagTable"
                            icon={
                                <FontAwesomeIcon
                                    icon={circle}
                                    style={{
                                        color: '#919DBA',
                                    }}
                                />
                            }
                            style={{
                                color: '#919DBA',
                                border: '1px solid #919DBA',
                            }}
                        >
                            {record.status}
                        </Tag>
                    )}
                    {record.status == 'Hết hạn' && (
                        <Tag
                            color="volcano"
                            icon={<FontAwesomeIcon icon={circle} />}
                            className="tagTable"
                            style={{
                                backgroundColor: '#F8EBE8',
                                border: '1px solid #FD5959',
                                color: '#FD5959',
                            }}
                        >
                            {record.status}
                        </Tag>
                    )}
                </Space>
            ),
        },
        {
            title: 'Ngày sử dụng',
            dataIndex: 'useDate',
            key: 'useDate',
        },
        {
            title: 'Ngày xuất vé',
            dataIndex: 'exportDate',
            key: 'exportDate',
        },
        {
            title: 'Cổng check-in',
            dataIndex: `checkIn`,
            render: (_, record) => (
                <>
                    {record.checkIn ? (
                        record.checkIn
                    ) : (
                        <div className="MinusIcon">
                            <FontAwesomeIcon
                                icon={minus}
                                style={{
                                    color: '#1E0D03',
                                    fontSize: '16px',
                                    cursor: 'pointer',
                                }}
                            />
                        </div>
                    )}
                </>
            ),
        },
        {
            title: '',
            dataIndex: `checkIn`,
            render: (_, record) => (
                <>
                    {record.checkIn ? (
                        <div></div>
                    ) : (
                        <Tooltip placement="left" title={updateContent} color="#FFD2A8">
                            <div
                                className="MinusIcon"
                                onClick={() => {
                                    setOpen(true);
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={ellipsisVertical}
                                    style={{
                                        cursor: 'pointer',
                                        color: '#1E0D03',
                                        fontSize: '16px',
                                    }}
                                />
                            </div>
                        </Tooltip>
                    )}
                </>
            ),
        },
    ];
    // data của gói gia sự kiện
    const dataPE: DataTypePE[] = [
        {
            key: '1',
            Bookingcode: 'ALTFGHJU',
            Sove: 12723737,
            status: 'Đã sử dụng',
            useDate: '4/4/2023',
            exportDate: '5/4/2023',
            checkIn: '',
        },
        {
            key: '2',
            Bookingcode: 'ALTFGHJU',
            Sove: 12723737,
            status: 'Chưa sử dụng',
            useDate: '4/4/2023',
            exportDate: '5/4/2023',
            checkIn: 'Cổng 1',
        },
        {
            key: '3',
            Bookingcode: 'ALTFGHJU',
            Sove: 12723737,
            status: 'Hết hạn',
            useDate: '4/4/2023',
            exportDate: '5/4/2023',
            checkIn: 'Cổng 1',
        },
    ];
    // Cột của đối soát vé
    const columnsCT: ColumnsType<DataTypeTC> = [
        {
            title: 'STT',
            dataIndex: 'key',
            key: 'key',
            // render: (text) => <a>{text}</a>,
        },
        {
            title: 'Số vé',
            dataIndex: 'sove',
            key: 'sove',
        },
        {
            title: 'Tên sự kiện',
            dataIndex: 'nameEvent',
            key: 'nameEvent',
        },
        {
            title: 'Ngày sử dụng',
            dataIndex: 'useDate',
            key: 'useDate',
        },
        {
            title: 'Loại vé',
            dataIndex: 'typeTicket',
            key: 'typeTicket',
        },
        {
            title: 'Cổng check-in',
            dataIndex: 'gateCheck',
            key: 'gateCheck',
        },
        {
            title: '',
            dataIndex: 'status',
            key: 'status',
            render: (text) => (
                <i
                    className="text-[14px] text-[#A5A8B1] font-[500]"
                    style={{
                        color: text == 1 ? '#FD5959' : '#A5A8B1',
                    }}
                >
                    {text == 1 ? 'Đã đối soát' : 'Chưa đối soát'}
                </i>
            ),
        },
    ];
    // data của bảng đối soát vé
    const dataTC: DataTypeTC[] = [
        {
            key: '1',
            sove: 205314876321,
            nameEvent: 'Hội chợ triển lãm tiêu dùng 2021',
            useDate: '14/04/2021',
            typeTicket: 'Vé cổng',
            gateCheck: 'Cổng 1',
            status: 0,
        },
        {
            key: '2',
            sove: 205314876321,
            nameEvent: 'Hội chợ triển lãm tiêu dùng 2021',
            useDate: '14/04/2021',
            typeTicket: 'Vé cổng',
            gateCheck: 'Cổng 1',
            status: 1,
        },
        {
            key: '3',
            sove: 205314876321,
            nameEvent: 'Hội chợ triển lãm tiêu dùng 2021',
            useDate: '14/04/2021',
            typeTicket: 'Vé cổng',
            gateCheck: 'Cổng 1',
            status: 1,
        },
        {
            key: '4',
            sove: 205314876321,
            nameEvent: 'Hội chợ triển lãm tiêu dùng 2021',
            useDate: '14/04/2021',
            typeTicket: 'Vé cổng',
            gateCheck: 'Cổng 1',
            status: 0,
        },
        {
            key: '5',
            sove: 205314876321,
            nameEvent: 'Hội chợ triển lãm tiêu dùng 2021',
            useDate: '14/04/2021',
            typeTicket: 'Vé cổng',
            gateCheck: 'Cổng 1',
            status: 1,
        },
        {
            key: '6',
            sove: 205314876321,
            nameEvent: 'Hội chợ triển lãm tiêu dùng 2021',
            useDate: '14/04/2021',
            typeTicket: 'Vé cổng',
            gateCheck: 'Cổng 1',
            status: 1,
        },
        {
            key: '7',
            sove: 205314876321,
            nameEvent: 'Hội chợ triển lãm tiêu dùng 2021',
            useDate: '14/04/2021',
            typeTicket: 'Vé cổng',
            gateCheck: 'Cổng 1',
            status: 1,
        },
        {
            key: '8',
            sove: 205314876321,
            nameEvent: 'Hội chợ triển lãm tiêu dùng 2021',
            useDate: '14/04/2021',
            typeTicket: 'Vé cổng',
            gateCheck: 'Cổng 1',
            status: 1,
        },
        {
            key: '9',
            sove: 205314876321,
            nameEvent: 'Hội chợ triển lãm tiêu dùng 2021',
            useDate: '14/04/2021',
            typeTicket: 'Vé cổng',
            gateCheck: 'Cổng 1',
            status: 1,
        },
        {
            key: '10',
            sove: 205314876321,
            nameEvent: 'Hội chợ triển lãm tiêu dùng 2021',
            useDate: '14/04/2021',
            typeTicket: 'Vé cổng',
            gateCheck: 'Cổng 1',
            status: 1,
        },
    ];
    // data vé chưa đối soát
    const uncontested = dataTC.filter((item) => {
        return item.status == 0;
    });
    // data vé đã đối soát
    const checked = dataTC.filter((item) => {
        return item.status == 1;
    });
    return (
        <>
            {
                // Kí hiệu gói gia đình bằng PF và goi sự kiện bằng PE
                // Bảng gói gia đình
                type == 'PF' && (
                    <Table
                        columns={columnsPF}
                        dataSource={dataPF}
                        style={{
                            marginTop: '31px',
                        }}
                        pagination={false}
                    />
                )
            }
            {/* Bảng gói sự kiện */}
            {type == 'PE' && (
                <Table
                    columns={columnsPE}
                    dataSource={dataPE}
                    style={{
                        marginTop: '31px',
                    }}
                    pagination={false}
                />
            )}
            {/* Bảng đối soát vé */}
            {type == 'TC' && (
                <Table
                    columns={columnsCT}
                    dataSource={ischecked == 1 ? dataTC : ischecked == 2 ? checked : uncontested}
                    style={{
                        marginTop: '31px',
                    }}
                    pagination={false}
                />
            )}
            <Pagination
                defaultCurrent={1}
                total={200}
                style={{
                    marginTop: '53px',
                    display: 'flex',
                    justifyContent: 'center',
                }}
                showSizeChanger={false}
            />
            <ModalCustom
                showModal={showModal}
                handleCancel={hideModal}
                handleOk={showModal}
                isModalOpen={modalStatus}
                width={758}
            >
                <div className="ModalUpdateTicket">
                    <div className="titleUpdateTicket">
                        <p>Đổi ngày sử dụng vé</p>
                    </div>
                    <div className="updateTicketContent">
                        <div className="updateTicketContent__item">
                            <div>
                                <p>Số vé</p>
                            </div>
                            <div>
                                <p>PKG20210502</p>
                            </div>
                        </div>
                        <div className="updateTicketContent__item">
                            <div>
                                <p>Số vé</p>
                            </div>
                            <div>
                                <p>Vé cổng - Gói sự kiện </p>
                            </div>
                        </div>
                        <div className="updateTicketContent__item">
                            <div>
                                <p>Tên sự kiện</p>
                            </div>
                            <div>
                                <p>Hội trợ triển lãm hàng tiêu dùng 2021</p>
                            </div>
                        </div>
                        <div className="updateTicketContent__item">
                            <div>
                                <p>Hạn sử dụng</p>
                            </div>
                            <div>
                                <CalendarCustom />
                            </div>
                        </div>
                        <div className="updateTicketContent__footer">
                            <Button>Hủy</Button>
                            <Button>Lưu</Button>
                        </div>
                    </div>
                </div>
            </ModalCustom>
        </>
    );
};
export default TableConfig;
