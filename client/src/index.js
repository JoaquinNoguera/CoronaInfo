import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/navbar';
import Home from './screens/home';
import './style.scss';


function App(){
    return(
        <div>
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

ReactDOM.render(<App/>,document.getElementById('app'));



