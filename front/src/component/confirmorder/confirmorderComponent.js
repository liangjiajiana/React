import React,{Component} from 'react'
import {Link} from 'react-router'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import './confirmorder.scss'

export default class ConfirmorderCoponent extends Component{
    change(){
            $(this.refs.one).show().siblings().hide()
    }
    centerchange(){
            $(this.refs.two).show().siblings().hide()
    }
    rightchange(){
            $(this.refs.three).show().siblings().hide()
    }
    render(){
        return(
                <div  id="ccjdingdan">
                    <div id="ccjheader"> 
                        <span className="fanhui  fa fa-angle-left"></span>
                        <div className="center">
                            确认订单
                        </div>
                    </div>
                    <div id="ccjmain">
                        <div className="tushuneirong">
                            <div className="tushuneirongs"> 
                                <div className="tushutop">
                                    <img src="../../../libs/1508126440245.jpg"/>
                                    <div className="name">
                                        <div className="tushuname">【小橙堡·微剧场】保加利亚温情故事木偶剧《顽皮小精灵》</div>
                                        <p>时间:<span></span></p>
                                        <p>场馆:<span></span></p>
                                    </div>
                                </div>
                                <div className="tushubuttom">
                                    <span className="piaoshu">
                                        合 计(<span> 1 </span> 张)
                                    </span>
                                    <div className="zongjia">
                                    ￥<span>180.00</span><i className="fa fa-chevron-circle-down"></i>
                                    </div>
                                </div>
                            </div>
                        </div>    
                        <div className="huodong">
                            <div className="huodongmain">
                                <div className="huodongleft">
                                    <span className="fa fa-gift"></span>
                                    <span>活动/优惠</span>
                                </div>
                                <div className="huodongright">
                                    活动/优惠劵/优惠码
                                </div>

                            </div>
                        </div>
                        <div className="peisong">
                            <p>配送方式:</p>
                            <div className="sanzhong">
                                <span onClick={this.change.bind(this)}>快递</span>
                                <span onClick={this.centerchange.bind(this)}>上门取票</span>
                                <span onClick={this.rightchange.bind(this)}>现场取票</span>
                            </div>
                            <div className="adress">
                                <div className="showadress" ref="one">
                                    <p className="user">
                                        <span className="username">adsda</span>
                                        <span className="phone">
                                            18207856580
                                        </span>
                                    </p>
                                    <p className="dizhi"> 
                                        北京  北京 东城区88号
                                    </p>
                                </div>
                                <div className="cometogettickets" ref="two">
                                    <p>请填写姓名和手机号,该信息将作为取票凭证</p>
                                    <div className="messagecenter">
                                        <p className="one"><span className=" fa fa-user-o"></span><input type="text"/> </p>
                                        <p><span className=" fa fa-mobile-phone fonphone"></span><input type="text"/></p>
                                    </div>
                                    <div className="posaddresscenter">
                                        取票地址:<br/>
                                        广州市越秀区广州大道中289号289艺术PARK印报楼418<br/>
                                        <p>
                                            工作时间:<br/>
                                            周一至周五(8:30-18:00)
                                        </p>
                                    </div>
                                </div>
                                <div className="scenetickets" ref="three"> 
                                    <p>请填写姓名和手机号,该信息将作为取票凭证</p>
                                    <div className="message">
                                        <p className="one"><span className=" fa fa-user-o"></span><input type="text"/> </p>
                                        <p><span className=" fa fa-mobile-phone fonphone"></span><input type="text"/></p>
                                    </div>
                                    <div className="posaddress">
                                        取票地址:<br/>
                                        天河区天河路228号正佳广场七楼正佳影院
                                    </div>
                                </div>

                            </div> 
                        </div>
                        <div className="heji">
                            <div className="hejimain"> 
                                <ul>
                                <li><span>商品合计 :</span><span>￥ 140.00</span></li>
                                    <li>运费合计 :<span>￥ 140.00</span></li>
                                    <li>优惠:<span>￥ 140.00</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="ccjfooter">
                        <div className="footerleft">
                            <span>
                                应付 :<span className="yingfu">￥ 195.00</span>
                            </span>
                            <span>

                            </span>
                        </div>

                        <div className="footerright">
                                确定
                        </div>
                    </div>
                </div>
            )
        }
}