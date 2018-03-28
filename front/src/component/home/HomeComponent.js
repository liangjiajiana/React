import React, { Component } from 'react'

import ReactDOM from 'react-dom'

import connect from 'react-redux'

import http from '../../utils/httpclient.js'

import {Link} from 'react-router'

import CarouselComponent from '../carousel/carouselComponent.js'


import './home.scss'

import FooternavComponent from '../footernav/footernavComponent'

export default class HomeComponent extends Component{
    state = { //定义一个变量接收数据
        data:'',
        dataset: []
    }
    componentWillMount(){
        http.get('sgoods',{top:'hot'}).then((res)=>{
            this.setState({   //在这里改变dataset的值
                dataset:res.data
            })

            console.log(this.state.dataset);


        })
    }
    componentDidMount(){
        var mySwiper = new Swiper('.swiper-container',{

            direction:'horizontal',

            autoplay:2000,

            loop:true,

            pagination:'.swiper-pagination',

            paginationClickable:true,

            nextButton:'.swiper-button-next',
            prevButton:'.swiper-button-prev',

            autoplayDisableOnInteraction:false,
        })
    }
    render() {
        return (
            <div id="home">
                <div className="header">
                    <ul>
                        <li className="address">广州<i className="iconfont icon-down"></i></li>
                        <li className="search">
                            <div><Link to="/search"><i className="iconfont icon-sousuosearch82"></i>搜索演出、艺人或场馆</Link></div>
                        </li>
                    </ul>
                </div>
                <div className="banner">
                    <CarouselComponent />
                </div>    
                <div className="nav">
                    <div className="nav_t">
                        <div><Link to="/search"><i className="iconfont icon-jita"></i>演唱会</Link></div>
                        <div><Link to="/login"><i className="iconfont icon-zhuanjiguangpan"></i>音乐会</Link></div>
                        <div><Link to="/mine"><i className="iconfont icon-huapimianju1"></i>舞台剧</Link></div>
                        <div><Link to="/search"><i className="iconfont icon-huatong"></i>音乐剧</Link></div>
                        <div><Link to="/performance"><i className="iconfont icon-ertong"></i>儿童</Link></div>
                    </div>
                    <div className="nav_b">
                        <div><i className="iconfont icon-rili"></i>日历</div>
                        <div><i className="iconfont icon-liwu"></i>聚特惠</div>
                        <div><i className="iconfont icon-xuesheng"></i>学生专区</div>
                        <div><i className="iconfont icon-qiapian"></i>欢聚橙卡</div>
                    </div>
                </div>
                <div className="main">
                        <h2>热门演出</h2>
                        <ul>
                            
                            {
                                this.state.dataset.map((item)=>{
                                    // console.log(item)
                                    return (
                                        <li key={item.id}>
                                            <div className='img'><img src={item.imgs} /></div>
                                            <div className="det">
                                                <h3>{item.title}</h3>
                                                <div>
                                                    <span className="date">{item.time}</span><br/>
                                                    <span>[广州] {item.venue}</span>
                                                </div>
                                                <p>¥ {item.price}</p>
                                            </div>
                                        </li>
                                    )
                                        
                                })
                            }

                        </ul>
                        <div className="lookall">
                            <p>查看全部演出<i className="iconfont icon-arrow"></i></p>
                        </div>
                </div>
                <FooternavComponent/>
                <div className="xiding"></div> 
            </div>
        )
    }
}