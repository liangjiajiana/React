import React from 'react';
import {Router, Route, hashHistory, IndexRoute } from 'react-router';

import HomeComponent from '../component/home/HomeComponent'
import PerformanceComponent from '../component/performance/performanceComponent'
import MineComponent from '../component/Mine/MineComponent'
import LoginComponent from '../component/login/loginComponent'

export default(
    <Route history = {hashHistory}>
        <Route path="/" component = {HomeComponent} />
        <Route path="performance" component = {PerformanceComponent}/>
        <Route path="mine" component = {MineComponent}/>
        <Route path="login" component = {LoginComponent}/>
    </Route> 
)