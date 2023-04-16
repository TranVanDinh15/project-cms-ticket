import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { Doughnut } from 'react-chartjs-2';
interface props {
    title: string;
    lable: boolean;
}
ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ title, lable }: props) {
    const data = {
        labels: lable ? ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'] : [],
        datasets: [
            {
                label: '# of Votes',
                data: [40, 60],
                backgroundColor: ['#4F75FF', '#FF8A48'],
                borderColor: ['#4F75FF', '#FF8A48'],
                borderWidth: 1,
            },
        ],
    };
    return (
        <div style={{ width: 301, height: 246, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
                style={{
                    fontSize: '18px',
                    fontWeight: '600',
                }}
            >
                {title}
            </div>
            <Doughnut data={data} />;
        </div>
    );
}
