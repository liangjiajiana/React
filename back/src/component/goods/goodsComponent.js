import React from 'react'
import {Router, Route, hashHistory, browserHistory, Link} from 'react-router'
import DatagridComponent from '../datagrid/datagridcomponent'
import PopupComponent from '../../component/popup/popup.js'
import './goods.css'
export default class GoodsComponent extends React.Component{
    gofor(){
        hashHistory.push('/addgoods')
    }
    render(){
        return (
                <div>
                    <div className="top">
                        <div className="search">
                            <input type="text" /><input type="button" value="搜素" />
                        </div>
                        <div className="add">
                            <input type="button" value="添加" onClick={this.gofor.bind(this)}/>
                        </div>
                    </div>
                    <DatagridComponent config={{url: 'goods', name: 'goods', data: {page: 1, pageitems: 10}}} />
                </div>
                
            )
    }
}