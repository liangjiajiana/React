import React from 'react'
import './addgoods.css'
import $ from 'jquery'
import axios from 'axios'

import {connect} from 'react-redux'

import SpinnerComponent from '../../spinner/SpinnerComponent.js'
import * as actions from './addgoodsaction.js'
import Pogou from '../pogou/pogou.js'
import {Router, Route, hashHistory, browserHistory, Link} from 'react-router'

class AddgoodsComponent extends React.Component{
    state={
        poshow:false
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
        axios.post('http://10.3.136.13:8080/upload',formData,config).then((res) => {
            // console.log(res)
        })
        return ad;
    }
    updata(){
        var data={
                imgs:'http://10.3.136.13:8080/assets/'+this.upload()[0].name ,
                title:this.refs.title.value,
                time:this.refs.time.value,
                venue:this.refs.ev.value,
                price:this.refs.p1.value+'-'+this.refs.p1.value,
                introduce:this.refs.ind.value,
                kind:this.refs.kind.value,
                top:this.refs.shou.value
        }
        this.props.refresh({url:'addgoods',method:'get',data,name:'goods'})
        if(this.props.dataset){
            this.setState({
                poshow:true
            });
            setTimeout(() => {
                this.setState({
                    poshow:false
                });
                location.href="#/goods"
                location.reload();
            },1000)
        }
    }
    clos(){
        location.href="#/goods"
    }
    render(){
        return (
            <div className="mask">
                <div className="con">
                    <div className="head">
                        <h4 onClick={this.clos.bind(this)}>&times;</h4>
                    </div>
                    <div className="main">
                        <table className="table">
                            <tbody>
                            <tr>
                                <td>标题：</td><td><input type="text" ref="title"  /></td>
                            </tr>
                            <tr>
                                <td>时间：</td><td><input type="date" ref="time" /></td>
                            </tr>
                            <tr>
                                <td>场馆：</td><td><input type="text" ref="ev" /></td>
                            </tr>
                            <tr className="jia">
                                <td>价格范围：</td><td><input type="text" ref="p1"  />到<input type="text" ref="p2" /></td>
                            </tr>
                            <tr>
                                <td>简介：</td><td><input type="text" ref="ind" /></td>
                            </tr>
                            <tr>
                                <td>分类：</td><td><select ref="kind">
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
                                <td>首页：</td><td><select ref="shou">
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
                                        <img src="" alt="" />
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="foot">
                        <div className="check">
                            <span onClick={this.updata.bind(this)}>确定</span><span>取消</span>
                        </div>
                    </div>
                </div>
                <SpinnerComponent show={this.props.show}/>
                <Pogou show={this.state.poshow} />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        dataset: state.addgoods.goods,
        show: state.addgoods.show,
        error: state.error
    }
}

export default connect(mapStateToProps, actions)(AddgoodsComponent);