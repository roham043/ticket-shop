import React from 'react';
import { Routes, Route } from 'react-router-dom';
import  Header  from './Component/Header/Header';
import App from './App';
import Ticket from './Component/pages/DomesticTicket/mainpage/Ticket';



class Router extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Routes>

                    <Route exact path="/" element={<App />} />
                    <Route path="ticket" element={<Ticket />} />


                </Routes>
            </div>
        )
    }
}

export default Router;