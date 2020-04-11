import React from 'react';
import './style.scss';
import Not from '../../assets/not.svg';
export default function NotFound(){
    return(
        <div
            id="NotFound"
        >
            <Not/>
            <h1>Pagina no encontrada</h1>
        </div>
    );
}