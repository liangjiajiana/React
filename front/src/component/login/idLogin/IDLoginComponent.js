import React , {Component} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'


import http from '../../../utils/httpclient.js'
import './IDLogin.scss'
export default class IDloginComponent extends Component{
    BtnLogin(){
        var phone = this.refs.phone.value
        var password = this.refs.password.value;
        http.get('login',{username:phone,password:password}).then((res)=>{
            if(res.data.length>0){
                var data=JSON.stringify({username:res.data[0].username,id:res.data[0].id});
                window.localStorage.setItem('user',data);
                location.href='#/';
            }
        })
    }
    render(){
        return(
            <div className="list-block">
                <div className="list-item">
                    <i className="icon iconfont icon-wode"></i>
                    <input type="text" className="phone" placeholder="手机号" ref="phone"/>            
                </div>
                <div className="list-item">
                    <i className="icon iconfont icon-mima"></i>
                    <input type="text" className="password" placeholder="密码" ref="password"/>
                </div>
                <div className="btn-box">
                    <div className="btn-block" onClick={this.BtnLogin.bind(this)}>登录</div>
                </div>
                <div className="autologin-box">
                    <div className="autologin">
                        <Link to="/register">
                            <div>立即注册</div>
                        </Link>
                            <div>忘记密码?</div>
                    </div>
                </div>
            </div>
        )
    }
}