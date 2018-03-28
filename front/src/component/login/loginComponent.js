import React , {Component} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'
import './login.scss'

import http from '../../utils/httpclient.js'
import IDLoginComponet from './idLogin/IDLoginComponent'
import NoteLoginComponent from './NoteLogin/NoteLoginComponent'
export default class LoginComponent extends Component{
    state = {
        show:true
    }
    showID(){
        this.setState({
            show : true
        })
    }
    showNote(){
        this.setState({
            show: false
        })
    }
    render(){
        let content = this.state.show ?<IDLoginComponet/> : <NoteLoginComponent />
        return(
            <div id="login">
                <ul className="header">
                    <li>
                        <i className="icon iconfont icon-zuojiantou"></i>
                    </li>
                    <li><img className="logo" src="src/component/login/login.png"/></li>
                    <li className="right"></li>
                </ul>
                <div className="main">
                    <div className="tabItem">
                        <div className="passwordLogin">
                            <Link to="/login/idlogin" onClick={this.showID.bind(this)}>
                                <span>密码登录</span>
                            </Link>
                        </div>
                        <div className="verifyLogin">
                            <Link to="/login/notelogin" onClick={this.showNote.bind(this)}>
                                <span>验证码登录</span>
                            </Link>
                        </div>
                    </div>
                    <div className="zhezhao"></div>
                         {content}
                </div>
            </div>
        )
    }
}
