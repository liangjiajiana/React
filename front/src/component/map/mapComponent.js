/* 
* @Author: Marte
* @Date:   2018-03-28 12:06:17
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-29 20:52:04
*/

import React,{Component} from 'react'
import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router';
import ReactDOM from 'react-dom'
import http from '../../utils/httpclient.js'
import JumppageComponent from './jumppage/jumppageComponent.js'
import './mapComponent.scss'

export default class MapComponent extends Component{
    state={
        dataset:[],
        
    }
    componentDidMount=()=>{
        var id = this.props.params.id;
        this.setState({
            spinnerShow: true
        })
        http.get('http://10.3.136.36:8080/sgoods',{id:id}).then((res) => {
            this.setState({
                
                dataset: res.data,
                
            })
            console.log(this.state.dataset[0].venue)
            // 百度地图API功能
             var map = new BMap.Map("l-map");
             map.centerAndZoom('广州', 12);
console.log(map);

             var transit = new BMap.TransitRoute(map, {
                 renderOptions: {map: map, panel: "r-result"}
             });
             transit.search("智汇park", this.state.dataset[0].venue);
        })


       
        
        
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
            <div id='mapcomponent'>

                <link rel="stylesheet" type="text/css" href="http://at.alicdn.com/t/font_605042_pwiaciigq6umzpvi.css" />
                <div className='header' ref='header'>
                    <div className='left'>
                        <a  onClick={this.back.bind(this)}><span className='iconfont icon-fanhui'></span></a>
                    </div>
                    <div className='center'>场馆地址</div>
                    <div className='right'>
                        <a onClick={this.showjumppage.bind(this)}><span className='iconfont icon-more'></span></a>
                    </div>
                </div>
                <JumppageComponent show={this.state.jumppageshow} changemask={this.changemask}/>
                <div className="body">
                    
                   
                    <div id="l-map"></div>
                    <div id="r-result"></div>
                    
                    
                </div>
                <div className='footer'>
                    {
                        this.state.dataset.map((item)=>{
                            return <a key={item.id}>
                                <div className='imgbox'><img src={item.imgs}/></div>
                                <div className='contentbox'>
                                    <p>{item.venue}</p>
                                    <p>联系电话：<span>暂无</span></p>
                                    <p>近期演出：<span>19</span>场</p>
                                </div>
                            </a>
                        })
                    }
                </div>
                <div className='mask' ref='mask' onClick={this.changemask.bind(this)}></div>
            </div>
        )
    }
}