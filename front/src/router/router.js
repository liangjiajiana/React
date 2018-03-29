import React from 'react';
import {Router, Route, hashHistory, IndexRoute } from 'react-router';

import HomeComponent from '../component/home/HomeComponent'
import PerformanceComponent from '../component/performance/performanceComponent'
import MineComponent from '../component/Mine/MineComponent'
import LoginComponent from '../component/login/loginComponent'
import DetailComponent from '../component/detail/detailComponent.js'
import SelectPriceComponent from '../component/selectprice/selectpriceComponent.js'
import MapComponent from '../component/map/mapComponent.js'
import CustomerServiceComponent from '../component/customerservice/customerservice.js'

export default(
    <Route history = {hashHistory}>
        <Route path="/" component = {HomeComponent} />
        <Route path="performance" component = {PerformanceComponent}/>
        <Route path="mine" component = {MineComponent}/>
        <Route path="login" component = {LoginComponent}/>
        <Route path="detail/:id" component = {DetailComponent}/>
        <Route path="selectprice/:id" component = {SelectPriceComponent}/>
        <Route path="map/:id" component = {MapComponent}/>
        <Route path='customerservice' component = {CustomerServiceComponent}/>
    </Route> 
)