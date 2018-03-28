import React , {Component} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'

import './ModalComponent.scss'
export default class ModalComponent extends Component{
    render(){
        let html =(
            <div id="Modal" onClick={this.props.ob}>
                <div className="zhezhao3">
                    <ul className="ModalList-box">
                        <div className="ModalList-t">
                            <i className="icon iconfont icon-home"></i>
                            <Link to="#">
                            <span>首页</span>
                            </Link>
                        </div>
                        <div className="ModalList-b">
                            <i className="icon iconfont icon-wode"></i>
                            <Link to="mine">
                            <span>我的聚橙</span>
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>
        )
        return this.props.show ? html : null;
    }
}