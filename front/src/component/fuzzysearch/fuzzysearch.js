/* 
* @Author: Marte
* @Date:   2018-03-29 15:44:32
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-29 15:55:42
*/

import React, { Component } from 'react'
import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router';
import ReactDOM from 'react-dom'

import './fuzzysearch.scss'


import SpinnerComponent from '../../spinner/SpinnerComponent.js'

import http from '../../utils/httpclient.js'

export default class FuzzysearchComponent extends Component{
    state = {
        sorttype:undefined,
        rollingadd:4,
        sortpopupwindow:false,
        spinnerShow:false,
        dataset:[],
        rowsCount:0
    }
    componentWillMount = () => {
        this.setState({
            spinnerShow: true
        })
        http.get('http://10.3.136.36:8080/goods').then((res) => {
            this.setState({
                spinnerShow: false,
                dataset: res.data.slice(0,this.state.rollingadd),
                rowsCount: res.rowsCount
            })
        })
    }
   
    render(){
        return(
            
            <div id="Fuzzysearch">
                <link href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
                <link rel="stylesheet" type="text/css" href="http://at.alicdn.com/t/font_610025_zux1a5draf6flxr.css" />
                <div className='header'>
                    <div className='searchbar'>
                        <a className='location'><span className='iconfont icon-xiangzuojiantou'></span></a>
                        <a className='search'><span className='iconfont icon-fangdajing'></span><span>搜索演出、艺人或场馆</span></a>
                        <a className='sort' onClick={this.changesortpopupwindow.bind(this)}><span className='iconfont icon-sort_icon'></span></a>
                        <SortPopupWindowComponent show={this.state.sortpopupwindow} changemask={this.changemask} timesort={this.timesort} recommondsort={this.recommondsort}></SortPopupWindowComponent>
                    </div>
                    
                </div>
                

            </div>
        )
    }
}