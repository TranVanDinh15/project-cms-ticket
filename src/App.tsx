import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './component/Page/Home/Home';
import TicketManagement from './component/Page/TicketManagement/TicketManagement';
import TicketCheck from './component/Page/TicketCheck/TicketCheck';
import db from './component/FireBase/FireBase';
import { collection, getDocs } from 'firebase/firestore';
import PackageTicket from './component/Page/packageTicket/packageTicket';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DefaultLayout from './component/Layout/DefaultLayout/DefaultLayout';
const getData = async () => {
    const querySnapshot = await getDocs(collection(db, '0'));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.data());
    });
};
const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout isFilterTicket={false} childComponent={<div></div>} />,
        children: [
            { index: true, element: <Home /> },
            {
                path: '/TicketManagement',
                element: <TicketManagement />,
            },
            {
                path: '/TicketCheck',
                element: <TicketCheck />,
            },
            {
                path: '/setting/goi-dich-vu',
                element: <PackageTicket />,
            },
        ],
    },
]);
function App() {
    useEffect(() => {
        getData();
    }, []);
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
