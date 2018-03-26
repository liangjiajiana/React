import React , {Component} from 'react'
import ReactDOM from 'react-dom'
import './login.scss'
// // import img from './login.png'
// import img from './login.png'


export default class LoginComponent extends Component{
    render(){
        return(
            <div id="login">
                <ul className="header">
                    <li>
                        <i className="icon iconfont icon-zuojiantou"></i>
                    </li>
                    <li>聚橙网</li>
                    <li className="right"></li>
                </ul>
                <div className="main">
                    <div className="tabItem">
                        <div className="passwordLogin">密码登录</div>
                        <div className="verifyLogin">验证登录</div>
                    </div>
                </div>
            </div>
        )
    }
}
