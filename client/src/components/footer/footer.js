import React from 'react';
import './style.scss';

export default function(){
    return(
        <div id="footer"> 
            <div className="footerContent">
                <h3>Datos</h3>
                <p>
                    Los datos han sido extraidos de  
                    <a href="https://github.com/mathdroid/covid-19-api"> COVID-19 API</a>
                </p>
            </div>
            <div className="footerContent">
                <h3>Menciones</h3>
                <p>Imagenes obtenidas de <a href="https://undraw.co/">Undraw</a></p>
                <p>Iconos obtenidos de <a href="https://www.flaticon.es/">Flaticon</a></p>
            </div>
            <div className="footerContent">
                <h3>Contacto</h3>
                <p>
                    Hola, soy Joaquín Noguera V. puedes ver mi porfolio y contactarme haciendo 
                    <a href="https://joaquinnoguera.github.io/porfolio/"> click aquí</a>
                </p>
            </div>
        </div>
    )
}