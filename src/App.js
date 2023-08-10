import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Error from './pages/Error';
import Cart from './pages/Cart';

import './scss/app.scss';

function App() {
    const [searchValue, setSearchValue] = React.useState('');

    return (
        <div className="wrapper">
            <Header searchValue={searchValue} setSearchValue={setSearchValue} />
            <div className="content">
                <div className="container">
                    <Routes>
                        <Route
                            path="/"
                            element={<Home searchValue={searchValue} setSearchValue={setSearchValue} />}
                        ></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                        <Route path="*" element={<Error />}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
