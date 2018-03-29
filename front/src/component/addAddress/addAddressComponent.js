import React, { Component } from 'react'
import {Link} from 'react-router'
import ReactDOM from 'react-dom'

import './addAddress.scss'
import Pca from '../../component/linkage/linkage.js'
export default class AddressComponent extends Component{
    getstate(data){
        console.log(data)
    }
    render(){
        return(
            <div id="address">
               <ul className="header">
                    <li>
                        <Link to="/littleswan">
                        <i className="icon iconfont icon-zuojiantou"></i>
                        </Link>
                    </li>
                    <li>新增地址</li>
                    <li className="right"></li>
                </ul>
                <div className="main">
                    <ul className="delivery">
                        <li>收货人</li>
                        <input type="text" placeholder="请输入收货人姓名"/>
                    </ul>
                    <ul className="Addphone">
                        <li>电话</li>
                        <input type="text" placeholder="请输入收货人联系电话"/>
                    </ul>
                    <ul className="adr">
                        <li>地址</li>
                        <li><Pca ob={this.getstate.bind(this)}/></li>
                    </ul>
                    <ul className="Addphone">
                        <li>详细地址</li>
                        <input type="text" placeholder="请输入收货人详细地址"/>
                    </ul>
                    <div className="addSite">
                        <Link to="/littleswan">
                            <div>保存并使用</div>
                    </Link>    
                    </div>
                </div>
            </div>
        )
    }
}