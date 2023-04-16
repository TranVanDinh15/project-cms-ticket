import React from 'react';
import DefaultLayout from '../../Layout/DefaultLayout/DefaultLayout';
import SearchButton from '../../common/SearchButton';
import { Button } from 'antd';

const PackageTicket = () => {
    return (
        <DefaultLayout childComponent={<></>} isFilterTicket={false}>
            {/* {contentFilterTicket} */}
            <div className="packageTicketWrapper">
                <div className="wrapperTicketCheck__ItemOne">
                    <div
                        className="ListTicketTitle w-[276px] text-[36px] 
            font-bold mb-[32px] "
                    >
                        <p>Đối soát vé</p>
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
                            >
                                {/* <FilterOutlined /> */}
                                Thêm gói vé
                            </Button>
                        </div>
                    </SearchButton>
                </div>
            </div>
        </DefaultLayout>
    );
};
export default PackageTicket;
