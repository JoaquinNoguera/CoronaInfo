import React from 'react';
import ReactDOM from 'react-dom';
import "@babel/polyfill";
import {Switch, HashRouter, Route} from 'react-router-dom'
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './screens/home';
import Countries from './screens/countries';
import Stats from './screens/stats';
import Compare from './screens/compare';
import NotFound from './screens/NotFound';
import Loading from './components/Loading';
import './style.scss';


function App(){
    const [data, setData] = React.useState(false);
    const [state,setState] = React.useState(null);

    React.useLayoutEffect(()=>{
      getData();
    },[data]);

    const getData = async () => {
      setData(true);
      let world = await (await fetch('https://corona-info-api.herokuapp.com/')).json();
      const country = await (await fetch('https://corona-info-api.herokuapp.com/country')).json()
      world[0].countries = country;
      setState(world[0]);
    }

    if(!data){
        return <Loading/>;
    }else{
    return(
            <HashRouter>
                <Navbar/>
                <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/paises">
                            <Countries
                                state={state}
                            />
                        </Route>
                        <Route exact path="/estadisticas/:place">
                            <Stats
                                state={state}
                            />
                        </Route>
                        <Route exact path="/comparador">
                            <Compare/>
                        </Route>
                        <Route>
                            <NotFound/>
                        </Route>
                </Switch>
                <Footer/>
            </HashRouter>
    );
}
}

ReactDOM.render(<App/>,document.getElementById('app'));



