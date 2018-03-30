import React,{Component} from 'react'
import {Link} from 'react-router'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import './confirmorder.scss'
import http from '../../utils/httpclient.js'
export default class ConfirmorderCoponent extends Component{
    state = {
        dataset:[],
        address:{}
    }
    change(){
            $(this.refs.one).show().siblings().hide()
    }
    centerchange(){
            $(this.refs.two).show().siblings().hide()
    }
    rightchange(){
            $(this.refs.three).show().siblings().hide()
    }
    componentWillMount(){
        if(this.props.params.id){
            var obj=JSON.parse(window.localStorage.getItem('user')).adr
            if(obj){
            }else{
                obj={}
            }
            http.get('order',{id:this.props.params.id}).then((res) => {
                if(res.status){
                    this.setState({
                        dataset:res.data,
                        address:obj
                    })
                    if(res.data[0].status!='tbp'){
                        this.refs.check.style.background="#ccc"
                    }
                }else{
                    alert('订单已删除')
                    location.href="#/Ljjindent"
                }
                
            })
        }

    }
    get(id){
        if(window.localStorage.getItem('user')){
            var obj=JSON.parse(window.localStorage.getItem('user'));
            obj.orderid=id
            window.localStorage.setItem('user',JSON.stringify(obj));
        }
        location.href="#/littleswan"
    }
    payment(){
        
        var obj=JSON.parse(window.localStorage.getItem('user'))
        if(!obj.adr){
            alert('选择收货地址!')
        }else if(this.state.dataset[0].status=='tbp'){
           var id=this.state.dataset[0] ? this.state.dataset[0].id:12321
            this.props.router.push('/payment/'+id)
        }else{
             
        }

        
    }
    render(){
        return(
                <div  id="ccjdingdan">
                    <div id="ccjheader"> 
                        <Link to="/Ljjindent">
                            <span className="fanhui  fa fa-angle-left"></span>
                        </Link>
                        <div className="center">
                            确认订单
                        </div>
                    </div>
                    <div id="ccjmain">
                        <div className="tushuneirong">
                            <div className="tushuneirongs"> 
                                <div className="tushutop">
                                    <img src={this.state.dataset[0] ? this.state.dataset[0].imgs :'http://10.3.136.36:8080/assets/1.jpg'}/>
                                    <div className="name">
                                        <div className="tushuname">{
                                            this.state.dataset[0] ? this.state.dataset[0].title : 777
                                        }</div>
                                        <p>时间:<span>{this.state.dataset[0] ? this.state.dataset[0].time : 777}</span></p>
                                        <p>场馆:<span>{this.state.dataset[0] ? this.state.dataset[0].venue : 777}</span></p>
                                    </div>
                                </div>
                                <div className="tushubuttom">
                                    <span className="piaoshu">
                                        合 计(<span> 1 </span> 张)
                                    </span>
                                    <div className="zongjia">
                                    ￥<span>{this.state.dataset[0] ? this.state.dataset[0].price : 777}</span><i className="fa fa-chevron-circle-down"></i>
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
                            <div className="adress" onClick={
                                this.get.bind(this,this.state.dataset[0] ? this.state.dataset[0].id : 1)
                            }>
                                <div className="showadress" ref="one">
                                    <p className="user">
                                        <span className="username">{this.state.address? this.state.address.shouname:123 }</span>
                                        <span className="phone">
                                            {this.state.address? this.state.address.phone:123 }
                                        </span>
                                    </p>
                                    <p className="dizhi"> 
                                        {this.state.address? this.state.address.address:123 }
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
                                <li><span>商品合计 :</span><span>￥ {this.state.dataset[0] ? this.state.dataset[0].price : 777}</span></li>
                                    <li>运费合计 :<span>￥ {this.state.dataset[0] ? this.state.dataset[0].price : 777}</span></li>
                                    <li>优惠:<span>￥ {this.state.dataset[0] ? this.state.dataset[0].price : 777}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="ccjfooter">
                        <div className="footerleft">
                            <span>
                                应付 :<span className="yingfu">￥ {this.state.dataset[0] ? this.state.dataset[0].price : 777}</span>
                            </span>
                            <span>

                            </span>
                        </div>

                        <div className="footerright" onClick={this.payment.bind(this)} ref="check">
                                确定
                        </div>
                    </div>
                </div>
            )
        }
}