import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router,hashHistory} from 'react-router'

import router from './router/router.js'
import store from './redux/configStore.js'
ReactDOM.render(
    <Provider store={store}>
      <Router history = {hashHistory} routes={router} />
    </Provider>,
    document.getElementById('app')
)