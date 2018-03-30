
import React from 'react'
import './datashow.css'
import http from '../../../utils/httpclient.js'
import axios from 'axios'

import {Router, Route, hashHistory, browserHistory, Link} from 'react-router'

import $ from 'jquery'
export default class DatashowComponent extends React.Component {


    setstr1(){
        var str=this.props.data.price;
        if(str){
            var arr=str.split('-')
            return arr[0]
        }
    }
    setstr2(){
        var str=this.props.data.price;
        if(str){
            var arr=str.split('-')
            return arr[1]
        }
    }
    settime(){
        var str=this.props.data.time;
        if(str){
            var arr=str.split(' ')
            return arr[0].replace(/[.]/g,'-')
        }
    }

    getpic(){
        var el=this.refs.pic
        this.file = el.files[0];
        var filePath = $(el).val(),         //获取到input的value，里面是文件的路径  
        fileFormat = filePath.substring(filePath.lastIndexOf(".")).toLowerCase(),  
        src = window.URL.createObjectURL(el.files[0]); //转成可以在本地预览的格式  
        // 检查是否是图片  
        if( !fileFormat.match(/.png|.jpg|.jpeg/) ) {  
            error_prompt_alert('上传错误,文件格式必须为：png/jpg/jpeg');  
            return;    
        }  
        
        $(el).next('img').attr('src',src); 
    }
    upload(e){
        event.preventDefault();
        let formData = new FormData(); 
        var ad=[];
        $('.pic').each((idx,item) => {
            // console.log(item.files);
            if(item.files.length==0){
            }else{
                formData.append(item.name,item.files[0],item.files[0].name);
                ad.push(item.files[0]);
            }
        })
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
            }
        }
        axios.post('http://10.3.136.36:8080/upload',formData,config).then((res) => {
            // console.log(res)
        })
        return ad;
    }
    updata(){

        var img
        if(this.upload()[0]){
            img='http://10.3.136.36:8080/assets/'+this.upload()[0].name
        }else{
            img=this.props.data.imgs
        }
        var data={
            id:this.props.data.id,
            imgs:img,
            title:this.refs.title.value,
            time:this.refs.time.value,
            venue:this.refs.ev.value,
            price:this.refs.p1.value+'-'+this.refs.p1.value,
            introduce:this.refs.ind.value,
            kind:this.refs.kind.value,
            top:this.refs.shou.value
        }
        http.get('upgoods',{data}).then((res) => {
            console.log(res);
        })
        
    }
    close(){
        this.props.ob();
    }
    render(){
        let html= (
            <div className="mask">
                <div className="con">
                    <div className="head">
                        <h4 onClick={this.close.bind(this)}>&times;</h4>
                    </div>
                    <div className="main">
                        <table className="table">
                            <tbody>
                            <tr>
                                <td>标题：</td><td><input type="text" ref="title" defaultValue={this.props.data.title}  /></td>
                            </tr>
                            <tr>
                                <td>时间：</td><td><input type="date" ref="time" defaultValue={this.settime()} /></td>
                            </tr>
                            <tr>
                                <td>场馆：</td><td><input type="text" ref="ev" defaultValue={this.props.data.venue} /></td>
                            </tr>
                            <tr className="jia">
                                <td>价格范围：</td><td><input type="text" ref="p1" defaultValue={this.setstr1()}/>到<input type="text" ref="p2" defaultValue={this.setstr2()}/></td>
                            </tr>
                            <tr>
                                <td>简介：</td><td><input type="text" ref="ind" defaultValue={this.props.data.introduce} /></td>
                            </tr>
                            <tr>
                                <td>分类：</td><td><select ref="kind" defaultValue={this.props.data.kind}>
                                      <option value ="con">演唱会</option>
                                      <option value ="mu">音乐会</option>
                                      <option value="mo">话剧歌剧</option>
                                      <option value="ch">儿童亲子</option>
                                      <option value="muj">音乐剧</option>
                                      <option value="balei">芭蕾舞蹈</option>
                                      <option value="xiju">戏剧综艺</option>
                                      <option value="zl">展览</option>
                                    </select></td>
                            </tr>
                            <tr>
                                <td>首页：</td><td><select ref="shou" defaultValue={this.props.data.top}>
                                    <option value ="hot">none</option>
                                      <option value ="hot">hot</option>
                                    </select></td>
                            </tr>
                            <tr>
                                <td>图片：</td>
                                <td>
                                    <div className="chepic" >
                                        <h5>选择图片</h5>
                                        <input type="file" name="head" className="pic" ref="pic" onChange={this.getpic.bind(this)} />
                                        <img src={this.props.data.imgs} alt="" />
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="foot">
                        <div className="check">
                            <span onClick={this.updata.bind(this)}>更新</span><span>取消</span>
                        </div>
                    </div>
                </div>
            </div>
        )
        return this.props.show ? html : null;
    }
}