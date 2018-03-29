import React , {Component} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'

import './littleswan.scss'

import ModalComponent from '../ModalComponent/ModalComponent'
export default class LittleswanComponent extends Component{
    state={
        show: false,
        dataset:[]
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
    render(){
        return(
            <div id="littleswan">
               <ul className="header">
                    <li>
                        <Link to="/mine">
                            <i className="icon iconfont icon-zuojiantou"></i>
                        </Link>
                    </li>
                    <li>我的地址</li>
                    <li>
                        <i className="icon iconfont icon-more" onClick={this.showup.bind(this)}></i>
                    </li>
                </ul>
                 <div className="main">
                    <ul className="group">
                        <div className="group1">
                            <input type="checkbox" />
                            <div>
                                <div className="littleMessage">
                                    <span className="name">卢本伟</span>
                                    <span className="phone">18718361398</span>
                                </div>
                                <div className="address">广东省广州市越秀区</div>
                            </div>
                        </div>
                        <div>
                            <i className="icon iconfont icon-bianji"></i>
                        </div>
                    </ul>
                    <ul className="group">
                        <div className="group1">
                            <input type="checkbox" />
                            <div>
                                <div className="littleMessage">
                                    <span className="name">卢本伟</span>
                                    <span className="phone">18718361398</span>
                                </div>
                                <div className="address">广东省广州市越秀区</div>
                            </div>
                        </div>
                        <div>
                            <i className="icon iconfont icon-bianji"></i>
                        </div>
                    </ul>
                    <div className="addSite">
                        <Link to="/address">
                            <div>添加新地址</div>
                        </Link>    
                    </div>
                 </div>
                 <ModalComponent show={this.state.show}  ob={this.s_h.bind(this)}/>
            </div>
        )
    }
}