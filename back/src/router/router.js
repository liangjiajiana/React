import {Router, Route, hashHistory, browserHistory, Link} from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom'

import HomeComponent from '../component/home/homeComponent.js'
import StudentComponent from '../component/student/studentcomponent.js'
import GoodsComponent from '../component/goods/goodsComponent.js'
import maskaddGoodsComponent from '../component/addgoods/addgoodsComponent.js'
import UserComponent from '../component/user/userComponenet.js'
import LoginComponent from '../component/login/loginComponent.js'

export default (
         <Router history={hashHistory}>
            <Route path="/" component={HomeComponent}>
                <Route path="/goods" component={GoodsComponent}>
                </Route>
                 <Route path="/addgoods" component={maskaddGoodsComponent}>
                </Route>
                <Route path="/user" component={UserComponent}>
                </Route>
            </Route>
            <Route path="/login" component={LoginComponent}>
            </Route>
        </Router>
    )