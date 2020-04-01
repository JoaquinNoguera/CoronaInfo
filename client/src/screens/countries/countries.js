import React from 'react';
import Filter from '../../components/filter';
import Input from '../../components/Input';
import IconWorld from '../../assets/coronavirus.svg';
import {Link} from 'react-router-dom';
import './style.scss';

export default function(props){
      React.useLayoutEffect(()=> window.scrollTo(0, 0))
      const {state} = props;
      const [value,input] = Input(
        {
          placeholder: "Busque el país",
          init: ''
        }
      );


      if(state){
        return(
      <div id="CountriesContainer">
          <h1>Lista de paises</h1>  
         
          <div className="inputFilter"> 
              {input}
          </div>
        
          <h2>
              Total de casos: {state.days[state.days.length - 1].confirmed}
          </h2>
          
          <div
            className="contentWrapper"
          >
          <div
            className="aclarationWrapper"
          >
            <div
              className="aclarationContainer"
            >
              <div className="bad"/>
              <p>Tiene mayor cantidad de casos que el promedio</p>
            </div>
          
          <div
              className="aclarationContainer"
          >
            <div className="good"/>
            <p>Tiene menor cantidad de casos que el promedio</p>
          </div>
        </div>
        <Link to="/estadisticas/global">
          <button>
              <IconWorld/>
              <p>
                 Estadisticas del mundo
              </p>
          </button>
        </Link>
        </div>

        <div>
          <div id="filterContainer">
            <Filter
              countries={state.countries}
              filter={value}
              total ={state.days[state.days.length - 1].confirmed}
            />
          </div>
        </div>
        </div>
      )
    }else{
      return <div>Loading</div>
    }
}