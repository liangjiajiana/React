import React, { Component } from 'react'

import ReactDOM from 'react-dom'

import './home.scss'

import FooternavComponent from '../footernav/footernavComponent'
export default class HomeComponent extends Component{
    render() {
        return (
            <div id="home">
                <ul className="homeheader">
                    <h1>这是首页</h1>
                </ul>
                <div className="main"></div>
                <FooternavComponent/> 
            </div>
        )
    }
}