import React from 'react'
import {combineReducers} from 'redux'


//redux集合
import datagrid from '../component/datagrid/datagridreducer'
import addgoods from '../component/addgoods/addgoodsreduce.js'
import user from '../component/user/userdata/userreduce.js'

export default combineReducers({
    datagrid,
    addgoods,
    user
})

