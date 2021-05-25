import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from '../components/header/Header';
import Cartpage from '../components/pages/Cartpage';
import Homepage from '../components/pages/Homepage';
import Productpage from '../components/pages/Productpage';
import Adminlogin from '../components/users/Adminlogin';
import Userlogin from '../components/users/Userlogin';

function MainRouter () {
    return(
        <Router>
            <Header />    
            <Switch>
                <Route exact path = "/" component = {Homepage}/>
                <Route path = "/products" component = {Productpage}/>
                <Route path = "/admin" component = {Adminlogin}/>
                <Route path = "/cart" component = {Cartpage}/>
                <Route path = "/login" component = {Userlogin}/>
            </Switch>   
        </Router>
    )    
}

export default MainRouter;