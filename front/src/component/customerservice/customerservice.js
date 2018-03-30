/* 
* @Author: Marte
* @Date:   2018-03-28 17:18:47
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-30 13:32:57
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
        this.refs.expressionpackage.style.display='none';
        
        this.refs.intheinput.style.display='block'
        Send(this.refs.msg.value)
        this.refs.msg.value = '';
        
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
    showface = () => {
        if(this.refs.expressionpackage.style.display == 'none' || !this.refs.expressionpackage.style.display){
             this.refs.expressionpackage.style.display = 'block'
        }else{
            this.refs.expressionpackage.style.display = 'none'
        }

    }
    sendexpression = (e) =>{
        if(e.target.tagName.toLowerCase()=='img'){
            var content = this.refs.msg.value;
            content = content + '[' + e.target.getAttribute('data-alias') + ']';
            this.refs.msg.value = content
        }
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
                                var str = item.msg
                                var reg = /\[[\w]+\]/ig;
                                var arr = [];
                                if(str.search(reg)>=0){
                                    arr.push(str.match(reg));
                                }
                                
                                var res = str.replace(reg,'@@');
                                res = res.split('@@');
                                var alias = [
                                     "[hehe]",
                                     "[haha]",
                                     "[tushe]",
                                     "[a]",
                                     "[ku]",
                                     "[lu]",
                                     "[kaixin]",
                                     "[han]",
                                     "[lei]",
                                     "[heixian]",
                                     "[bishi]",
                                     "[bugaoxing]",
                                     "[zhenbang]",
                                     "[qian]",
                                     "[yiwen]",
                                     "[yinxian]",
                                     "[tu]",
                                     "[yi]",
                                     "[weiqu]",
                                     "[huaxin]",
                                     "[hu]",
                                     "[xiaonian]",
                                     "[neng]",
                                     "[taikaixin]",
                                     "[huaji]",
                                     "[mianqiang]",
                                     "[kuanghan]",
                                     "[guai]",
                                     "[shuijiao]",
                                     "[jinku]",
                                     "[shengqi]",
                                     "[jinya]",
                                     "[pen]",
                                     "[aixin]",
                                     "[xinsui]",
                                     "[meigui]",
                                     "[liwu]",
                                     "[caihong]",
                                     "[xxyl]",
                                     "[taiyang]",
                                     "[qianbi]",
                                     "[dnegpao]",
                                     "[chabei]",
                                     "[dangao]",
                                     "[yinyue]",
                                     "[haha2]",
                                     "[shenli]",
                                     "[damuzhi]",
                                     "[ruo]",
                                     "[OK]"
                                ]
                                
                                return <li key={item.id}>
                                        <span className={item.name}>
                                        {
                                            res.map((ite,idx)=>{
                                                var d = new Date();
                                                var id = d.getTime();
                                                var randomnum = Math.random()*10000
                                                var imgsrc = null;
                                                
                                                if(arr[0]){
                                                    if(item.name == 'user'){
                                                        if(arr[0][idx]){
                                                            imgsrc = 'src/component/customerservice/img/tieba/'+(alias.indexOf(arr[0][idx])+1)+'.jpg'
                                                        }else{
                                                            imgsrc = ''
                                                        }
                                                    }
                                                }
                                                
                                                
                                                
                                                            
                                                return <span key={id+randomnum}><span>{ite}</span><img src={imgsrc}/></span>
                                            })
                                        }
                                        </span>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className='footer'>
                    <div className='left'>
                        <span className='iconfont icon-xiaolian' onClick={this.showface.bind(this)}></span>
                        <span className='iconfont icon-tupian'></span>
                        <span className='iconfont icon-dianzan'></span>
                    </div>
                    <div className='right'>
                        <textarea ref='msg'></textarea>
                        <button onClick={this.send.bind(this)}>发送</button>
                    </div>
                    <div className='expressionpackage' ref='expressionpackage'>
                        <section className="for_tieba" onClick={this.sendexpression.bind(this)}>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/1.jpg" alt="" data-alias="hehe" title="呵呵"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/2.jpg" alt="" data-alias="haha" title="哈哈"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/3.jpg" alt="" data-alias="tushe" title="吐舌"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/4.jpg" alt="" data-alias="a" title="啊"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/5.jpg" alt="" data-alias="ku" title="酷"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/6.jpg" alt="" data-alias="lu" title="怒"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/7.jpg" alt="" data-alias="kaixin" title="开心"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/8.jpg" alt="" data-alias="han" title="汗"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/9.jpg" alt="" data-alias="lei" title="泪"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/10.jpg" alt="" data-alias="heixian" title="黑线"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/11.jpg" alt="" data-alias="bishi" title="鄙视"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/12.jpg" alt="" data-alias="bugaoxing" title="不高兴"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/13.jpg" alt="" data-alias="zhenbang" title="真棒"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/14.jpg" alt="" data-alias="qian" title="钱"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/15.jpg" alt="" data-alias="yiwen" title="疑问"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/16.jpg" alt="" data-alias="yinxian" title="阴脸"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/17.jpg" alt="" data-alias="tu" title="吐"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/18.jpg" alt="" data-alias="yi" title="咦"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/19.jpg" alt="" data-alias="weiqu" title="委屈"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/20.jpg" alt="" data-alias="huaxin" title="花心"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/21.jpg" alt="" data-alias="hu" title="呼~"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/22.jpg" alt="" data-alias="xiaonian" title="笑脸"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/23.jpg" alt="" data-alias="neng" title="冷"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/24.jpg" alt="" data-alias="taikaixin" title="太开心"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/25.jpg" alt="" data-alias="huaji" title="滑稽"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/26.jpg" alt="" data-alias="mianqiang" title="勉强"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/27.jpg" alt="" data-alias="kuanghan" title="狂汗"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/28.jpg" alt="" data-alias="guai" title="乖"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/29.jpg" alt="" data-alias="shuijiao" title="睡觉"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/30.jpg" alt="" data-alias="jinku" title="惊哭"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/31.jpg" alt="" data-alias="shengqi" title="生气"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/32.jpg" alt="" data-alias="jinya" title="惊讶"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/33.jpg" alt="" data-alias="pen" title="喷"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/34.jpg" alt="" data-alias="aixin" title="爱心"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/35.jpg" alt="" data-alias="xinsui" title="心碎"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/36.jpg" alt="" data-alias="meigui" title="玫瑰"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/37.jpg" alt="" data-alias="liwu" title="礼物"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/38.jpg" alt="" data-alias="caihong" title="彩虹"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/39.jpg" alt="" data-alias="xxyl" title="星星月亮"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/40.jpg" alt="" data-alias="taiyang" title="太阳"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/41.jpg" alt="" data-alias="qianbi" title="钱币"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/42.jpg" alt="" data-alias="dnegpao" title="灯泡"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/43.jpg" alt="" data-alias="chabei" title="茶杯"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/44.jpg" alt="" data-alias="dangao" title="蛋糕"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/45.jpg" alt="" data-alias="yinyue" title="音乐"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/46.jpg" alt="" data-alias="haha2" title="haha"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/47.jpg" alt="" data-alias="shenli" title="胜利"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/48.jpg" alt="" data-alias="damuzhi" title="大拇指"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/49.jpg" alt="" data-alias="ruo" title="弱"/></a>
                        <a  className="_img"><img src="src/component/customerservice/img/tieba/50.jpg" alt="" data-alias="OK" title="OK"/></a>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}