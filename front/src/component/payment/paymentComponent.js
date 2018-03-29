import React,{Component} from 'react'
import {Link} from 'react-router'
import './payment.scss'
import $ from 'jquery'

export default class PaymentComponent extends Component{

    componentDidMount(){
        //最终时间
        var overtime = new Date(1522532235605+2*3600*1000);
        function showTime(){
            var nowtime = new Date();
            //计算差值
            var offset = Math.floor((overtime-nowtime)/1000)
            var hour = Math.floor(offset/60/60)%24;
            var fen = Math.floor(offset/60)%60
            var miao =Math.floor(offset%60)
            hour = hour<10? '0'+hour : hour;
            fen = fen<10? '0'+fen : fen;
            miao = miao<10? '0'+miao : miao;
            //时间
            var time = hour + ' : ' + fen + ' : ' + miao;
            $(this.refs.time).html(time);
        }
        var timer = setInterval(showTime.bind(this),1000);
    }
    active(event){
        if(event.target.className=='fa fa-check-circle'){
            $(event.target).addClass('active').parent().parent().siblings('li').find('span').removeClass('active');
        }
    }
    fukuan(){
        alert('您已支付成功~')
    }
    render(){
        return(
            <div id="ccjzhifu">
                <div id="ccjheader"> 
                        <Link to="/confirmorder">
                            <span className="fanhui  fa fa-angle-left"></span>
                        </Link>
                        <div className="center">
                            支付订单
                        </div>
                </div>
                <div id="ccjmian">
                    <div className="time">
                        <p>剩余支付时间</p>
                        <div className="remainingtime" ref="time">
                        </div>
                    </div>
                    <div className="zhifufangshi" onClick={this.active.bind(this)}>
                        <ul>
                            <li>
                                <div>
                                    <p>
                                        招商银行(快钱)
                                    </p>
                                </div>
                                <div className="right">
                                    <span className="fa fa-check-circle">
                                    </span>
                                </div>
                                
                            </li>
                            <li>
                                <div>
                                    <p>银联</p>
                                </div>
                                <div className="right">
                                    <span className="fa fa-check-circle">
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span className="icon iconfont icon-unie654 bao"></span>
                                    <p>支付宝网页支付</p>
                                </div>
                                <div className="right">
                                    <span className="fa fa-check-circle">
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span className="icon iconfont icon-baidu1 baidu"></span>
                                    <p>百度钱包支付

                                    </p>
                                </div>
                                <div className="right">
                                    <span className="fa fa-check-circle">
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span className="icon iconfont icon-yinhang-yinlian- yin"></span>
                                    <p>银联支付</p>
                                </div>
                                <div className="right">
                                    <span className="fa fa-check-circle">
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="ccjfooter">
                        <div className="footerleft" onClick={this.fukuan.bind(this)}>
                            <span>
                                确认支付 <span className="yingfu">￥ 195.00</span>
                            </span>
                            <span>

                            </span>
                        </div>
                </div>
            </div>
        )
    }
}