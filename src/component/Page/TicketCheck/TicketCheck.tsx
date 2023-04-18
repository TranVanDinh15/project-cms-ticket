import React, { useState } from 'react';
import DefaultLayout from '../../Layout/DefaultLayout/DefaultLayout';
import SearchButton from '../../common/SearchButton';
import { Button } from 'antd';
import './TicketCheck.scss';
import type { RadioChangeEvent } from 'antd';
import { Radio, Space } from 'antd';
import CalendarCustom from '../../Calendar/Calendar';
import TableConfig from '../../Table/Table';
const TicketCheck = () => {
    // Lưu trữ giá trị của trạng thái  lọc
    const [valueStatusFilter, setValueStatusFilter] = useState(1);
    // Xử lý thay đổi khi thay đổi lựa chọ lọc
    const onChangeStatus = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValueStatusFilter(e.target.value);
    };
    const contentFilterTicket = (
        <div className="filterTicket">
            <div className="filterTicket__title">
                <p>Lọc vé</p>
            </div>
            <div className="filterTicket__Item !mb-[90px]">
                <div className="filterTicket__Item__title">
                    <p>Tình trạng đối soát</p>
                </div>
                <div className="filterTicket__Item__Radio">
                    <Radio.Group onChange={onChangeStatus} value={valueStatusFilter}>
                        <Space direction="vertical">
                            <Radio value={1}>Tất cả</Radio>
                            <Radio value={2}>Đã đối soát</Radio>
                            <Radio value={3}>Chưa đối soát</Radio>
                        </Space>
                    </Radio.Group>
                </div>
            </div>
            <div className="filterTicket__Item">
                <div className="filterTicket__Item__title">
                    <p>Loại vé</p>
                </div>
                <div className="filterTicket__Item__Text">
                    <p>Vé cổng</p>
                </div>
            </div>
            <div className="filterTicket__Item">
                <div className="filterTicket__Item__title">
                    <p>Từ ngày</p>
                </div>
                <div className="filterTicket__Item__Date">
                    <CalendarCustom type="date" />
                </div>
            </div>
            <div className="filterTicket__Item">
                <div className="filterTicket__Item__title">
                    <p>Đến ngày</p>
                </div>
                <div className="filterTicket__Item__Date">
                    <CalendarCustom type="date" />
                </div>
            </div>
            <div className="flex justify-center mt-[43px] mb-[43px]">
                <Button
                    style={{
                        border: '1px solid rgb(255, 153, 60)',
                        borderRadius: '8px',
                        padding: '23px 67px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'rgb(255, 153, 60)',
                        fontSize: '18px',
                        fontWeight: '700',
                    }}
                >
                    Lọc
                </Button>
            </div>
        </div>
    );
    return (
        // <DefaultLayout isFilterTicket={true} childComponent={contentFilterTicket}>
        <div className="wrapperTicketCheck flex">
            <div className="wrapperTicketCheck__ItemOne">
                <div
                    className="ListTicketTitle w-[276px] text-[36px] 
            font-bold mb-[32px] "
                >
                    <p>Đối soát vé</p>
                </div>
                <SearchButton>
                    <></>
                </SearchButton>
                <TableConfig type="TC" ischecked={valueStatusFilter} />
            </div>
            {contentFilterTicket}
        </div>
        // </DefaultLayout>
    );
};

export default TicketCheck;
