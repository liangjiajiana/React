import React from 'react'
import './login.css'
import http from '../../utils/httpclient.js'
import {Router, Route, hashHistory, browserHistory, Link} from 'react-router'
export default class LoginComponent extends React.Component{
    login(){
        var username=this.refs.user.value;
        var password=this.refs.psw.value;
        if(username.length<1){
            alert('用户名不能为空！')
        }else if(password.length<1){
            alert('密码不能为空！')
        }else{
            http.get('adlgin',{username,password}).then((res) => {
                console.log(res)
                if(res.data.length>0){
                    window.localStorage.setItem('admins',username)
                    location.href="#/"
                }else{
                    alert('用户名或者密码错误！')
                }
            })
        }
    }
    render(){
        return(
            <div className="login">
                <div className="login-box">
                    <div className="col-sm-12 b-r">
                        <h3 className="m-t-none m-b">登录</h3>
                        <form role="form">
                            <div className="form-group text-left">
                                <label>用户名：</label>
                                <input type="text" name="username" placeholder="请输入用户名" className="form-control required" defaultValue="" ref="user"/>
                            </div>
                            <div className="form-group  text-left">
                                <label>密码：</label>
                                <input type="password"  name="password" placeholder="请输入密码" className="form-control required" defaultValue="" ref="psw" />
                            </div>
                            <div>
                                <input type="button" className="btn btn-primary pull-right m-t-n-xs" value="登录" onClick={this.login.bind(this)} />
                            </div>
                        </form>
                    </div>
                    <div className="copyright">2017 © pan by www.dk-lan.com</div>
                </div>
            </div>
        )
    }
}