import React, { Component } from 'react'
import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router';
import ReactDOM from 'react-dom'

import './performance.scss'

import FooternavComponent from '../footernav/footernavComponent'
import SortPopupWindowComponent from './sortpopupwindow/sortpopupComponent.js'
import SpinnerComponent from '../../spinner/SpinnerComponent.js'

import http from '../../utils/httpclient.js'

export default class PerformanceComponent extends Component{
    state = {
        sorttype:undefined,
        rollingadd:4,
        sortpopupwindow:false,
        spinnerShow:false,
        dataset:[],
        rowsCount:0
    }
    componentDidMount = () => {
        this.setState({
            spinnerShow: true
        })
        http.get('http://10.3.136.36:8080/goods').then((res) => {
            this.setState({
                spinnerShow: false,
                dataset: res.data.slice(0,this.state.rollingadd),
                rowsCount: res.rowsCount
            })
        })

        if(this.props.params.id){
            var id = this.props.params.id;
            // var cn = ['全部','演唱会','音乐会','话剧歌剧','儿童亲子','音乐剧','舞蹈芭蕾','戏曲综艺','展览']
            var en = [undefined,'con','mu','mo','ch','muj','balei','xiju','zl']
            var idx = en.indexOf(id);
            
            var type = id;
            this.setState({sorttype:type,rollingadd:4});
            this.refs.main.scrollTo(0,0);


            for(var i=0;i<this.refs.sorttitle.children.length;i++){
                this.refs.sorttitle.children[i].style.borderBottom = 'none'
                this.refs.sorttitle.children[i].children[0].style.color = '#666'
            }
            
            this.refs.sorttitle.children[idx].style.borderBottom = '2px solid red'
            this.refs.sorttitle.children[idx].children[0].style.color = 'red'
            this.setState({
                spinnerShow: true
            })
            http.get('http://10.3.136.36:8080/sgoods',{kind:type}).then((res) => {
                this.setState({
                    spinnerShow: false,
                    dataset: res.data.slice(0,this.state.rollingadd),
                    rowsCount: res.rowsCount
                })
            })
        }
        
    }
    sort = (e) => {
        if(e.target.tagName.toLowerCase()=='a'){
            var cn = ['全部','演唱会','音乐会','话剧歌剧','儿童亲子','音乐剧','舞蹈芭蕾','戏曲综艺','展览']
            var idx = cn.indexOf(e.target.innerHTML);
            var en = [undefined,'con','mu','mo','ch','muj','balei','xiju','zl']
            var type = en[idx];
            this.setState({sorttype:type,rollingadd:4});
            this.refs.main.scrollTo(0,0);


            for(var i=0;i<this.refs.sorttitle.children.length;i++){
                this.refs.sorttitle.children[i].style.borderBottom = 'none'
                this.refs.sorttitle.children[i].children[0].style.color = '#666'
            }
            
            this.refs.sorttitle.children[idx].style.borderBottom = '2px solid red'
            this.refs.sorttitle.children[idx].children[0].style.color = 'red'
            this.setState({
                spinnerShow: true
            })
            http.get('http://10.3.136.36:8080/sgoods',{kind:type}).then((res) => {
                this.setState({
                    spinnerShow: false,
                    dataset: res.data.slice(0,this.state.rollingadd),
                    rowsCount: res.rowsCount
                })
            })
        }
        
    }
    changesortpopupwindow = () => {
        this.setState({sortpopupwindow:true})
        this.refs.mask.style.display='block'
    }
    changemask = () => {
        this.setState({sortpopupwindow:false})
        this.refs.mask.style.display='none'
    }
    timesort = () =>{
        var tempdataset = this.state.dataset;
        for(var j=0;j<tempdataset.length;j++){         
            for(var i=0;i<tempdataset.length-j-1;i++){
                
                    if(tempdataset[i].time>tempdataset[i+1].time){
                       
                       var tem=tempdataset[i+1];
                        tempdataset[i+1]=tempdataset[i];
                        tempdataset[i]=tem;
                    }
            } 
        }
        this.setState({dataset:tempdataset})
    }
    recommondsort = () =>{
        var tempdataset = this.state.dataset;
        for(var j=0;j<tempdataset.length;j++){         
            for(var i=0;i<tempdataset.length-j-1;i++){
                
                    if(tempdataset[i].id>tempdataset[i+1].id){
                       
                       var tem=tempdataset[i+1];
                        tempdataset[i+1]=tempdataset[i];
                        tempdataset[i]=tem;
                    }
            } 
        }
        this.setState({dataset:tempdataset})
    }
    rollingload = (e) => {
        // console.log(e.target.children[0].offsetHeight)
        // console.dir(e.target.offsetHeight)
        // console.dir(e.target.scrollTop)
        // console.log(e.target.children[0].offsetHeight+16-(e.target.offsetHeight+e.target.scrollTop))
        // console.log((e.target.children[0].offsetHeight+16-(e.target.offsetHeight+e.target.scrollTop))*1)
        if((e.target.children[0].offsetHeight+16-(e.target.offsetHeight+e.target.scrollTop))*1<=5){
            this.refs.loading.innerHTML = "<span class='fa fa-spin fa-spinner'></span>加载中..."
            var timer = setTimeout(()=>{
                this.setState({rollingadd:this.state.rollingadd+4})
                http.get('http://10.3.136.36:8080/sgoods',{kind:this.state.sorttype}).then((res) => {
                    this.setState({
                        dataset: res.data.slice(0,this.state.rollingadd),
                    })
                    
                    if(res.data.length <= res.data.slice(0,this.state.rollingadd).length){
                        this.refs.loading.innerHTML = '没有更多了'
                    }
                })
            }, 1000)
            
        }

    }
    render(){
        return(
            
            <div id="Performance">
                <link href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
                <link rel="stylesheet" type="text/css" href="http://at.alicdn.com/t/font_604592_v71va6ivcx1dcxr.css" />
                <div className='header'>
                    <div className='searchbar'>
                        <a className='location'><span>广州</span><span className='iconfont icon-jiantouxia'></span></a>
                        <Link className='search' to='search'><span className='iconfont icon-fangdajing'></span><span>搜索演出、艺人或场馆</span></Link>
                        <a className='sort' onClick={this.changesortpopupwindow.bind(this)}><span className='iconfont icon-sort_icon'></span></a>
                        <SortPopupWindowComponent show={this.state.sortpopupwindow} changemask={this.changemask} timesort={this.timesort} recommondsort={this.recommondsort}></SortPopupWindowComponent>
                    </div>
                    <div className='searchnav'>
                        <div className='searchnavwrap'>
                            <ul onClick={this.sort.bind(this)} ref='sorttitle'>
                                <li><a>全部</a></li>
                                <li><a>演唱会</a></li>
                                <li><a>音乐会</a></li>
                                <li><a>话剧歌剧</a></li>
                                <li><a>儿童亲子</a></li>
                                <li><a>音乐剧</a></li>
                                <li><a>舞蹈芭蕾</a></li>
                                <li><a>戏曲综艺</a></li>
                                <li><a>展览</a></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <div className="main" onScroll={this.rollingload.bind(this)} ref='main'>
                    <div className='mainwrap'>
                        <SpinnerComponent show={this.state.spinnerShow}/>
                        <ul>
                            {
                                this.state.dataset.map((item,idx)=>{
                                    return <li key={item.id}>
                                                <Link to={'detail/'+item.id}>
                                                    <div>
                                                        <img src={item.imgs}/>
                                                        <span></span>
                                                    </div>
                                                    <div>
                                                    <p>{item.title}</p>
                                                    <p>{item.time}</p>
                                                    <p>[<span>广州</span>]<span>{item.venue}</span></p>
                                                    <p>￥<span>100</span>-<span>200</span></p>
                                                    </div>
                                                </Link>
                                            </li>
                                })
                            }
                        </ul>
                        <h3 ref='loading'><span className='fa fa-spin fa-spinner'></span>加载中...</h3>
                    </div>
                </div>
                <FooternavComponent/>
                <div className='mask' ref='mask' onClick={this.changemask.bind(this)}></div>

            </div>
        )
    }
}