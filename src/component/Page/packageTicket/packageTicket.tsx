import React, { useContext, useState } from 'react';
import DefaultLayout from '../../Layout/DefaultLayout/DefaultLayout';
import SearchButton from '../../common/SearchButton';
import { Button } from 'antd';
import TableConfig from '../../Table/Table';
import ModalCustom from '../../modal/modal';
import { MyContext } from '../../context/context';
import { Input } from 'antd';
import './packageTicket.scss';
import CalendarCustom from '../../Calendar/Calendar';
import { Checkbox, Col, Row } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import { Select, Space } from 'antd';
const PackageTicket = () => {
    const { isShow, setIsShow } = useContext(MyContext);
    // Quản lý trạng thái modal thêm gói vé
    const [modalAddPT, setModalAddPT] = useState<boolean>(false);
    // Xử Lý đóng Modal
    const handleCancel = () => {
        setIsShow(false);
    };
    // Xử lý mở Modal
    const handleShow = () => {
        setIsShow(true);
    };
    // Xử lý mở modal thêm gói vé
    const handleShowAddPT = () => {
        setModalAddPT(true);
    };
    // Xử lý đóng modal thêm gói vé
    const handleCloseAddPT = () => {
        setModalAddPT(false);
    };
    // Xử lý khi thay đổi lựa chọn giữa các checkBox
    const onChangeCheck = (checkedValues: CheckboxValueType[]) => {
        console.log('checked = ', checkedValues);
    };
    return (
        // <DefaultLayout childComponent={<></>} isFilterTicket={false}>
        <>
            <div className="packageTicketWrapper ">
                <div className="wrapperTicketCheck__ItemOne">
                    <div
                        className="ListTicketTitle  text-[36px] 
            font-bold mb-[32px] "
                    >
                        <p>Danh sách gói vé</p>
                    </div>
                    <SearchButton>
                        <div className="filterTicketM flex">
                            <Button
                                className="flex items-center 
                                
                                "
                            >
                                Xuất file (.csv)
                            </Button>
                            <Button
                                className="flex items-center ml-[10px]
                            bg-[#FF993C] 
                            "
                                style={{
                                    color: '#fff',
                                    border: 'none',
                                }}
                                onClick={handleShowAddPT}
                            >
                                Thêm gói vé
                            </Button>
                        </div>
                    </SearchButton>
                </div>
                <TableConfig type="LT" ischecked={1} />,
            </div>
            <ModalCustom
                isModalOpen={isShow}
                handleOk={handleShow}
                handleCancel={handleCancel}
                showModal={handleShow}
                width={758}
            >
                <div className="ModalUpdateAdd">
                    <div className="ModalUpdateAdd__title">
                        <p>Cập nhật thông tin gói vé</p>
                    </div>
                    <div className="ModalUpdateAdd__Form">
                        <div className="ModalUpdateAdd__Form__Item">
                            <div className="FormCommon">
                                <div className="FormCommon__title">
                                    <p>Mã sự kiện</p>
                                </div>
                                <div className="FormCommon__input">
                                    <Input placeholder="PKG20210502" />
                                </div>
                            </div>
                            <div className="FormCommon">
                                <div className="FormCommon__title">
                                    <p>Tên sự kiện</p>
                                </div>
                                <div className="FormCommon__input FormCommon__inputTwo">
                                    <Input placeholder="Hội chợ triển lãm hàng tiêu dùng 2021" />
                                </div>
                            </div>
                        </div>
                        <div className="ModalUpdateAdd__Form__Item">
                            <div className="FormCommon">
                                <div className="FormCommon__title">
                                    <p>Ngày áp dụng</p>
                                </div>
                                <div className="FormCommon__date">
                                    <div>
                                        <CalendarCustom type="date" />
                                    </div>
                                    <div className="ml-[10px]">
                                        <CalendarCustom type="time" />
                                    </div>
                                </div>
                            </div>
                            <div className="FormCommon">
                                <div className="FormCommon__title">
                                    <p>Ngày hết hạn</p>
                                </div>
                                <div className="FormCommon__date">
                                    <div>
                                        <CalendarCustom type="date" />
                                    </div>
                                    <div className="ml-[10px]">
                                        <CalendarCustom type="time" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ModalUpdateAdd__Form__Item">
                            <div className="FormCommon">
                                <div className="FormCommon__title">
                                    <p>Giá vé áp dụng</p>
                                </div>
                                <div className="FormCommon__date">
                                    <Checkbox.Group
                                        style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
                                        onChange={onChangeCheck}
                                    >
                                        <Row
                                            style={{
                                                marginBottom: '28px',
                                            }}
                                        >
                                            <Col
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Checkbox value="A">
                                                    <span
                                                        style={{
                                                            fontSize: '16px',
                                                            fontWeight: '500',
                                                            color: '#1E0D03',
                                                            opacity: '0.7',
                                                        }}
                                                    >
                                                        Vé lẻ (vnđ/vé) với giá
                                                    </span>
                                                </Checkbox>
                                                <div>
                                                    <Input
                                                        placeholder="Giá vé"
                                                        style={{
                                                            padding: '10px 12px',
                                                            width: '148px',
                                                            height: '40px',
                                                            background: '#F1F4F8',
                                                            borderRadius: '8px',
                                                            outline: 'none',
                                                            border: 'none',
                                                        }}
                                                    />
                                                </div>
                                                <div
                                                    style={{
                                                        marginLeft: '8px',
                                                        fontSize: '16px',
                                                        fontWeight: '500',
                                                        color: '#1E0D03',
                                                        opacity: '0.7',
                                                    }}
                                                >
                                                    <span>/ vé</span>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Checkbox value="B">
                                                    <span
                                                        style={{
                                                            fontSize: '16px',
                                                            fontWeight: '500',
                                                            color: '#1E0D03',
                                                            opacity: '0.7',
                                                        }}
                                                    >
                                                        Vé lẻ (vnđ/vé) với giá
                                                    </span>
                                                </Checkbox>
                                                <div>
                                                    <Input
                                                        placeholder="Giá vé"
                                                        style={{
                                                            padding: '10px 12px',
                                                            width: '148px',
                                                            height: '40px',
                                                            background: '#F1F4F8',
                                                            borderRadius: '8px',
                                                            outline: 'none',
                                                            border: 'none',
                                                        }}
                                                    />
                                                </div>
                                                <div
                                                    style={{
                                                        marginLeft: '8px',
                                                        fontSize: '16px',
                                                        fontWeight: '500',
                                                        color: '#1E0D03',
                                                        opacity: '0.7',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <div>/</div>
                                                    <Input
                                                        placeholder="Giá vé"
                                                        style={{
                                                            margin: '0 8px',
                                                            width: '72px',
                                                            height: '40px',
                                                            background: '#F1F4F8',
                                                            borderRadius: '8px',
                                                            outline: 'none',
                                                            border: 'none',
                                                        }}
                                                    />
                                                    <div>
                                                        <span>vé</span>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Checkbox.Group>
                                </div>
                            </div>
                        </div>
                        <div className="ModalUpdateAdd__Form__Item">
                            <div className="FormCommon ">
                                <div className="FormCommon__title">
                                    <p>Tình trạng</p>
                                </div>
                                <div className="FormCommon__date select__css">
                                    <Select
                                        defaultValue="Đang áp dụng"
                                        style={{
                                            width: 191,
                                            // height: '40px',
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                        //   onChange={handleChange}
                                        options={[
                                            { value: '1', label: 'Đang áp dụng' },
                                            { value: '0', label: 'Tắt' },
                                        ]}
                                    />
                                    <div className="importantSelect">
                                        <span>*</span>
                                        <span>Là thông tin bắt buộc</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ModalUpdateAdd__Form__Item">
                            <div className="FormCommon FormCommon__btn">
                                <Button>Hủy</Button>
                                <Button>Lưu</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </ModalCustom>
            <ModalCustom
                isModalOpen={modalAddPT}
                handleOk={handleShowAddPT}
                handleCancel={handleCloseAddPT}
                showModal={handleShowAddPT}
                width={758}
            >
                <div className="ModalUpdateAdd">
                    <div className="ModalUpdateAdd__title">
                        <p>Thêm gói vé</p>
                    </div>
                    <div className="ModalUpdateAdd__Form">
                        <div className="ModalUpdateAdd__Form__Item">
                            <div className="FormCommon">
                                <div className="FormCommon__title">
                                    <p>Tên gói vé</p>
                                </div>
                                <div className="FormCommon__input">
                                    <Input placeholder="PKG20210502" />
                                </div>
                            </div>
                        </div>
                        <div className="ModalUpdateAdd__Form__Item">
                            <div className="FormCommon">
                                <div className="FormCommon__title">
                                    <p>Ngày áp dụng</p>
                                </div>
                                <div className="FormCommon__date">
                                    <div>
                                        <CalendarCustom type="date" />
                                    </div>
                                    <div className="ml-[10px]">
                                        <CalendarCustom type="time" />
                                    </div>
                                </div>
                            </div>
                            <div className="FormCommon">
                                <div className="FormCommon__title">
                                    <p>Ngày hết hạn</p>
                                </div>
                                <div className="FormCommon__date">
                                    <div>
                                        <CalendarCustom type="date" />
                                    </div>
                                    <div className="ml-[10px]">
                                        <CalendarCustom type="time" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ModalUpdateAdd__Form__Item">
                            <div className="FormCommon">
                                <div className="FormCommon__title">
                                    <p>Giá vé áp dụng</p>
                                </div>
                                <div className="FormCommon__date">
                                    <Checkbox.Group
                                        style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
                                        onChange={onChangeCheck}
                                    >
                                        <Row
                                            style={{
                                                marginBottom: '28px',
                                            }}
                                        >
                                            <Col
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Checkbox value="A">
                                                    <span
                                                        style={{
                                                            fontSize: '16px',
                                                            fontWeight: '500',
                                                            color: '#1E0D03',
                                                            opacity: '0.7',
                                                        }}
                                                    >
                                                        Vé lẻ (vnđ/vé) với giá
                                                    </span>
                                                </Checkbox>
                                                <div>
                                                    <Input
                                                        placeholder="Giá vé"
                                                        style={{
                                                            padding: '10px 12px',
                                                            width: '148px',
                                                            height: '40px',
                                                            background: '#F1F4F8',
                                                            borderRadius: '8px',
                                                            outline: 'none',
                                                            border: 'none',
                                                        }}
                                                    />
                                                </div>
                                                <div
                                                    style={{
                                                        marginLeft: '8px',
                                                        fontSize: '16px',
                                                        fontWeight: '500',
                                                        color: '#1E0D03',
                                                        opacity: '0.7',
                                                    }}
                                                >
                                                    <span>/ vé</span>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Checkbox value="B">
                                                    <span
                                                        style={{
                                                            fontSize: '16px',
                                                            fontWeight: '500',
                                                            color: '#1E0D03',
                                                            opacity: '0.7',
                                                        }}
                                                    >
                                                        Vé lẻ (vnđ/vé) với giá
                                                    </span>
                                                </Checkbox>
                                                <div>
                                                    <Input
                                                        placeholder="Giá vé"
                                                        style={{
                                                            padding: '10px 12px',
                                                            width: '148px',
                                                            height: '40px',
                                                            background: '#F1F4F8',
                                                            borderRadius: '8px',
                                                            outline: 'none',
                                                            border: 'none',
                                                        }}
                                                    />
                                                </div>
                                                <div
                                                    style={{
                                                        marginLeft: '8px',
                                                        fontSize: '16px',
                                                        fontWeight: '500',
                                                        color: '#1E0D03',
                                                        opacity: '0.7',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <div>/</div>
                                                    <Input
                                                        placeholder="Giá vé"
                                                        style={{
                                                            margin: '0 8px',
                                                            width: '72px',
                                                            height: '40px',
                                                            background: '#F1F4F8',
                                                            borderRadius: '8px',
                                                            outline: 'none',
                                                            border: 'none',
                                                        }}
                                                    />
                                                    <div>
                                                        <span>vé</span>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Checkbox.Group>
                                </div>
                            </div>
                        </div>
                        <div className="ModalUpdateAdd__Form__Item">
                            <div className="FormCommon ">
                                <div className="FormCommon__title">
                                    <p>Tình trạng</p>
                                </div>
                                <div className="FormCommon__date select__css">
                                    <Select
                                        defaultValue="Đang áp dụng"
                                        style={{
                                            width: 191,
                                            // height: '40px',
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                        //   onChange={handleChange}
                                        options={[
                                            { value: '1', label: 'Đang áp dụng' },
                                            { value: '0', label: 'Tắt' },
                                        ]}
                                    />
                                    <div className="importantSelect">
                                        <span>*</span>
                                        <span>Là thông tin bắt buộc</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ModalUpdateAdd__Form__Item">
                            <div className="FormCommon FormCommon__btn">
                                <Button>Hủy</Button>
                                <Button>Lưu</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </ModalCustom>
        </>
        // </DefaultLayout>
    );
};
export default PackageTicket;
