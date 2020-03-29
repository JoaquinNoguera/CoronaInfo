import React from 'react';
import TosIcon from '../../assets/tos.svg'
import { Link } from 'react-router-dom'
import './style.scss';

export default function(){
    return(
        <div id="navbar">
                    <TosIcon/>
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/paises">
                        <li>Paises</li>
                    </Link>
                    <Link to="/">
                        <li>Comparador</li>
                    </Link>
                </ul>
        </div>
    );
}