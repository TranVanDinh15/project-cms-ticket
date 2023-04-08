import React from 'react';
import DefaultLayout from '../../Layout/DefaultLayout/DefaultLayout';
import './Home.scss';
import group from '../../../image/picture/Group.png';
// import chartLine from '../../../image/picture/ShapeLine.png';
import { Area } from '@ant-design/plots';
import AreaChart from '../../Chart/Chart';
const Home = () => {
    return (
        <DefaultLayout>
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
                                <div className="Schema">dsaaa</div>
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
                </div>
            </div>
        </DefaultLayout>
    );
};

export default Home;
