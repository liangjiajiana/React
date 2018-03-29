import React from 'react';
import {Router, Route, hashHistory, IndexRoute } from 'react-router';

import HomeComponent from '../component/home/HomeComponent'
import PerformanceComponent from '../component/performance/performanceComponent'
import MineComponent from '../component/Mine/MineComponent'
import LoginComponent from '../component/login/loginComponent'
import IDLoginComponet from '../component/login/idLogin/IDLoginComponent'
import RegisterComponent from '../component/register/registerComponent'
import NoteLoginComponent from '../component/login/NoteLogin/NoteLoginComponent'
import SettingsComponent from '../component/Settings/SettingsComponent'
import LjjindentComponent from '../component/ljj-indent/LjjindentComponent'
import ModalComponent from '../component/ModalComponent/ModalComponent'
import PaymentComponent from '../component/payment/paymentComponent'
import ConfirmorderComponent from '../component/confirmorder/confirmorderComponent'
import SearchComponent from '../component/search/searchComponent'
import LittleswanComponent from '../component/littleswan/littleswanComponent'
import AddaddressComponent from '../component/addAddress/addAddressComponent'
export default(
    <Route history = {hashHistory}>
        <Route path="/" component = {HomeComponent} />
        <Route path="/performance(/:id)" component = {PerformanceComponent}/>
        <Route path="mine" component = {MineComponent}/>

        <Route path="/login(/:id)" component = {LoginComponent}/>
        <Route path="search" component= {SearchComponent} />

        <Route path="login" component = {LoginComponent}>
            <Route path="idlogin" component = {IDLoginComponet}/>
            <Route path="notelogin" component ={NoteLoginComponent}/>
        </Route>
        <Route path="register" component = {RegisterComponent}/>
        <Route path="settings" component = {SettingsComponent}/>
        <Route path="Ljjindent" component = {LjjindentComponent }/>
        <Route path="Modal" component = {ModalComponent}/>
        <Route path="payment" component = {PaymentComponent}/>
        <Route path="confirmorder" component = {ConfirmorderComponent}/>
        <Route path="search" component = {SearchComponent}/>
        <Route path="littleswan" component = {LittleswanComponent}/>
        <Route path="address" component = {AddaddressComponent}/>

    </Route> 
)