import React , {Component} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'

import './littleswan.scss'
import http from '../../utils/httpclient.js'
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
    componentWillMount(){
        var username = JSON.parse(window.localStorage.getItem('user')).username
        http.get('useraddr',{username:username}).then((res)=>{
            this.setState({
                dataset:res.data
            })
        })
    }
    get(idx){
        var obj = this.state.dataset[idx]
        var sta=JSON.parse(window.localStorage.getItem('user'))
        sta.adr=obj
        var orderid=sta.orderid;
        var str=JSON.stringify(sta);
        window.localStorage.setItem('user',str)
        this.props.router.push('/confirmorder/'+orderid)
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
                     {
                     this.state.dataset.map((item,idx)=>{
                         return(
                            <ul className="group" key={item.id}>
                                <div className="group1">
                                    <input type="checkbox" onClick={this.get.bind(this,idx)}/>
                                    <div>
                                        <div className="little">
                                            <div>
                                                <div className="littleMessage">
                                                    <span className="name">{item.username}</span>
                                                    <span className="phone">{item.phone}</span>
                                                </div>
                                                <div className="address">{item.address}  {item.adrdeta}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <i className="icon iconfont icon-bianji"></i>
                                </div>
                            </ul>
                             
                         )
                     })
                 }
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