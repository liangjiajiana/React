import React from 'react'
import {connect} from 'react-redux'

import SpinnerComponent from '../../spinner/SpinnerComponent'
import PopupComponent from '../../component/popup/popup.js'
import Datashow from './datashow/datashowComponent.js'

import * as actions from './datagridaction'

import './datagrid.css'

import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import $ from 'jquery';
class DatagridComponent extends React.Component{
    state={
        indexList : [], //获取数据的存放数组    
        totalNum:5,//总记录数       
        totalData:{},         
        current: 1, //当前页码        
        pageSize:5, //每页显示的条数5条        
        totalPage:5,//总页数
        cur:1,
        light:1,
        wenshow:false,
        popid:null,
        maskdata:{},
        maskshow:false
    }



    getKeys(item){
        return item ? Object.keys(item) : [];
    }
    selectTr(item){
        if(this.props.config.cb){
            this.props.config.cb(item)
        }
    }
    componentWillMount(){
        this.props.refresh(this.props.config);
        
    }
    componentDidMount(){
        this.highlight()
    }
    getpage(n){
        var a;
        if(this.props.dataset[this.props.config.name]&&n){
             a=Math.ceil(this.props.dataset[this.props.config.name].rowsCount/this.props.config.data.pageitems);
             if((n+4)>a){
                 this.setState({
                     totalNum:a,
                     current:a-this.state.pageSize || 1
                 })
             }else if((n-4)<1){
                 this.setState({
                     totalNum:this.state.pageSize,
                     current:1
                 })
             }else{
                 this.setState({
                     totalNum:n+2,
                     current:n-2
                 })
             }
             this.props.config.data.page=n
            this.props.refresh(this.props.config);
        }
    }
    highlight(){
         
        $('input[type=button]').each((idx,item) => {
            if($(item).val()==this.state.light){
                $(item).siblings().removeClass('ac');
                $(item).addClass('ac');
            }
        })
    }
    nextpage(){
        
         var n=this.state.cur+1;
        if(n>Math.ceil(this.props.dataset[this.props.config.name].rowsCount/this.props.config.data.pageitems)){
            n=Math.ceil(this.props.dataset[this.props.config.name].rowsCount/this.props.config.data.pageitems)
        }
        this.setState({
            cur:n,
            light:n
         })
        this.getpage(n);
        this.highlight();
    }
    prepage(){
        
        var n=this.state.cur-1;
        if(n<1){
            n=1
        }
        this.setState({
            cur:n,
            light:n
         })
        this.getpage(n);
        this.highlight();
    }
    delgoods(id){
        console.log(id)
        this.props.delgoods({url:'delgoods',method:'get',data:{id},name:'delgoods'})

        
    }


    s_h(data){
        console.log(data)
        this.setState({
            wenshow:data.wenshow
        })
        if(data.ac){
            
            let ds = this.props.dataset; 
            let name = this.props.config.name
            var n=null;
            ds[name].dataset.forEach((item,idx) => {
                if(item.id==data.id){
                    n=idx
                }
            })
            ds[name].dataset.splice(n,1);
            this.delgoods(data.id);
        }
    }
    showmask(id){
        console.log(id)
        this.setState({
            wenshow:true,
            popid:id
        })

    }
    maskdata(data){
        this.setState({
            maskdata:data,
            maskshow:true
        })
    }
    changeshow(){
        this.setState({
            maskshow:false
        })
    }
    render(){
        
        let ds = this.props.dataset; 
        let name = this.props.config.name;
        if(name){
            ds = ds[name] ? ds[name].dataset : []

        } else {
            ds = ds.dataset;
        }
        let pagenum=null;
        if(this.props.dataset[name]){
            $(this.refs.on).hide();
            pagenum=Math.ceil(this.props.dataset[name].rowsCount/this.props.config.data.pageitems);
            if(pagenum<=this.state.pageSize){
                $(this.refs.to).hide();
                $(this.refs.ma).hide();
            }
            
            if(this.state.current>this.state.pageSize-3){
                $(this.refs.on).show();
            }

            if((this.state.current+5)>=pagenum){
                $(this.refs.to).hide();
                $(this.refs.ma).hide()
            }else{
                $(this.refs.to).show();
                $(this.refs.ma).show()
            }


        }
        var pagelist=[];
        
        for(let i=this.state.current;i<this.state.totalNum;i++){

            pagelist.push(<input type="button" value={i+1} key={i} onClick={this.getpage.bind(this,i+1)} />);
        }
        return (
            <div>
                <table className="t1">
                    <thead>
                        <tr>
                            {
                                this.getKeys(ds[0]).map((key) => {
                                    return <th key={Math.random()}>{key}</th>
                                })
                            }
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ds.map((item) => {
                                return (
                                    <tr key={item.id || item.indexid} onDoubleClick={this.maskdata.bind(this,item)}>
                                        {
                                            this.getKeys(item).map((key) => {
                                                return <td key={Math.random()}>{item[key]}</td>
                                            })
                                        }
                                        <td className="delg"><input type="button" value="删除" onClick={this.showmask.bind(this,item.id)} /></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <SpinnerComponent show={this.props.show}/>
                <PopupComponent show={this.state.wenshow} data={this.state.popid} ob={this.s_h.bind(this)}  />
                <Datashow  show={this.state.maskshow} data={this.state.maskdata} ob={this.changeshow.bind(this)}/>
                <div className="pagelist">
                    <input type="button" value="<" onClick={this.prepage.bind(this)}/>
                    <input type="button" value="1" onClick={this.getpage.bind(this,1)} />
                    <input type="button" value="..." ref="on"  />
                    {
                        pagelist
                    }
                    <input type="button" value="..." style={this.state.tostyle} ref="to"  />
                    <input type="button" value={pagenum||0} ref="ma" onClick={this.getpage.bind(this,pagenum)} />
                    <input type="button" value=">" onClick={this.nextpage.bind(this)} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        deldata:state.delgoods||[],
        dataset: state.datagrid,
        show: state.datagrid.show,
        error: state.datagrid.error
    }
}

export default connect(mapStateToProps, actions)(DatagridComponent);