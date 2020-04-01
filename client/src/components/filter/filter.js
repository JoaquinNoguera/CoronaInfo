import React from 'react';
import {Link} from 'react-router-dom';
import './style.scss';

export default function filter(props){
    const {countries, filter,total} = props; 

    const arrByCases = countries.sort(function (a,b){
        return b.days[b.days.length - 1].confirmed - a.days[a.days.length - 1].confirmed;
    });
    const re = new RegExp(`(${filter.toUpperCase()})`);
    const arr = arrByCases.map((c) => {
        if(filter === "" || c.name.toUpperCase().search(re) !== -1){
        
            const width = parseInt((c.days[c.days.length - 1].confirmed * 100 / total * countries.length));
            const background = (width > 100) ? ("#d63447") : ("#1eb2a6");
            return <div
                key={c._id}
                className="country"
                >
                    <p>{c.name}</p>
                    <div className="percent">
                        <div 
                            className="progress"
                            style = {{
                                width: `${width}%`,
                                background: background
                                
                            }}
                        />
                        <span className="cant">
                            {c.days[c.days.length - 1].confirmed} casos
                        </span>
                    </div>
                    <Link to={`/estadisticas/${c.name}`}
                        className="goToStats"
                    > 
                            Ver estadisticas
                    </Link>
                </div>
    }})

return <div
            id="CountriesWrapper"
        >
            {arr}
        </div>;
}