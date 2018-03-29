import React , {Component} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'
import './register.scss' 
import http from '../../utils/httpclient.js'
export default class RegisterComponent extends Component{
    state = {
        code:''
    }
    componentDidMount(){
        var res = '';
        for(var i=0;i<4;i++){
            res += parseInt(Math.random()*10);
            this.refs.code.value = res;
            this.setState({
                code:res
            })     
        }
        this.showPhoneText();
        this.passwordText();
        this.password2Text();
        this.yzm();
    }
    showPhoneText(){
        var phoneText = this.refs.phoneText;
        phoneText.style='display:none';
        return(phoneText);
    }
    passwordText(){
        var passwordText = this.refs.passwordText;
        passwordText.style='display:none';
        return(passwordText);
    }
    password2Text(){
        var password2Text = this.refs.password2Text;
        password2Text.style='display:none';
        return(password2Text);
    }
    yzm(){
        var yzm = this.refs.yzm;
        yzm.style='display:none';
        return(yzm);
    }
    registerName(){
        var phoneRegExp= /^1[34578]\d{9}$/;
        var passwordRegExp=/^\S{1,20}$/;
        var phone = this.refs.phone.value;
        var password = this.refs.password.value;
        var password2 = this.refs.password2.value;
        var code = this.state.code;
        var vocde = this.refs.vocde.value;
        if(!phoneRegExp.test(phone)){
            this.showPhoneText().style='display:block';
        }else if(!passwordRegExp.test(password)){
            this.showPhoneText().style='display:none';
            this.passwordText().style='display:blcok';
        }else if(password!=password2){
            this.passwordText().style='display:none';
            this.showPhoneText().style='display:none';
            this.password2Text().style='display:blcok';
        }else if(vocde!=code){
            this.showPhoneText().style='display:none';
            this.password2Text().style='display:none';
            this.passwordText().style='display:none';
            this.yzm().style='display:block';
        }else{
            http.get('reg',{username:phone,password:password}).then((res)=>{
                if(res){
                    this.yzm().style='display:none';
                    this.showPhoneText().style='display:none';
                    this.password2Text().style='display:none';
                    this.passwordText().style='display:none';
                    this.refs.vocde.value='';
                    this.refs.password.value='';
                    this.refs.password2.value='';
                    this.refs.phone.value='';
                    location.href='#/login';
                }
            }) 
        }
    }
    render(){
        return(
            <div id="register">
                <ul className="header">
                    <li>
                        <Link to="/login">
                            <i className="icon iconfont icon-zuojiantou"></i>
                        </Link>
                    </li>
                    <li>注册</li>
                    <li className="right"></li>
                </ul>
                <div className="main">
                    <div className="zhezhao"></div>
                    <div className="list-block">
                        <div className="list-item">
                            <i className="icon iconfont icon-wode"></i>
                            <input type="text" className="phone" placeholder="手机号" ref="phone"/>          
                        </div>
                        <div className="list-item">
                            <i className="icon iconfont icon-mima"></i>
                            <input type="text" className="password" placeholder="密码" ref="password"/>
                        </div>
                        <div className="list-item">
                            <i className="icon iconfont icon-mima"></i>
                            <input type="text" className="password2" placeholder="确认密码" ref="password2"/>
                        </div>
                        <div className="list-item2">
                            <i className="icon iconfont icon-yanzhengma"></i>
                            <input type="text" className="vocde" placeholder="请输入验证码" ref="vocde"/> 
                            <input type="text" className="code" ref="code"/>
                        </div>
                    </div>
                    <div className="select">
                        <div>
                            <p ref="phoneText" className="phoneText">请输入正确的手机号</p>
                            <p ref="passwordText" className="passwordText">请输入密码</p>
                            <p ref="password2Text" className="password2Text">请输入相同密码</p>
                            <p ref="yzm" className="yzm">请输入正确得验证码</p>
                            <p>注册代表您以同意《聚橙网络协议》</p>
                        </div>
                    </div>
                    <div className="btn-box">
                        <div className="btn-block" onClick={this.registerName.bind(this)}>注册</div>
                    </div>
                </div>
            </div>
        )
    }
}