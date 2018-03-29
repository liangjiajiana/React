/* 
* @Author: Marte
* @Date:   2018-03-28 16:51:38
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-29 19:35:09
*/

import React,{Component} from 'react';

import './jumppageComponent.scss';
import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router';
export default class JumppageComponent extends Component{

    render(){
        
        let html = (
            <div className='jumppagecomponent'>
                <link rel="stylesheet" type="text/css" href="http://at.alicdn.com/t/font_607962_ij4sszle91wcdi.css" />
                <Link to='/'><span className='iconfont icon-iconfuzhi'></span>首页</Link>
                <Link to='mine'><span className='iconfont icon-shouye'></span>我的聚灯</Link>
                <div className='triangle'></div>
            </div>  
        )


        return this.props.show ? html : null;
    }
}