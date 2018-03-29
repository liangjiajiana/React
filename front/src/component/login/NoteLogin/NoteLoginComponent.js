import React , {Component} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'

import './NoteLogin.scss'
export default class NoteLoginComponent extends Component{
    componentDidMount(){
        var res = '';
            for(var i=0;i<4;i++){
                res += parseInt(Math.random()*10);
            this.refs.code.value = res;
        }
    }
    render(){
        return(
            <div className="list-block">
                <div className="list-item">
                    <i className="icon iconfont icon-wode"></i>
                    <input type="text" className="phone" placeholder="手机号"/>            
                </div>
                <div className="list-item2">
                    <i className="icon iconfont icon-yanzhengma"></i>
                    <input type="text" className="vocde" placeholder="请输入验证码"/> 
                    <input type="text" className="code" ref="code"/>
                </div>
                <div className="btn-box">
                    <div className="btn-block">登录</div>
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