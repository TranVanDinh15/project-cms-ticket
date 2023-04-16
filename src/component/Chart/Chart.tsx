import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';
const data = [
    {
        timePeriod: 'Thứ 2',
        value: 120,
    },
    {
        timePeriod: 'Thứ 3',
        value: 230,
    },
    {
        timePeriod: 'Thứ 4',
        value: 200,
    },
    {
        timePeriod: 'Thứ 5',
        value: 240,
    },
    {
        timePeriod: 'Thứ 6',
        value: 210,
    },
    {
        timePeriod: 'Thứ 7',
        value: 260,
    },
    {
        timePeriod: 'Cn',
        value: 190,
    },
];
const AreaChart = () => {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     asyncFetch();
    // }, []);

    // const asyncFetch = () => {
    //     fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
    //         .then((response) => response.json())
    //         .then((json) => setData(json))
    //         .catch((error) => {
    //             console.log('fetch data failed', error);
    //         });
    // };
    const config = {
        data,
        xField: 'timePeriod',
        yField: 'value',
        xAxis: {
            range: [0, 1],
        },
    };

    return (
        <Area
            {...config}
            className={'mr-[56px] '}
            height={227}
            smooth={true}
            areaStyle={{
                cursor: 'pointer',
                fill: 'l(270) 0:#ffffff 0.5:#f7e5de 1:#eb9776',
            }}
            line={{
                style: {
                    stroke: '#FF993C',
                    lineWidth: 3,
                },
            }}
            startOnZero={true}
        />
    );
};
export default AreaChart;
