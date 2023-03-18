import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import PapasModal from '../components/PapasModal/PapasModal';
import Home from '../pages/Home';

const IndexRoutes = () => {



    return (
        <BrowserRouter>
            <Navbar/>    
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
            <Footer/>

            
        </BrowserRouter>
    );
}

export default IndexRoutes;
