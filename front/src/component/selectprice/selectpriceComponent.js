/* 
* @Author: Marte
* @Date:   2018-03-26 19:21:33
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-29 12:28:04
*/

import React,{Component} from 'react';

import './selectpriceComponent.scss';
import http from '../../utils/httpclient.js'

export default class SelectPriceComponent extends Component{
    componentWillMount(){
        this.setState({
            spinnerShow: true
        })
        var id = this.props.params.id;
        http.get('http://10.3.136.36:8080/sgoods',{id:id}).then((res) => {
            this.setState({
                spinnerShow: false,
                dataset: res.data,
                rowsCount: res.rowsCount
            })
            this.setState({price:this.state.dataset[0].price.split('-')})
            
        })
    }
    state = {
        dataset:[],
        price:[],
        select:[]
    }
    select = (e)=>{
        if(e.target.tagName.toLowerCase()=='a'){
            e.target.parentNode.parentNode.className = 'priceselected'
            var newselect = this.state.select;
            
            for(var i=0;i<this.state.select.length;i++){
                if(this.state.select[i].price==e.target.innerHTML){
                    return
                }
            }
            newselect.push({num:1,price:e.target.innerHTML});
            
            
            
            
            this.setState({select:newselect})
        }
        
    }
    remove = (item)=>{
        var newselect = JSON.parse(JSON.stringify(this.state.select));
        for(var i=0;i<select.length;i++){
            if(select[i].price==e.target.innerHTML){
            
            }
        }
        var idx = newselect.indexOf(item);
        newselect.splice(idx,1);
        this.setState({select:newselect})
        
    }
    render(){
        return(
            <div id='SelectPrice'>
                <link rel="stylesheet" type="text/css" href="http://at.alicdn.com/t/font_605774_tsrpz1kdo0f6r.css" />
                <div className='header'>
                    <div className='left'><a><span className='iconfont icon-fanhui'></span></a></div>
                    <div className='center'>选择票价</div>
                    <div className='right'></div>
                </div>
                <div className='body'>
                    <div className='session'>

                        <p className='title'>选择场次</p>
                        <div>
                            <div className='sessionselected'>
                                <span>2018.04.07</span>
                                <span>周六 11:00</span>
                            </div>
                            <div className='sessionunselected'>
                                <span>2018.04.07</span>
                                <span>周六 11:00</span>
                            </div>
                        </div>
                    </div>

                    <div className='price'>
                        <p className='title'>选择票价</p>
                        
                        <div>
                            {
                                this.state.price.map((item)=>{
                                    return <div key={item} className='priceunselected' onClick={this.select.bind(this)}><span>￥<a>{item}</a></span></div>
                                })
                            }

                        </div>
                    </div>
                    <div className='list'>
                        <ul>
                            {
                                this.state.select.map((item)=>{
                                    return <li key={item}>
                                                <span>{item}</span>
                                                <div>
                                                    <i className='iconfont icon-jianhao'></i>
                                                    <span>1</span>
                                                    <i className='iconfont icon-jiahao'></i>
                                                    <span className='iconfont icon-lajitongshanchu' onClick={this.remove.bind(this,item)}></span>
                                                </div>
                                            </li>
                                })
                            }
                            
                        </ul>
                    </div>
                </div>
                
                <div className='footer'>
                    
                    <div className='sure'>
                        <div className='left'>
                            <div>
                                <span className='iconfont icon-07jiantouxiangxia'></span>
                                <span>1</span>张
                            </div>
                            <div>
                                ￥<span>100</span>
                            </div>
                        </div>
                        <a className='right'>确定</a>
                    </div>
                </div>
            </div>
        )
    }
}