import React from 'react'
import http from '../../../utils/httpclient.js'
import './usermask.css'
class UsermaskComponent extends React.Component{
    state={
        data:[]
    }
    componentWillReceiveProps(a,b){
        var ds;
        if(a.data.username){
            ds=a.data;
            http.get('order',{username:ds.username}).then((res) => {
                if(res.status){
                    this.setState({
                        data:res.data
                    })
                }else{
                    this.setState({
                        data:[]
                    })
                    alert('没有数据')
                }
            })
        }
    }
    getKeys(item){
        return item ? Object.keys(item) : [];
    }
    delorder(id){
        http.get('delorder',{id}).then((res) => {
            if(res.status){
                var arr=this.state.data
                arr.forEach((item,idx) => {
                    if(item.id==id){
                        arr.splice(idx,1);
                        this.setState({
                            data:arr
                        })
                    }
                })
            }else{
                alert('不能删除');
            }
        })
    }
    getstatus(str){

        var obj={
            tbp:'待付款',
            yfk:'已付款',
            yqx:'已取消'
        }
        return obj[str]
    }
    render(){
        var html= (
            <div className="mask">
                <div className="con">
                    <div className="head">
                        <h4 onClick={this.props.ob}>&times;</h4>
                    </div>
                    <div className="usermask_main">
                        <ul className="usermask">
                            {
                                this.state.data.map((item) => {
                                    return <li key={item.id}>
                                                <img src={item.imgs} />
                                                <p>{item.title}</p>
                                                <span>数量：{item.qty}</span>
                                                <span>价格：{item.price}￥</span>
                                                <span>时间：{item.time}</span><br/>
                                                <span>状态：{this.getstatus(item.status)}</span><br/>
                                                <span><a onClick={this.delorder.bind(this,item.id)}>删除</a></span>
                                            </li>
                                })
                            }
                        </ul>
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
export default UsermaskComponent;