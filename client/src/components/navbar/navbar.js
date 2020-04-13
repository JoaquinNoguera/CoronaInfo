import React from 'react';
import TosIcon from '../../assets/tos.svg';
import { Link, withRouter } from 'react-router-dom';
import Serch from '../../assets/virus.svg';
import Input from '../Input';
import './style.scss';

function Navbar(props){
    
    const [value,input] = Input(
        {
          placeholder: "Busque el país",
          init: '',
          list: "countries"
        }
      );

    const {state,history} = props;
    if(state){
    const countriesList = state.countries.map(c=>{
        return <option key={c._id} value={c.name}/>
      })
    return(
        <div id="navbar">
            <Link to="/">
                <TosIcon/>
            </Link>
            <div id="serchContainer">
                <button
                    onClick={()=>{
                        history.push(`/estadisticas/${value}`)
                    }}
                >
                    <Serch/>    
                </button>
                {input}
                <datalist id="countries">
                  <option value="global"/>
                  {countriesList}
              </datalist>
            </div>
        </div>
    );}else{
        return <div></div>
    }
}

export default withRouter(Navbar);