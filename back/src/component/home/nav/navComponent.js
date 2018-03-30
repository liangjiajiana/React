import React from 'react'
import {Router, Route, hashHistory, browserHistory, Link} from 'react-router'
import './nav.css'
import $ from 'jquery'
export default class NavComponent extends React.Component{

    s_h(e){
        console.log($(e.target).next('.div3'));
        $(e.target).next('.div3').slideToggle();
    }
    render(){
        return (<div>
                    <div className="left">
                    <div className="div1">
                    <div className="left_top">
                        <img src={require('./images/bbb_01.jpg')} />
                        <img src={require('./images/bbb_02.jpg')} />
                        <img src={require('./images/bbb_03.jpg')} />
                        <img src={require('./images/bbb_04.jpg')} /> 
                    </div>
                    <div className="div2" onClick={this.s_h.bind(this)}>
                        <div className="jbsz"></div>
                        商品管理
                    </div>
                    <div className="div3">
                        <ul>
                            <li> <Link to="/goods">商品信息</Link></li>
                            <li> <Link to="/addgoods">添加商品</Link></li>
                            <li> 导航菜单</li>
                        </ul>
                    </div>
                    <div className="div2" onClick={this.s_h.bind(this)}>
                        <div className="xwzx"></div>
                        用户管理
                    </div>
                    <div className="div3">
                        <ul>
                            <li> <Link to="/user">用户信息</Link></li>
                            <li> 文章分类</li>
                            <li> 添加文章</li>
                        </ul>
                    </div>
                    <div className="div2" onClick={this.s_h.bind(this)}>
                        <div className="zxcp"></div>
                        最新产品
                    </div>
                    <div className="div3">
                        <ul>
                            <li>图片管理</li>
                            <li> 图片分类</li>
                            <li> 添加图片</li>
                        </ul>
                    </div>
                      <div className="div2" onClick={this.s_h.bind(this)}>
                        <div className="lmtj"></div> 
                        栏目添加
                    </div>
                    <div className="div3">
                        <ul>
                            <li> 文章系统</li>
                            <li> 图片系统</li>
                            <li> 添加表单</li>
                            <li> 招聘系统</li>
                        </ul>
                    </div>
                    </div>
                    </div>
                    <div style={{
                        textAlign:'center',
                        margin:'50px 0',
                        font:"normal 14px/24px 'MicroSoft YaHei'"
                    }}>
                    </div>
                </div>
            )
        }
}