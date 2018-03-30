import React from 'react'
import './header.css'
export default class HeaderComponent extends React.Component{
    exit(){
        window.localStorage.removeItem('admins');
        location.href="#/login"
    }
    render(){
        return(
            <div>
                <h4>后台管理</h4>
                <div className="showuser">
                    <span>操作者：{window.localStorage.getItem('admins')} <a href="" onClick={this.exit.bind(this)}>退出</a></span>
                </div>
            </div>
        )
    }
}