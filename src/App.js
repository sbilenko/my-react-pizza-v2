import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Error from './pages/Error';
import Cart from './pages/Cart';

import './scss/app.scss';

function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                        <Route path="*" element={<Error />}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
