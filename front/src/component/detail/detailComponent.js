/* 
* @Author: Marte
* @Date:   2018-03-26 14:11:18
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-29 10:10:35
*/

import React,{Component} from 'react';
import http from '../../utils/httpclient.js'
import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router';
import './detail.scss';

import JumppageComponent from './jumppage/jumppageComponent.js'

export default class DetailComponent extends Component{
    state={
        dataset:[],
        jumppageshow:false,
    }
    componentWillMount = () => {
        var id = this.props.params.id;
        this.setState({
            spinnerShow: true
        })
        http.get('http://10.3.136.36:8080/sgoods',{id:id}).then((res) => {
            this.setState({
                spinnerShow: false,
                dataset: res.data,
                rowsCount: res.rowsCount
            })
            
        })
    }
    hidehead = (e) => {
        
        //动画效果
        function animate(ele,opt,callback){
            // 记录动画数量
            let timerLen = 0;

            // 遍历opt
            for(var attr in opt){
                // 如何把attr限定到局部作用域中
                // ES6解决方案：用let声明attr
                // 传统解决方案：利用函数传参

                createTimer(attr);

                timerLen++;
            }

            function createTimer(attr){
                // 为每个属性设置不同的定时器(关键1)
                let timerName = attr + 'timer';
                let target = opt[attr];

                clearInterval(ele[timerName]);

                // 把定时器与Dom关联（关键2）
                ele[timerName] = setInterval(()=>{
                    // 先获取当前值
                    let current = getComputedStyle(ele)[attr];//String:100px,50rem,0.5,60deg

                    // 提取数值：单位
                    // 根据当前值提取单位(单位在current最后面)
                    let unit = current.match(/[a-z]+$/);
                    if(unit){
                        current = current.substring(0,unit.index)*1;
                        unit = unit[0]
                    }else{
                        unit = '';
                        current *= 1;
                    }

                    // 计算速度
                    let speed = (target - current)/10;

                    // 处理speed值，防止speed为小数而造成定时器无法完成的情况
                    // 0.3=>1,-0.3=>-1
                    speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);


                    if(attr === 'opacity'){
                        speed = speed>0 ? 0.05 : -0.05;
                    }

                    // 动画完成
                    if(current === target){
                        clearInterval(ele[timerName]);
                        current = target - speed;

                        timerLen--;

                        if(typeof callback === 'function' && timerLen === 0){
                            callback();
                        }
                    }

                    ele.style[attr] = current + speed + unit;
                },30)
            }
            
        }
        if(e.target.scrollTop>0){
            
            animate(this.refs.headercover,{opacity:0})
            
        }else{
            animate(this.refs.headercover,{opacity:1})

        }
    }
    showjumppage = ()=>{
        this.setState({jumppageshow:true})
        this.refs.mask.style.display='block'
    }
    changemask = () => {
        this.setState({jumppageshow:false})
        this.refs.mask.style.display='none'
    }
    back = () => {
        window.history.back()
    }
    render(){
        return(
            <div id='Detail'>
                <link rel="stylesheet" type="text/css" href="http://at.alicdn.com/t/font_605042_pwiaciigq6umzpvi.css" />
                <div className='header' ref='header'>
                    <div className='left'>
                        <a><span className='iconfont icon-fanhui'></span></a>
                    </div>
                    <div className='center'>演出详情</div>
                    <div className='right'>
                        <a><span className='iconfont icon-more'></span></a>
                    </div>
                </div>
                <div className='headercover' ref='headercover'>
                    <div className='left'>
                        <a onClick={this.back.bind(this)}><span className='iconfont icon-fanhui'></span></a>
                    </div>
                    
                    <div className='right'>
                        <a onClick={this.showjumppage.bind(this)}><span className='iconfont icon-more'></span></a>
                    </div>
                    
                </div>
                <JumppageComponent show={this.state.jumppageshow} changemask={this.changemask}/>
                <div className='main' onScroll = {this.hidehead.bind(this)}>
                    <div className='msg'>
                        <div className='shady'>
                            <div className='imgbox'>
                            {
                                this.state.dataset.map((item)=>{
                                    return <img key={item.id} src={item.imgs}/>
                                })
                            }
                            <span></span></div>
                            <a className='tour'>24场巡演</a>
                        </div>
                        <div className='whitecover'></div>
                        <div className='text'>
                            {
                                this.state.dataset.map((item)=>{
                                    return    <h3 className='title' key={item.id}>{item.title}</h3>
                                })
                            }
                            <p>时间：
                            {
                                this.state.dataset.map((item)=>{
                                    return    <span className='time' key={item.id}>{item.time}</span>
                                })
                            }
                            </p>
                            <p>场馆：
                            {
                                this.state.dataset.map((item)=>{
                                    return    <span className='venue' key={item.id}>{item.venue}</span>
                                })
                            }
                            {
                                this.state.dataset.map((item)=>{
                                    return    <Link  key={item.id} to={'map/'+this.state.dataset[0].id} className='location iconfont icon-location'></Link>
                                })
                                
                            }
                            </p>
                            <p>￥
                            {
                                this.state.dataset.map((item)=>{
                                    return    <span className='price' key={item.id}>{item.price}</span>
                                })
                            }
                            </p>
                            <div><p>欢聚橙卡：<span>欢乐家庭卡PLUS</span><span>999聚橙会员储值卡</span></p><span className='iconfont icon-more'></span></div>
                        </div>
                    </div>
                    <div className='produce'>
                        <h3>— 演出介绍 —</h3>
                        {
                            this.state.dataset.map((item)=>{
                                return    <p className='introduce' key={item.id}>{item.introduce}</p>
                            })
                        }
                        <a>查看详情<span className='iconfont icon-jiantouxia'></span></a>
                    </div>
                    <div className='instructions'>
                        <h3>— 购票须知 —</h3>
                        <p>1.为避免快递配送不能及时到达，距演出开场时间少于3天不提供快递服务，您可以选择电子票或者在线支付后上门自取纸质票。（主办演出可在演出现场取票）。</p>
                        <p>2.网上订购请提前选择您意欲购买的演出和票品价位，根据流程提示完成订票。</p>
                        <p>3.成功下单后，我们将短信与你确认订单信息，如有任何疑问，请致电我们的客服热线：400-185-8666，客服人员将第一时间为您服务。</p>
                        <p>4.因票品的特殊性，一经订购，不退不换，请订票前务必确认购买意向。</p>
                        <p>入场须知：<span>一人一票，凭票入场。</span></p>
                    </div>
                </div>
                <div className='footer'>
                    <Link to={'customerservice'}><span className='iconfont icon-tubiao-'></span><p>客服</p></Link>
                    {
                        this.state.dataset.map((item)=>{
                            return   <Link to={'selectprice/'+this.state.dataset[0].id} key={item.id}>立即购票</Link>
                            
                        })
                    }
                    
                </div>
                <div className='mask' ref='mask' onClick={this.changemask.bind(this)}></div>
            </div>
        )
    }
} 