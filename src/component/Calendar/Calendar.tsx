import React, { useState } from 'react';
import { DatePicker, Space } from 'antd';
import './Calendar.scss';
import 'moment/locale/vi';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import { TimePicker } from 'antd';
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
// import customParseFormat from 'dayjs/plugin/customParseFormat';
// dayjs.extend(customParseFormat);
interface props {
    type: string;
}

function CalendarCustom({ type }: props) {
    // Quanr lý thời gian
    const [valueTime, setValueTime] = useState<Dayjs | null>(null);
    // console.log(valueTime?.hour());
    const dateFormat = 'YYYY/MM/DD';
    const [value, setValue] = useState(1);
    // change radio
    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    // Xử lý khi thay đổi thời gian
    const onChangeTime = (time: Dayjs) => {
        setValueTime(time);
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
            {type == 'date' && value == 1 ? (
                <DatePicker
                    defaultValue={dayjs('2015/01/01', dateFormat)}
                    format={dateFormat}
                    renderExtraFooter={() => renderDayWeek}
                    showToday={false}
                />
            ) : (
                type == 'date' && (
                    <DatePicker
                        picker="week"
                        bordered={false}
                        renderExtraFooter={() => renderDayWeek}
                        style={{ width: '100%' }}
                    />
                )
            )}
            {type == 'time' && (
                <TimePicker
                    value={valueTime}
                    onChange={(time) => {
                        if (time) {
                            onChangeTime(time);
                        }
                    }}
                />
            )}
        </Space>
    );
}

export default CalendarCustom;
