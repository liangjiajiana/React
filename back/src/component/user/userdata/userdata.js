import React from 'react'
import {connect} from 'react-redux'
import * as actions from './useraction.js'
import UsermaskComponent from '../usermask/usermask.js'
import popup from '../../popup/popup.js' 
import http from '../../../utils/httpclient.js'
import UseraddrComponent from '../useraddr/useraddrComponent.js'
import './user.css'
class UserdataComponent extends React.Component{
    state={
        usermask:false,
        usermaskdata:{},
        ds:[],
        useraddr:false,
        useraddrdata:{}
    }
     getKeys(item){
        return item ? Object.keys(item) : [];
    }
    componentWillMount(){
        this.props.refresh(this.props.config);
    }
    maskdata(data){
        this.setState({
            usermask:true,
            usermaskdata:data
        })
    }
    maskdatahid(){
        this.setState({
            usermask:false
        })
    }
    deluser(item){
        if(item.id){
            http.get('deluser',{id:item.id}).then((res) => {
                if(res.status){
                    this.state.ds.forEach((res,idx) => {

                        if(res.id==item.id){
                            var arr=this.state.ds;
                                arr.splice(idx,1);
                            this.setState({
                                ds:arr
                            })
                        }   
                    })
                }
            })
        }
        
    }
    useraddr(item){
        if(item.username){
            this.setState({
                useraddr:true,
                useraddrdata:{username:item.username}
            })
        }
    }
    useraddrclos(){
        this.setState({
                useraddr:false,
            })
    }
    componentWillReceiveProps(a,b){
        let ds = a.dataset; 
        let name = a.config.name;
        if(name){
            ds = ds[name] ? ds[name].dataset : []
            this.setState({
                ds
            })
        } else {
            ds = ds.dataset;
            this.setState({
                ds
            })
        }
        
    }
    render(){
        return (
            <div>
                <table className="t1">
                    <thead>
                        <tr>
                            {
                                this.getKeys(this.state.ds[0]).map((key) => {
                                    return <th key={Math.random()}>{key}</th>
                                })
                            }
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.ds.map((item) => {
                                return (
                                    <tr key={item.id || item.indexid} onDoubleClick={this.maskdata.bind(this,item)}>
                                        {
                                            this.getKeys(item).map((key) => {
                                                return <td key={Math.random()}>{item[key]}</td>
                                            })
                                        }
                                        <td className="delg">
                                        <input type="button" className="c1" value="删除" onClick={this.deluser.bind(this,item)}  />
                                        <input type="button" value="查看" className="c2" onClick={this.useraddr.bind(this,item)}/></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <UsermaskComponent show={this.state.usermask} ob={this.maskdatahid.bind(this)} data={this.state.usermaskdata}/>
                <UseraddrComponent show={this.state.useraddr} ob={this.useraddrclos.bind(this)} data={this.state.useraddrdata}/>
            </div>
        )
    }
}   

const mapStateToProps = (state) => {
    return {
        dataset: state.datagrid,
        show: state.datagrid.show,
        error: state.datagrid.error
    }
}

export default connect(mapStateToProps, actions)(UserdataComponent)