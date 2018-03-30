import React from 'react'
import {Router, Route, hashHistory, browserHistory, Link} from 'react-router'

import NavComponent from './nav/navComponent.js'
import HeaderComponent from './header/header.js'
import './home.css'
export default class HomeComponent extends React.Component{
    render(){
        if(window.localStorage.getItem('admins')){
            
        }else{
            location.href="#/login"
        }
        return(
            <div>
                <div className="header">
                    <HeaderComponent />
                </div>
                <div className="body">
                    <div className="nav">
                        <NavComponent />
                    </div>
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}