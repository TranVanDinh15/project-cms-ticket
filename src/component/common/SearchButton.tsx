import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
import './index.scss';
interface props {
    children: React.ReactNode;
}
const SearchButton = ({ children }: props) => {
    return (
        <div className=" SearchFilter ">
            <div className="searchTicketM">
                <div className="searchTicketM__input">
                    <input placeholder="Tìm bằng số vé" />
                </div>
                <div className="searchTicketM__icon">
                    <SearchOutlined />
                </div>
            </div>
            {children}
        </div>
    );
};
export default SearchButton;
