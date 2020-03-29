import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './screens/home';
import Countries from './screens/countries';
import './style.scss';


function App(){
    return(
            <BrowserRouter>
                <Navbar/>
                <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/paises" component={Countries}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
    );
}

ReactDOM.render(<App/>,document.getElementById('app'));



