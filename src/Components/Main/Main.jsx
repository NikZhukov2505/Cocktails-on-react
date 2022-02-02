import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Detail from '../Detail/Detail';
import Home from '../Home/Home';
import Ingridients from '../Ingridients/Ingridients';

const Main = () => {
    return (
        <div>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/detail/:id' element={<Detail />} />
                <Route path='/ingridients/:name' element={<Ingridients />} />

            </Routes>

        </div>
    );
};

export default Main;