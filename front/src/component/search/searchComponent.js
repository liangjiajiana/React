import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import connect from 'react-redux'

import http from '../../utils/httpclient.js'

import {Link} from 'react-router'

import './search.scss'

export default class searchComponent extends Component{
    state = {
        dataset:[],
        data:''
    }
    fuzzy(){
        var data=this.refs.fu.value
        if(data){
            http.get('fuzzygoods',{data}).then((res)=>{
                this.setState({
                    dataset:res[0]
                })
                // console.log(this.state.dataset)
            })
        }
    }
    render(){
        return(
            <div id="search">
                <div className="header">
                    <ul>
                        <Link to="#"><li className="iconfont icon-zuojiantou"></li></Link>
                        <li>
                            <i className="iconfont icon-sousuosearch82"></i>
                            <input type="text" placeholder="演出/艺人/场馆" onInput={this.fuzzy.bind(this)} ref="fu" />
                        </li>
                        <li >搜索</li>
                    </ul>
                </div>
                <div className="main">
                    <h3>大家都在找</h3>
                    <ul className="moren">
                        <li>Cats</li> 
                        <li>吉屋出租</li>
                        <li>谭咏麟</li>
                        <li>罗密欧与朱丽叶</li>
                        <li>陈慧娴</li>
                        <li>长腿叔叔</li>
                    </ul>
                    <div className="list">
                        <ul>
                            {
                                this.state.dataset.map((item)=>{
                                    console.log(item);
                                    return (
                                        <li key={item.id}>
                                            <Link to={'/performance/'+item.id} className="gto">
                                                <div className='img'><img src={item.imgs} /></div>
                                                <div className="det">
                                                    <h3>{item.title}</h3>
                                                    <div>
                                                        <span className="date">{item.time}</span><br/>
                                                        <span>[广州] {item.venue}</span>
                                                    </div>
                                                    <p>¥ {item.price}</p>
                                                </div>
                                                </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <ul className="list">
                        
                    </ul>
                </div>
                <div className="backTo">

                </div>
            </div>
        )
    }
}