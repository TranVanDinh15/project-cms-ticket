import React, { createContext, useState } from 'react';

type props = {
    children: React.ReactNode;
};
interface idSetId {
    id: string;
    setId: (id: string) => void;
}
export const MyContext = createContext<idSetId>({
    id: '/',
    setId: () => {},
});
export const Context = ({ children }: props) => {
    const [id, setId] = useState('/');
    return <MyContext.Provider value={{ id, setId }}>{children}</MyContext.Provider>;
};
