/* 
* @Author: Marte
* @Date:   2018-03-26 19:21:33
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-30 09:17:43
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
        http.get('sgoods',{id:id}).then((res) => {
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
        select:[],
        sum:0,
        total:0,
    }
    setorder(){
        console.log(this.state.select)
        if(window.localStorage.getItem('user')){
            var id=this.props.params.id*1;
            var username=JSON.parse(window.localStorage.getItem('user')).username;
            var price=0;
            var qty=0;
            var status='tbp'
            this.state.select.forEach((res) => {
                price=price+(res.price*res.num)
                qty=qty+res.num*1
            })
            var data={
                id,
                username,
                qty,
                price,
                status
            }
            
           http.get('addorder',data).then((res) => {
                
                if(res.status){
                    location.href="#/Ljjindent"
                }
           })
        }else{
            location.href="#/login"
        }
        

    }
    select = (e)=>{
        if(e.target.tagName.toLowerCase()=='a'){
            e.target.parentNode.parentNode.className = 'priceselected'
            var newselect = JSON.parse(JSON.stringify(this.state.select));
            
            for(var i=0;i<this.state.select.length;i++){
                if(this.state.select[i].price==e.target.innerHTML){
                    return 
                }
            }
            newselect.push({num:1,price:e.target.innerHTML*1});
            
            this.setState({select:newselect},()=>{
                var sum=0;
                var total=0;
                for(var j=0;j<this.state.select.length;j++){
                    sum+=this.state.select[j].price*this.state.select[j].num;
                    total+=this.state.select[j].num*1;
                }
                this.setState({sum:sum,total:total})
            })
            
            
            
        }
        
    }
    remove = (item)=>{
        for(var j=0;j<this.refs.pricetitle.children.length;j++){
            if(this.refs.pricetitle.children[j].children[0].children[0].innerHTML==item.price){
                this.refs.pricetitle.children[j].className = 'priceunselected'
            }
        }
        
        var newselect = JSON.parse(JSON.stringify(this.state.select));
        for(var i=0;i<newselect.length;i++){
            if(newselect[i].price==item.price){
                newselect.splice(i,1);
            }
        }

        this.setState({select:newselect},()=>{
            var sum=0;
            var total=0;
            for(var j=0;j<this.state.select.length;j++){
                sum+=this.state.select[j].price*this.state.select[j].num;
                total+=this.state.select[j].num*1;
            }
            this.setState({sum:sum,total:total})
        })

        
        
        
    }
    sub = (item,e) => {
        var newselect = JSON.parse(JSON.stringify(this.state.select));
        for(var i=0;i<newselect.length;i++){
            if(newselect[i].price==item.price&&newselect[i].num>0){
                newselect[i].num--;
                if(newselect[i].num==0){
                    e.target.style.color='#e6e6e6';
                }else{
                    e.target.nextElementSibling.nextElementSibling.style.color='#666';
                }
            }
        }
        this.setState({select:newselect},()=>{
            var sum=0;
            var total=0;
            for(var j=0;j<this.state.select.length;j++){
                sum+=this.state.select[j].price*this.state.select[j].num;
                total+=this.state.select[j].num*1;
            }
            this.setState({sum:sum,total:total})
        })

        
    }
    add = (item,e) => {
        var newselect = JSON.parse(JSON.stringify(this.state.select));
        for(var i=0;i<newselect.length;i++){
            if(newselect[i].price==item.price&&newselect[i].num<4){
                newselect[i].num++;
                if(newselect[i].num==4){
                    e.target.style.color='#e6e6e6';
                }else{
                    e.target.previousElementSibling.previousElementSibling.style.color='#666';
                }
            }
        }
        this.setState({select:newselect},()=>{
            var sum=0;
            var total=0;
            for(var j=0;j<this.state.select.length;j++){
                sum+=this.state.select[j].price*this.state.select[j].num;
                total+=this.state.select[j].num*1;
            }
            this.setState({sum:sum,total:total})
        })
       
        
    }
    houtui(){
        window.history.back()
    }
    hideshow=(e)=>{
        if(e.target.className=='iconfont icon-07jiantouxiangxia'){
            this.refs.list.style.display= 'none';
            e.target.className = 'iconfont icon-07jiantouxiangshang'
        }else{
            this.refs.list.style.display= 'block';
            e.target.className = 'iconfont icon-07jiantouxiangxia'
        }
    }

    render(){
        return(
            <div id='SelectPrice'>
                <link rel="stylesheet" type="text/css" href="http://at.alicdn.com/t/font_605774_tsrpz1kdo0f6r.css" />
                <div className='header'>
                    <div className='left'><a onClick={this.houtui}><span className='iconfont icon-fanhui'></span></a></div>
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
                        
                        <div ref='pricetitle'>
                            {
                                this.state.price.map((item)=>{
                                    return <div key={item} className='priceunselected' onClick={this.select.bind(this)}><span>￥<a>{item}</a></span></div>
                                })
                            }

                        </div>
                    </div>
                    <div className='list' ref='list'>
                        <ul>
                            {
                                this.state.select.map((item)=>{
                                    return <li key={item.price}>
                                                <span>{item.price}</span>
                                                <div>
                                                    <i className='iconfont icon-jianhao' onClick={this.sub.bind(this,item)} ref='sub'></i>
                                                    <span>{item.num}</span>
                                                    <i className='iconfont icon-jiahao' onClick={this.add.bind(this,item)} ref='add'></i>
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
                                <span className='iconfont icon-07jiantouxiangxia' onClick={this.hideshow.bind(this)}></span>
                                <span>{this.state.total}</span>张
                            </div>
                            <div>
                                ￥<span>{this.state.sum}</span>

                            </div>
                        </div>
                        <a className='right' onClick={this.setorder.bind(this)}>确定</a>
                    </div>
                </div>
            </div>
        )
    }
}