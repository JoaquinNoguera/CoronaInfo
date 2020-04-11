import React from 'react';
import TosIcon from '../../assets/tos.svg'
import { Link } from 'react-router-dom'
import './style.scss';

export default function(){
    return(
        <div id="navbar">
                <Link to="/">
                    <TosIcon/>
                </Link>
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/paises">
                        <li>Paises</li>
                    </Link>
                    <Link to="/comparador">
                        <li>Comparador</li>
                    </Link>
                </ul>
        </div>
    );
}