import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './component/Page/Home/Home';
import TicketManagement from './component/Page/TicketManagement/TicketManagement';
import TicketCheck from './component/Page/TicketCheck/TicketCheck';

function App() {
  return (
    <div className="App">
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/TicketManagement' element={<TicketManagement/>}/>
     <Route path='/TicketCheck' element={<TicketCheck/>}/>
     </Routes>
    </div>
  );
}

export default App;
