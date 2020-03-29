import React from 'react';
import TosIcon from '../../assets/tos.svg';
import PastelIcon from '../../assets/pastel.svg';
import Paises from '../../assets/paises.svg';
import './style.scss';
export default function Home(){
    return(
        <div>
            <div id="header">
                <div className="containerText">
                    <h1>CORONA</h1>
                    <h1>INFO</h1>
                </div>
                <TosIcon/>
            </div>

            <div className="content">
                <div className="container">
                    <div className="textContainer">
                        <h2>Estadisticas Globales</h2>
                        <p>
                            Estadisticas actualizadas sobre los disitintos lugares del mundo.
                            Analisis diario y graficas evolutivas de como progresa la enfermedad
                            a lo largo del tiempo. 
                        </p>
                        <button>Conocer más</button>
                    </div>
                    <PastelIcon/>
                </div>
                <hr className="charlie"/>
                <div className="container">
                    <div className="textContainer">
                        <h2>Comparador de Paises</h2>
                        <p>
                            Compra los distintos paises y sus estadisticas entre si,
                            asi como tambien puedes comprararlos con los porcentaje
                            promedio a nivel mundial
                        </p>
                        <button>Comparar</button>
                    </div>
                    <Paises/>
                </div>
            </div>
        </div>
    );
}