import React, { createContext, useState } from 'react';

type props = {
    children: React.ReactNode;
};
interface idSetId {
    id: string;
    setId: (id: string) => void;
    isShow: boolean;
    setIsShow: (isShow: boolean) => void;
}
export const MyContext = createContext<idSetId>({
    id: '/',
    setId: () => {},
    isShow: false,
    setIsShow: () => {},
});
export const Context = ({ children }: props) => {
    const [id, setId] = useState('/');
    // Quản lý đóng mở modal Danh sách gói vé
    const [isShow, setIsShow] = useState<boolean>(false);
    return <MyContext.Provider value={{ id, setId, isShow, setIsShow }}>{children}</MyContext.Provider>;
};
