import React from 'react';
import Image1 from '../../assets/tos.svg';
import Image2 from '../../assets/Image1.svg';
import Image3 from '../../assets/Image2.svg';
import Image4 from '../../assets/Image3.svg';
import {Link} from 'react-router-dom'
import './style.scss';

export default function(){
    return(
        <div>
            <div id="header">
                <div className="containerText">
                    <h1>CORONA</h1>
                    <h1>INFO</h1>
                </div>
                <Image1/>
            </div>

            <div className="content">
                <div className="container" style={{background:"#f1f3f4"}}>
                    <div className="textContainer">
                        <h2>Estadisticas Globales</h2>
                        <p>
                            Estadisticas actualizadas sobre los disitintos lugares del mundo.
                            Analisis periodico y graficas evolutivas de como progresa la enfermedad
                            a lo largo del tiempo. 
                        </p>
                        <Link to="/paises">
                        <button>
                            Conocer más
                        </button>
                        </Link>
                    </div>
                    <Image2/>
                </div>
                <div className="container"  style={{background:"#f9f9f9"}}>
                    <Image3/>
                    <div className="textContainer">
                        <h2>Comparador de Paises</h2>
                        <p>
                            Compra los distintos paises y sus estadisticas entre si,
                            asi como tambien puedes comprararlos con los porcentaje
                            promedio a nivel mundial
                        </p>
                        <Link to="/comparador">
                        <button>Comparar</button>
                        </Link>
                    </div>
                </div>
                <div className="container"  style={{background:"#f4eeff"}}>
                    <div className="textContainer">
                        <h2>¿Falta información?</h2>
                        <p>
                        Los datos empezaron a ser recolectados el 25 de Marzo del 2020 y 
                        la actualización puede no ser diaria,
                        fechas anteriores no han sido almacenadas. Se agradece la 
                        comprensión.
                        </p>
                    </div>
                    <Image4/>
                </div>
            </div>
        </div>
    );
}