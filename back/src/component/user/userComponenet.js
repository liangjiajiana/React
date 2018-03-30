import React from 'react'
import {Router, Route, hashHistory, browserHistory, Link} from 'react-router'
import DatagridComponent from './userdata/userdata.js'
import PopupComponent from '../../component/popup/popup.js'
import './user.css'
export default class UserComponent extends React.Component{
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
                <DatagridComponent config={{url: 'user', name: 'user'}} />
                </div>
                
            )
    }
}