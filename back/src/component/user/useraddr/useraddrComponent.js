import React from 'react'
import http from '../../../utils/httpclient.js'
import './useraddr.css'
import Pca from '../../linkage/linkage.js'
class UseraddrComponent extends React.Component{
    state={
        data:[],
        tabledata:{},
        show:{
            display:'none'
        }
    }
    componentWillReceiveProps(a,b){
        if(a.data.username){
            http.get('useraddr',{username:a.data.username}).then((res) => {
                if(res.data.length>0){
                    this.setState({
                        data:res.data
                    })
                }else{
                    this.setState({
                        data:[]
                    })
                }
            })
        }else{
            this.setState({
                data:[]
            })
        }
    }
    gettable(idx){
        this.setState({
            tabledata:this.state.data[idx],
            show:{
                display:'block'
            }
        })
    }
    deladr(id){
        if(id){
            http.get('deluseraddr',{id}).then((res) => {
                if(res.status){
                    this.state.data.forEach((item,idx) => {
                        if(item.id==id){
                            var arr=this.state.data
                            arr.splice(idx,1);
                            this.setState({
                                data:arr
                            })
                        }
                    })
                }
            })
        }
    }
    getstate(data){
        var province=data.province;
        var city=data.city;
        var area=data.area;
        var str=`${province},${city},${area}`
    }
    render(){
        if(this.state.tabledata.username&&this.refs.username){
            this.refs.username.value=this.state.tabledata.username;
            this.refs.phone.value=this.state.tabledata.phone;
            this.refs.shouname.value=this.state.tabledata.shouname;
            this.refs.area.value=this.state.tabledata.adrdeta;
        }
        var html= (
            <div className="mask">
                <div className="con">
                    <div className="head">
                        <h4 onClick={this.props.ob}>&times;</h4>
                    </div>
                    <div className="addrmask_main">
                            {
                                this.state.data.map((res,idx) => {
                                    return <p className="adr" key={res.id} onDoubleClick={this.gettable.bind(this,idx)}>
                                        <span >{res.shouname} {res.phone} {res.address} {res.adrdeta}</span>
                                        <span><input type="button" value="删除" className="deladr" onClick={this.deladr.bind(this,res.id)} /></span>
                                        </p>
                                })
                            }
                            <table className="t2" style={this.state.show}>
                                <tbody>
                                <tr>
                                    <td>用户：</td><td><input type="text" ref="username" disabled="disabled"/></td>
                                </tr>
                                <tr>
                                    <td>联系电话：</td><td><input type="text" ref="phone" /></td>
                                </tr>
                                <tr>
                                    <td>收货人：</td><td><input type="text" ref="shouname" /></td>
                                </tr>
                                <tr>
                                    <td>地址：</td><td><Pca ob={this.getstate.bind(this)} data={this.state.tabledata}/></td>
                                </tr>
                                <tr>
                                <td>详细地址</td><td><textarea rows="6" cols="50" ref="area"></textarea></td>
                                </tr>
                                </tbody>
                            </table>
                    </div>
                    
                    <div className="foot">
                        <div className="check">
                            <span>确定</span><span>取消</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    return this.props.show ? html : null;
    }
}
export default UseraddrComponent;