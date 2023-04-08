import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Pagination } from 'antd';
import './Table.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
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
let color = 'green';
const circle = faCircle as IconProp;

const columns: ColumnsType<DataType> = [
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
                    <Tag color="volcano" icon={<FontAwesomeIcon icon={circle} />} className="tagTable"
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
        dataIndex: 'checkIn',
        key: 'checkIn',
    },
];
const data: DataType[] = [
    {
        key: '1',
        Bookingcode: 'ALTFGHJU',
        Sove: 12723737,
        nameEvent: 'Hội chợ triển lãm tiêu dùng 2021',
        status: 'Đã sử dụng',
        useDate: '4/4/2023',
        exportDate: '5/4/2023',
        checkIn: 'Cổng 1',
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
const TableConfig = () => {
    return (
        <>
            <Table
                columns={columns}
                dataSource={data}
                style={{
                    marginTop: '31px',
                }}
                pagination={false}
            />
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
        </>
    );
};
export default TableConfig;
