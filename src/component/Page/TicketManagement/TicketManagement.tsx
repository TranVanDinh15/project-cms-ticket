import React, { useState } from 'react';
import DefaultLayout from '../../Layout/DefaultLayout/DefaultLayout';
import './TicketManagement.scss';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import TableConfig from '../../Table/Table';
import ModalCustom from '../../modal/modal';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import { Checkbox, Col, Row } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import TabsCustom from '../../UI/Tabs/Tabs';
import CalendarCustom from '../../Calendar/Calendar';
import SearchButton from '../../common/SearchButton';
const TicketManagement = () => {
    const useStatus = [
        {
            id: 0,
            title: 'Tất cả',
        },
        {
            id: 1,
            title: 'Đã sử dụng',
        },
        {
            id: 2,
            title: 'Chưa sử dụng',
        },
        {
            id: 3,
            title: 'Hết hạn',
        },
    ];
    const checkData = [
        {
            id: 0,
            title: 'Tất cả',
        },
        {
            id: 1,
            title: 'Cổng 1',
            disable: true,
        },
        {
            id: 2,
            title: 'Cổng 2',
            disable: true,
        },
        {
            id: 3,
            title: 'Cổng 3',
            disable: true,
        },
        {
            id: 4,
            title: 'Cổng 4',
            disable: true,
        },
        {
            id: 5,
            title: 'Cổng 5',
            disable: true,
        },
    ];
    const [radioFilter, setradioFilter] = useState('Tất cả');
    const [isShow, setIsShow] = useState<boolean>(false);
    const [isDisable, setIsDisable] = useState<boolean>(false);
    const [checked, setChecked] = useState<string[]>([]);
    const handleCancel = () => {
        setIsShow(false);
    };
    const handleShow = () => {
        setIsShow(true);
    };
    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setradioFilter(e.target.value);
    };
    const onChangeCheckBox = (checkedValues: CheckboxValueType[]) => {
        console.log('checked = ', checkedValues);
        if (checkedValues.includes('Tất cả')) {
            setIsDisable(true);
            console.log(checkedValues);
            const map = checkedValues.map((check) => {
                return check.toLocaleString();
            });
            setChecked(map);
        } else {
            setIsDisable(false);
            const map = checkedValues.map((check) => {
                return check.toLocaleString();
            });
            setChecked(map);
        }
    };
    // hiển thị nội dung của gói gia đình
    const childrenPF = (
        <>
            <SearchButton>
                <div className="filterTicketM flex">
                    <Button className="flex items-center " onClick={handleShow}>
                        <FilterOutlined />
                        Lọc vé
                    </Button>
                    <Button
                        className="flex items-center ml-[10px]
          
          "
                    >
                        Xuất file (.csv)
                    </Button>
                </div>
            </SearchButton>
            <TableConfig type="PF" ischecked={0} />,
        </>
    );
    // Hiển thị nội dung của gói
    const childrenPE = (
        <>
            <SearchButton>
                <div className="filterTicketM flex">
                    <Button className="flex items-center " onClick={handleShow}>
                        <FilterOutlined />
                        Lọc vé
                    </Button>
                    <Button
                        className="flex items-center ml-[10px]
          
          "
                    >
                        Xuất file (.csv)
                    </Button>
                </div>
            </SearchButton>
            <TableConfig type="PE" ischecked={0} />,
        </>
    );
    const tabItems = [
        {
            key: '1',
            label: `Gói gia đình`,
            children: childrenPF,
        },
        {
            key: '2',
            label: `Gói sự kiện`,
            children: childrenPE,
        },
    ];
    return (
        <>
            <DefaultLayout isFilterTicket={false} childComponent={<div></div>}>
                <div className="TicketManagementWrapper ">
                    <div
                        className="ListTicketTitle w-[276px] text-[36px] 
            font-bold "
                    >
                        <p>Danh sách vé</p>
                    </div>
                    <div className="TabsTM">
                        <TabsCustom items={tabItems} />
                    </div>
                </div>
                <ModalCustom
                    isModalOpen={isShow}
                    handleOk={handleShow}
                    handleCancel={handleCancel}
                    showModal={handleShow}
                    width={634}
                >
                    <div className="TitleFilter">
                        <p>Lọc Vé</p>
                    </div>
                    <div className="CalendarFilter">
                        <div className="CalendarFilter_Item">
                            <div className="mb-[10px] font-semibold">
                                <p className="text-[16px]">Từ ngày</p>
                            </div>
                            <CalendarCustom type="date" />
                        </div>
                        <div className="CalendarFilter_Item">
                            <div className="mb-[10px] font-semibold">
                                <p className="text-[16px]">Đến ngày</p>
                            </div>
                            <CalendarCustom type="date" />
                        </div>
                    </div>
                    <div className="RadioFilter">
                        <div className="RadioFilter__title">
                            <p>Tình trạng sử dụng</p>
                        </div>
                        <Radio.Group
                            onChange={onChange}
                            value={radioFilter}
                            className="flex justify-between gap-[40px]"
                        >
                            {useStatus.map((item) => {
                                return (
                                    <Radio key={item.id} value={item.title} className="text-[16px]">
                                        {item.title}
                                    </Radio>
                                );
                            })}
                        </Radio.Group>
                        <div className="RadioFilter__title">
                            <p>Cổng check - in</p>
                        </div>
                        <Checkbox.Group
                            style={{ width: '100%' }}
                            onChange={onChangeCheckBox}
                            className="flex justify-between "
                        >
                            <Row className="flex justify-between ">
                                {checkData.map((item) => {
                                    return (
                                        <Col
                                            // className='ml-[px]'
                                            span={8}
                                        >
                                            <Checkbox
                                                value={item.title}
                                                disabled={item.disable == isDisable ? true : false}
                                                className="text-[16px]"
                                            >
                                                {item.title}
                                            </Checkbox>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Checkbox.Group>
                        <div className="flex justify-center">
                            <Button
                                style={{
                                    height: '48px',
                                    width: '160px',
                                    marginTop: '42px',
                                    marginBottom: '23px',
                                    border: '1.5px solid #FF993C',
                                    fontSize: '18px',
                                    color: '#FF993C',
                                    fontWeight: '700',
                                    borderRadius: '8px',
                                }}
                            >
                                Lọc
                            </Button>
                        </div>
                    </div>
                </ModalCustom>
            </DefaultLayout>
        </>
    );
};

export default TicketManagement;
