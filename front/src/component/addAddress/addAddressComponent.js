import React, { Component } from 'react'
import {Link} from 'react-router'
import ReactDOM from 'react-dom'

import './addAddress.scss'
import Pca from '../../component/linkage/linkage.js'
import http from '../../utils/httpclient.js'
export default class AddressComponent extends Component{
    state = {
        addr:''
    }
    sta={
        data:''
    }
    get(){
        var addName = this.refs.addName.value;
        var addPhone = this.refs.addPhone.value;
        var Minute = this.refs.minute.value;
        var addr = this.sta.data
        var username = JSON.parse(window.localStorage.getItem('user')).username
        http.get('adduseraddr',{username,phone:addPhone,address:addr,adrdeta:Minute,shouname:addName}).then((res)=>{
            console.log(res);
        })
    }
    getstate(data){
        var str=data.province+','+data.city+','+data.area;
        this.sta.data=str
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
                        <input type="text" placeholder="请输入收货人姓名"ref="addName"/ >
                    </ul>
                    <ul className="Addphone">
                        <li>电话</li>
                        <input type="text" placeholder="请输入收货人联系电话" ref="addPhone"/>
                    </ul>
                    <ul className="adr">
                        <li>地址</li>
                        <li><Pca ob={this.getstate.bind(this)}/></li>
                    </ul>
                    <ul className="Addphone">
                        <li>详细地址</li>
                        <input type="text" placeholder="请输入收货人详细地址" ref="minute"/>
                    </ul>
                    <div className="addSite">
                        <Link to="/littleswan">
                            <div onClick={this.get.bind(this)}>保存并使用</div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}