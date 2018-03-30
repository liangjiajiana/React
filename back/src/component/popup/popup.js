
import React from 'react'
import './popup.css'
export default class PopupComponent extends React.Component {
    changeac(){
        this.props.ob({wenshow:false,ac:true,id:this.props.data})
    }
    changeac2(){
        this.props.ob({wenshow:false,ac:false})
    }
    render(){
        let html= (
            <div id="pop">
                <div id="popmask">
                    <img src={require('../../../libs/wen.jpg')} width="100" height="100" />
                    <h5>确认操作</h5>
                    <div><input type="button" value="确定" onClick={this.changeac.bind(this)}  /><input type="button" value="取消"  onClick={this.changeac2.bind(this)}/></div>
                </div>
            </div>
        )
        return this.props.show ? html : null;
    }
}