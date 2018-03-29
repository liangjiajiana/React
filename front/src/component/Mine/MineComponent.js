import React, { Component } from 'react'
import {Link} from 'react-router'
import ReactDOM from 'react-dom'

import './Mine.scss'
import http from '../../utils/httpclient.js'
import FooternavComponent from '../footernav/footernavComponent'

export default class MineComponent extends Component{
    state = {
        information:{}
    }
    componentWillMount(){
        var data = window.localStorage.getItem('user');
        if(data){
            data=JSON.parse(data)
           this.setState({
                information:data
            })
        }else{
            location.href='#/login';
        }
        
    }
    render(){
        return(
            <div id="Mine">
                <div className="header">
                    <div className="header-left">
                        <div>
                            <img src="src/component/Mine/Mine.png" />
                        </div>
                        <div>
                            <span className="name">{this.state.information ? this.state.information.username : 123}</span>
                            <sapn className="myID">ID:{this.state.information ? this.state.information.id : 123}</sapn>
                        </div>
                    </div>
                    <div className="header-right">
                        <Link to="/settings">
                            <i className="icon iconfont icon-youjiantou-01"></i>
                        </Link>
                    </div>
                </div>
                <div className="main">
                    <ul className="category-wrap">
                        <li>
                            <span>0.00元</span>
                            <span>余额</span>
                        </li>
                        <li>
                            <span>6分</span>
                            <span>积分</span>
                        </li>
                        <li>
                            <span>0张</span>
                            <span>橙卡</span>
                        </li>
                        <li>
                            <span>0张</span>
                            <span>优惠卷</span>
                        </li>
                    </ul>
                    <div className="zhezhao"></div>
                    <div className="indent">
                        <div className="indent-left">
                            <i className="icon iconfont icon-dingdan"></i>
                                <span>我的订单</span>
                        </div>
                        <div>
                            <Link to="/ljjindent">
                                <i className="icon iconfont icon-youjiantou-01"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="zhezhao"></div>
                    <div className="bag">
                        <div>
                            <i className="icon iconfont icon-qiabao"></i>
                            <span>我的卡包</span>
                        </div>
                        <div>
                            <span>了解详情</span>
                            <i className="icon iconfont icon-youjiantou-01"></i>
                        </div>
                    </div>
                    <div className="zhezhao"></div>
                    <div className="member">
                        <div>
                            <i className="icon iconfont icon-huiyuan"></i>
                            <span>会员中心</span>
                        </div>
                        <div>
                            <i className="icon iconfont icon-youjiantou-01"></i>
                        </div>
                    </div>
                    <div className="zhezhao"></div>
                    <div className="attention">
                        <div>
                            <i className="icon iconfont icon-xiazai11"></i>
                            <span>我的关注</span>
                        </div>
                        <div>
                            <i className="icon iconfont icon-youjiantou-01"></i>
                        </div>
                    </div>
                    <div className="address">
                        <div>
                            <i className="icon iconfont icon-address_icon"></i>
                            <span>收货地址</span>
                        </div>
                        <div>
                            <Link to="/littleswan">
                                <i className="icon iconfont icon-youjiantou-01"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="zhezhao"></div>
                    <div className="message">
                        <div>
                            <i className="icon iconfont icon-xiaoxi"></i>
                            <span>我的消息</span>
                        </div>
                        <div>
                            <i className="icon iconfont icon-youjiantou-01"></i>
                        </div>
                    </div>
                    <div className="opinion">
                        <div>
                            <i className="icon iconfont icon-yijianfankui"></i>
                            <span>意见反馈</span>
                        </div>
                        <div>
                            <i className="icon iconfont icon-youjiantou-01"></i>
                        </div>
                    </div>
                    <div className="zhezhao"></div>
                    <div className="phone">
                        <div>
                            <i className="icon iconfont icon-lianxidianhua"></i>
                            <span>联系电话</span>
                        </div>
                        <div>
                            <span>400-185-8666</span>
                            <i className="icon iconfont icon-youjiantou-01"></i>
                        </div>
                    </div>
                    <div className="service">
                        <div className="serviceHotline">
                            <i className="icon iconfont icon-zaixiankefu"></i>
                            <Link to='customerservice'>在线客服</Link>
                        </div>
                    </div>
                </div>
                <FooternavComponent/>
            </div>
        )
    }
}