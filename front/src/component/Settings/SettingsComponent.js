import React , {Component} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'

import './Settings.scss'
import ModalComponent from '../ModalComponent/ModalComponent'
export default class SettingsComponent extends Component{
    state={
        show:false
    }
    showup(){
        this.setState({
            show:true
        })
    }
    s_h(){
        this.setState({
            show:false
        }) 
    }
    Quit(){
        window.localStorage.removeItem('user');
        location.href='#/';
    }
    render(){
        return(
            <div id="Settings">
                <ul className="header">
                    <li>
                        <Link to="/mine">
                            <i className="icon iconfont icon-zuojiantou"></i>
                        </Link>
                    </li>
                    <li>账户设置</li>
                    <li>
                        <i className="icon iconfont icon-more" onClick={this.showup.bind(this)}></i>
                    </li>
                </ul>
                <div className="zhezhao"></div>
                <div className="main">
                    <div className="HeadPortrait">
                        <div>
                            <span>头像</span>
                        </div>
                    </div>
                    <div className="nickname">
                        <div>
                            <span>昵称</span>
                            <span>哈哈哈</span>
                        </div>
                    </div>
                    <div className="zhezhao"></div>
                    <div className="phone">
                        <div>
                            <span>手机号</span>
                            <span>
                                <span>去绑定</span>
                                <i className="icon iconfont icon-youjiantou-01"></i>
                            </span>
                        </div>
                    </div>
                    <div className="mailbox">
                        <div>
                            <span>邮箱</span>
                            <span>
                                <span></span>
                            </span>
                        </div>
                    </div>
                    <div className="loginPassword">
                        <div>
                            <span>登录密码</span>
                            <span>
                                <span>去修改</span>
                                <i className="icon iconfont icon-youjiantou-01"></i>
                            </span>
                        </div>
                    </div>
                    <div className="paymentCode">
                        <div>
                            <span>支付密码</span>
                            <span>
                                <span>设置</span>
                                <i className="icon iconfont icon-youjiantou-01"></i>
                            </span>
                        </div>
                    </div>
                     <div className="authentication">
                        <div>
                            <span>实名认证</span>
                            <span>
                                <span>未认证</span>
                                <i className="icon iconfont icon-youjiantou-01"></i>
                            </span>
                        </div>
                    </div>
                    <div className="student-authentication">
                        <div>
                            <span>学生身份认证</span>
                            <span>
                                <span>去验证</span>
                                <i className="icon iconfont icon-youjiantou-01"></i>
                            </span>
                        </div>
                    </div>
                    <div className="Young-authentication">
                        <div>
                            <span>Young身份认证</span>
                            <span>
                                <span>去验证</span>
                                <i className="icon iconfont icon-youjiantou-01"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="exit">
                    <div onClick={this.Quit.bind(this)}>退出登录</div>
                </div>
                <ModalComponent show={this.state.show}  ob={this.s_h.bind(this)}/>
            </div>
        )
    }
}