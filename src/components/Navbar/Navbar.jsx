import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
    return (
        <div className='containerNav'>
            <nav className='nav'>
                <img src="./assets/img/Logo1.png" alt="" />
                <Link to={''}>Como llegar</Link>
                <Link to={''}>Combos</Link>
                <Link to={''}>Salsas</Link>
               
            </nav>
            <div className='redes'>
                <Link to={''}><img src='./assets/img/logoWhatsapp.png'/></Link>
                <a href='https://www.facebook.com/carlo.duarte.37201'target={'_blank'} ><img src='./assets/img/logoFacebook.png'/></a>
                <a href='https://www.instagram.com/paprikapapasbelgas/' target={'_blank'}><img src='./assets/img/logoInsta.png'/></a>

            </div>
        </div>
    );
}

export default Navbar;
