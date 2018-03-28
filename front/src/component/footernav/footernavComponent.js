import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'


import './footernav.scss'

export default class FooternavComponent extends Component{
    render(){
        return(
            <div className="footer">
                <Link to="#">
                    <i className="icon iconfont icon-shouye"></i>
                    <span>首页</span>
                </Link>
                <Link to="/performance">
                    <i className="icon iconfont icon-yanchufuwu"></i>
                    <span>演出库</span>
                </Link>
                <Link to="/mine">
                    <i className="icon iconfont icon-wode"></i>
                    <span>我的</span>
                </Link>       
            </div>
        )
    }
}