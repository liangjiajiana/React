import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory } from 'react-router'

import routes from './router/router'

import basescss from './basescss/base.scss'

ReactDOM.render(
    <Router history={hashHistory} routes={routes}/>,
    document.getElementById('app')
)