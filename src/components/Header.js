import React from "react";

import './Header.css';

import WRFILMES from '../assets/wrfilmes.png';
import Perfil from '../assets/profile.png';


export default ( {black}) =>{
    return(

        <header className={black ? 'black' : ' '}>
            <div className="header--logo">
                <a href="">
                    <img src={WRFILMES} alt="Logo" />
                </a>
            </div>
            <div className="herader--user">
                <a href="" >
                  <img src={Perfil} alt='usuario' />
                </a>
                
            </div>
        </header>
    );
}