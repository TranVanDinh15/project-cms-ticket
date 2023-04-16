import React, { useState } from 'react';

import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import './Calendar.scss';
import 'moment/locale/vi';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';

function CalendarCustom() {
    const dateFormat = 'YYYY/MM/DD';
    const [isShow, setIsShow] = useState<boolean>(true);
    const handleCancel = () => {
        setIsShow(false);
    };
    const handleShow = () => {
        setIsShow(true);
    };
    // state  radio day and  week
    const [value, setValue] = useState(1);
    // change radio
    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    const renderDayWeek = (
        <Radio.Group onChange={onChange} value={value} className="radioDatePicker">
            <Radio value={1} className="checkedDate">
                Theo ngày
            </Radio>
            <Radio value={2} className="checkedDate">
                Theo tuần
            </Radio>
        </Radio.Group>
    );
    return (
        <Space direction="vertical" size={12}>
            {value == 1 ? (
                <DatePicker
                    defaultValue={dayjs('2015/01/01', dateFormat)}
                    format={dateFormat}
                    renderExtraFooter={() => renderDayWeek}
                    showToday={false}
                   
                />
            ) : (
                <DatePicker
                    picker="week"
                    bordered={false}
                    renderExtraFooter={() => renderDayWeek}
                    style={{ width: '100%' }}
                />
            )}
        </Space>
    );
}

export default CalendarCustom;
