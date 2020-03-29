import React from 'react';
import TosIcon from '../../assets/tos.svg'
import { Link } from 'react-router-dom'
import './style.scss';

export default function Navbar(){
    return(
        <div id="navbar">
                <TosIcon/>
        </div>
    );
}