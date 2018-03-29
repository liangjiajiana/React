import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import connect from 'react-redux'

import http from '../../utils/httpclient.js'

import {Link} from 'react-router'

import './search.scss'

export default class searchComponent extends Component{
    state = {
        dataset:[]
    }
    // componentWillMount(){
    //     http.get('fuzzy',)
    // }
    componentDidMount(){

    }
    render(){
        return(
            <div id="search">
                <div className="header">
                    <ul>
                        <Link to="#"><li className="iconfont icon-zuojiantou"></li></Link>
                        <li>
                            <i className="iconfont icon-sousuosearch82"></i>
                            <input type="text" placeholder="演出/艺人/场馆" />
                        </li>
                        <li>搜索</li>
                    </ul>
                </div>
                <div className="main">
                    <h3>大家都在找</h3>
                    <ul>
                        <li>Cats</li> 
                        <li>吉屋出租</li>
                        <li>谭咏麟</li>
                        <li>罗密欧与朱丽叶</li>
                        <li>陈慧娴</li>
                        <li>长腿叔叔</li>
                    </ul>
                </div>
            </div>
        )
    }
}