import React, { Component } from 'react'

import ReactDOM from 'react-dom'

import './performance.scss'

import FooternavComponent from '../footernav/footernavComponent'

export default class PerformanceComponent extends Component{
    render(){
        return(
            <div id="Performance">
                <div className="main">
                    <h1>这是演出库</h1>
                </div>
                <FooternavComponent/>
            </div>
        )
    }
}