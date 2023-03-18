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
                {/* <Route path='/como-llegar' element={<ComoLlegar/>}/> */}
                {/* <Route path='/comida' element={<PapasModal/>}/> */}
                {/* <Route path='/salsas' element={<Salsas/>}/> */}
                {/* <Route path='/domicilio' element={<Domicilio/>}/> */}
            </Routes>
            <Footer/>

            
        </BrowserRouter>
    );
}

export default IndexRoutes;
