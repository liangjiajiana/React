import React from 'react'
import './poguo.css'
export default class PogouComponent extends React.Component {
    render(){
        let html= (
            <div id="pop">
                <div id="popmask">
                    <img src={require('../../../libs/gou.jpg')} width="100" height="100" id="goup"/>
                    <h5>操作成功</h5>
                </div>
            </div>
        )
        return this.props.show ? html : null;
    }
}