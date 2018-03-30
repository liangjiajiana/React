import React from 'react'
import DatagridComponent from '../datagrid/datagridcomponent'
import ModalComponent from '../modal/modalcomponent'

export default class StudentComponent extends React.Component{
    state = {
        show: false
    }
    showup(){
        this.setState({
            show: true
        })
    }
    filldata(obj){
        // console.log(obj);
        this.refs.nickname.value = obj.nickname
        this.setState({
            show: false
        })
    }
    render(){
        return (
            <div>
                <input type="text" onClick={this.showup.bind(this)} ref="nickname"/>
                <DatagridComponent config={{url: 'goods', name: 'student', data: {page: 1, pageitems: 10}}}/>
                <ModalComponent show={this.state.show} config={{type: 'datagrid', name: 'modal', url: 'goods', data: {page: 2, pageitems: 3}, cb: this.filldata.bind(this)}}/>
            </div>
        )
    }
}