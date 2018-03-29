/* 
* @Author: Marte
* @Date:   2018-03-28 17:18:47
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-29 09:58:46
*/

import React,{Component} from 'react'
import http from '../../utils/httpclient.js'
import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router';

import './customerservice.scss'

export default class CustomerServiceComponent extends Component{
    state = {
        chatrecord:[]
    }
    send = () => {
        var date = new Date();
        var now = date.getTime();
        var newcharrecord = this.state.chatrecord
        newcharrecord.push({id:now,name:'user',msg:this.refs.msg.value})
        this.setState({chatrecord:newcharrecord})
        console.log(this)
        this.refs.intheinput.style.display='block'
        Send(this.refs.msg.value)
       
        //异步请求对象
        var xmlHttp
        //传递this
        var temp = this

        function Send(str){
            
            //根据浏览器生成异步请求对象
             xmlHttp=GetXmlHttpObject()
            if(xmlHttp==null){
                    alert ("您的浏览器不支持AJAX！");
                    return;
            }

             var url="http://www.tuling123.com/openapi/api?key=92f83ad4b2fd459e8dd511657f3867c5";
             url=url+"&info="+str;
             url=url+"&userid=1234" ;
             xmlHttp.onreadystatechange = stateChanged;
             xmlHttp.open("GET",url,true);
             xmlHttp.send(null);
        }

        function stateChanged(){
            if (xmlHttp.readyState==4){
                    var msg=eval('(' + xmlHttp.responseText + ')'); 
                    var newcharrecord = temp.state.chatrecord
                    var date = new Date();
                    var now = date.getTime();
                    newcharrecord.push({id:now,name:'jizi',msg:msg.text})
                    temp.setState({chatrecord:newcharrecord})
                    temp.refs.intheinput.style.display='none'
            }
        }

        //对浏览进行适应
        function GetXmlHttpObject(){
            var xmlHttp=null;
            try{
                // Firefox, Opera 8.0+, Safari
                xmlHttp=new XMLHttpRequest();
            }catch(e){
                // Internet Explorer
                try{
                  xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
                }catch (e){
                    xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
                }

            }
            return xmlHttp;
        }
    }
    close = ()=>{
        window.history.back();
    }
    render(){
        return(
            <div id='customerservice'>
                <link rel="stylesheet" type="text/css" href="http://at.alicdn.com/t/font_608884_21kgcj0skkyphkt9.css" />
                
                <div className='header'>
                    <div className='left'>
                        桔子
                    </div>
                    <div className='center'>
                        <p className='intheinput' ref='intheinput'>对方输入信息中。。。</p>
                    </div>
                    <div className='right' onClick={this.close}>
                        <span className='iconfont icon-downarrow'></span>关闭
                    </div>
                </div>
                <div className='body'>
                    <ul>
                        {
                            this.state.chatrecord.map((item)=>{
                                return <li key={item.id}><span className={item.name}>{item.msg}</span></li>
                            })
                        }
                    </ul>
                </div>
                <div className='footer'>
                    <div className='left'>
                        <span className='iconfont icon-xiaolian'></span>
                        <span className='iconfont icon-tupian'></span>
                        <span className='iconfont icon-dianzan'></span>
                    </div>
                    <div className='right'>
                        <textarea ref='msg'></textarea>
                        <button onClick={this.send.bind(this)}>发送</button>
                    </div>
                </div>
            </div>
        )
    }
}