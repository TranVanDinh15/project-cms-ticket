import React, { Suspense } from 'react';
import DefaultLayout from '../../Layout/DefaultLayout/DefaultLayout';
import './Home.scss';
import AreaChart from '../../Chart/Chart';
import CalendarCustom from '../../Calendar/Calendar';
import PieChart from '../../Chart/PieChart';
const Home = () => {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <DefaultLayout isFilterTicket={false} childComponent={<div></div>}>
                <div className="wrapperHome">
                    <div className="wrapperHome__Container">
                        <div className="Content_home">
                            <div className="Content_home__title">
                                <p>Thống kê</p>
                            </div>
                            <div className="chartWrapper">
                                <div className="RevenueSchema">
                                    <div className="Revenue">
                                        <p>Doanh thu</p>
                                    </div>
                                    <CalendarCustom />
                                </div>
                                <AreaChart />
                            </div>
                            <div className="mt-[40px]">
                                <div className="h-[30px]">
                                    <p
                                        className="text-[14px] font-medium text-primaryText opacity-50
                                leading-[30px]
                                "
                                    >
                                        Tổng doanh thu theo tuần
                                    </p>
                                </div>
                                <div className="flex h-[30px]">
                                    <span
                                        className=" text-[24px]  text-primaryText
                                 font-bold leading-[30px]
                                 "
                                    >
                                        525.145.000
                                    </span>
                                    <p
                                        className="ml-[4px] text-[14px] flex items-end text-primaryText
                                font-medium
                                "
                                    >
                                        đồng
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="PieChartDateWrapper">
                            <CalendarCustom />
                            <div className="PieChart">
                                <PieChart lable={false} title="Gói gia đình" />
                            </div>
                            <div className="PieChart">
                                <PieChart lable={false} title="Gói sự kiện" />
                            </div>
                            <div className="Note">
                                <div className="Note__Item">
                                    <div className="Note__Item__Color"></div>
                                    <div className="Note__Item__content">Vé đã sử dụng</div>
                                </div>
                                <div className="Note__Item">
                                    <div className="Note__Item__Color"></div>
                                    <div className="Note__Item__content">Vé chưa sử dụng</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </Suspense>
    );
};

export default Home;
