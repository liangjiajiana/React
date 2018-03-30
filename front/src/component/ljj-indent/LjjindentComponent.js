import React , {Component} from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory, IndexRoute,Link } from 'react-router';

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
    get(id){
        // location.href = '/confirmorder/'+id)
        this.props.router.push('/confirmorder/'+id)

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
    getstatus(str){
        var obj={
            tbp:'取消订单',
            yfk:'已付款',
            yqx:'已取消'
        }
        return obj[str]
    }
    payment(id){
        if(id){
            this.props.router.push('/confirmorder/'+id)
        }
    }
    change(id){
        console.log(this.refs['change'+id].innerText)
        if(this.refs['change'+id].innerText=='取消订单'){
            http.get('delorder',{id}).then((res) => {
                if(res.status){
                    this.refs['change'+id].innerText='已取消'
                     this.refs['change2'+id].style.display='none'
                    this.state.dataset.forEach((res) => {
                        if(res.id==id){
                            res.status='yqx';
                        }
                   })
                }
            })
        }else{

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
                            return(
                                <li className="list" key={item.id}>
                                    <div className="orderTime">
                                        <span>下单时间:2017年</span>
                                        <span>{this.getstatus(item.status)}</span>
                                    </div>
                                    <div className="list-c" onClick={this.get.bind(this,item.id)}>
                                        <img src={item.imgs}/>
                                        <div className="list-details">
                                            <span  className="name" >{item.title}</span>
                                            <span className="time">时间：<span>{item.time}</span></span>
                                            <span className="venue">场馆：<sapn>{item.venue}</sapn></span>
                                            <span className="price">￥{item.price} <span className="qty">共{item.qty}张</span></span>
                                        </div>
                                    </div>
                                    <div className="list-b">
                                        <button className="cancellation" onClick={this.change.bind(this,item.id)} ref={'change'+item.id}>{this.getstatus(item.status)}</button>
                                        <Link to="/payment" >
                                            <button className="promptly" ref={'change2'+item.id} style={{display:item.status=='tbp' ? 'block' : 'none'}} onClick={this.payment.bind(this,item.id)}>立即付款</button>
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