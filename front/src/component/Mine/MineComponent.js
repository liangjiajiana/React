import React, { Component } from 'react'

import ReactDOM from 'react-dom'

import './Mine.scss'

import FooternavComponent from '../footernav/footernavComponent'

export default class MineComponent extends Component{
    render(){
        return(
            <div id="Mine">
                <div className="main">
                    <h1>这是我的</h1>
                </div>
                <FooternavComponent/>
            </div>
        )
    }
}