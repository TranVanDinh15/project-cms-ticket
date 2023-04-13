import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './component/Page/Home/Home';
import TicketManagement from './component/Page/TicketManagement/TicketManagement';
import TicketCheck from './component/Page/TicketCheck/TicketCheck';
import db from './component/FireBase/FireBase';
import { collection, getDocs } from 'firebase/firestore';
const getData = async () => {
    const querySnapshot = await getDocs(collection(db, '0'));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.data());
    });
};
function App() {
    useEffect(() => {
        getData();
    }, []);
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/TicketManagement" element={<TicketManagement />} />
                <Route path="/TicketCheck" element={<TicketCheck />} />
            </Routes>
        </div>
    );
}

export default App;
