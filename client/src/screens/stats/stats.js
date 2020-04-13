import React from 'react';
import {withRouter} from 'react-router-dom';
import AnyChart from 'anychart-react';
import Loading from '../../components/Loading';
import Month from '../../enum/month';
import { Chart } from 'react-charts'
import './style.scss';

const Stats =  (props) => {

    const {state} = props;
    const name = props.match.params.place; 

   
 

    if(state){
        const days = (name === 'global') ? (state.days) : (state.countries.find(c => c.name === name).days);
        const [index,setIndex] = React.useState(days.length - 1);
        
        const date = new Date(days[index].lastUpdate);
        const title = `${date.getDate()} de ${Month[date.getMonth()].name} \n ${days[index].confirmed} casos `
        
        const pieSettings = {
            type: 'pie',
            title: title,
            data: [
                {x: "Muertos", value: days[index].deaths, fill: '#eb4559'},
                {x: "En Recuperación", value: (days[index].confirmed - days[index].deaths - days[index].recovered), fill: '#ffd31d'},
                {x: "Recuperados", value: days[index].recovered, fill: '#216353'},
              ]
          };

        const arrDay = [];
        const dataM = [];
        const dataE = [];
        const dataR = [];

        for (let i = days.length; i > 0; i--){
            const day = new Date(days[i - 1].lastUpdate);
            dataM.unshift([day,days[i-1].deaths]);
            dataE.unshift([day,days[i-1].confirmed - days[i-1].deaths - days[i-1].recovered]);
            dataR.unshift([day,days[i-1].recovered]);
            arrDay.push(
                <div 
                    key = {i - 1}
                    className = "day"
                    onClick={()=>{
                        setIndex(i-1);
                    }}
                >
                    <span>{day.getDate()}</span>
                    <span>{Month[day.getMonth()].name}</span>
                </div>
            )
        }

   



        const data = [
          {
            label: 'Muertos',
            data: dataM,
            color: '#eb4559',
          },
          {
            label: 'Enfermos',
            data: dataE,
            color: '#ffd31d'
          },
          {
            label: 'Recuperados',
            data: dataR,
            color: '#216353'
          }
        ];


        const axes = [
          { primary: true, type: 'utc', position: 'bottom'},
          { type: 'linear', position: 'left' }
        ];


        return(
            <div
            id="StatsContainer"
            >
            <h1> {name} </h1>
            <div className="pieWrapper">
                        <AnyChart
                        id="anyPie"
                        {...pieSettings}
                        background="#f9f9f9"
                        />
                <div className="daysContainer">
                  <h1>Elige una fecha</h1>
                    {arrDay}
                </div>
            </div>
            <h2>Grafica Evolutiva</h2>
            <div
                id="anyArea"
            >
              <Chart data={data} axes={axes}/>
            </div>
        </div>
    )
    }else{
        return <Loading/>
    }
}


export default withRouter(Stats);