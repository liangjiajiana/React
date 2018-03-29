/* 
* @Author: Marte
* @Date:   2018-03-27 10:14:52
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-27 17:02:34
*/

import React,{Component} from 'react';

import './sortpopupComponent.scss';

export default class SortPopupWindowComponent extends Component{
    componentDidUpdate=(nextProps, nextState)=>{
            if(this.state.sortType=='recommond'&&this.refs.recommond){
                this.refs.recommond.style.display='block'
            }else if(this.state.sortType=='time'&&this.refs.time){
                this.refs.time.style.display='block'
            }
    }
    state = {
        sortType:'recommond'
    }
    recommondsort(){
        this.refs.time.style.display='none'
        this.refs.recommond.style.display='block'
        this.setState({sortType:'recommond'})
        this.props.changemask()
        this.props.recommondsort()
    }
    timesort(){
        this.refs.time.style.display='block'
        this.refs.recommond.style.display='none'
        this.setState({sortType:'time'})
        this.props.changemask()
        this.props.timesort()
    }
    render(){
        
        let html = (
            <div className='sortpopupcomponent'>
                <link rel="stylesheet" type="text/css" href="http://at.alicdn.com/t/font_606437_ok9l43gvnqmsfw29.css" />
                <div onClick={this.recommondsort.bind(this)}>推荐排序<span className='iconfont icon-dui'  ref='recommond'></span></div>
                <div onClick={this.timesort.bind(this)}>时间排序<span className='iconfont icon-dui'  ref='time'></span></div>
                <div className='triangle'></div>
            </div>  
        )


        return this.props.show ? html : null;
    }
}