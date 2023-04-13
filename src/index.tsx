import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Context } from './component/context/context';
// import { LocaleProvider } from 'antd';
import viVN from 'antd/lib/locale/vi_VN';
import moment from 'moment';
import 'moment/locale/vi';
import { ConfigProvider } from 'antd';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <Context>
        <BrowserRouter>
            <ConfigProvider locale={viVN}>
                <App />
            </ConfigProvider>
        </BrowserRouter>
    </Context>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
