/* 
* @Author: Marte
* @Date:   2018-03-28 16:51:38
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-28 16:51:56
*/

import React,{Component} from 'react';

import './jumppageComponent.scss';

export default class JumppageComponent extends Component{

    render(){
        
        let html = (
            <div className='jumppagecomponent'>
                <link rel="stylesheet" type="text/css" href="http://at.alicdn.com/t/font_607962_ij4sszle91wcdi.css" />
                <a><span className='iconfont icon-iconfuzhi'></span>首页</a>
                <a><span className='iconfont icon-shouye'></span>我的聚灯</a>
                <div className='triangle'></div>
            </div>  
        )


        return this.props.show ? html : null;
    }
}