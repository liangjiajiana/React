import React , {Component} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'

import http from '../../utils/httpclient.js'
import './Ljjindent.scss'

import ModalComponent from '../ModalComponent/ModalComponent'
export default class LjjindentComponent extends Component{
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
    componentWillMount(){
        var data = window.localStorage.getItem('user');
        if(data){
            data=JSON.parse(data);  
            http.get('order',{username:data.username}).then((res)=>{
                if(res.status){
                    this.setState({
                        dataset:res.data
                    })
                }else{

                }
            })
        }else{
            location.href='#/login';
        }
    }
    render(){
        return(
            <div id="Ljjindent">
                <ul className="header">
                    <li>
                        <Link to="/mine">
                            <i className="icon iconfont icon-zuojiantou"></i>
                        </Link>
                    </li>
                    <li>我的订单</li>
                    <li>
                        <i className="icon iconfont icon-more" onClick={this.showup.bind(this)}></i>
                    </li>
                </ul>
                <div className="zhezhao"></div>
                <ul className="list-item">
                    {
                        this.state.dataset.map((item)=>{
                            console.log(item);
                            return(
                                <li className="list" key={item.id}>
                                    <div className="orderTime">
                                        <span>下单时间:2017年</span>
                                        <span>等待付款</span>
                                    </div>
                                    <div className="list-c">
                                        <img src={item.imgs}/>
                                        <div className="list-details">
                                            <span  className="name" >{item.title}</span>
                                            <span className="time">时间：<span>{item.time}</span></span>
                                            <span className="venue">场馆：<sapn>{item.venue}</sapn></span>
                                            <span className="price">￥{item.price} <span className="qty">共{item.qty}张</span></span>
                                        </div>
                                    </div>
                                    <div className="list-b">
                                        <button className="cancellation">取消订单</button>
                                        <Link to="/payment">
                                            <button className="promptly">立即付款</button>
                                        </Link>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <ModalComponent show={this.state.show}  ob={this.s_h.bind(this)}/>
            </div>
        )
    }
}