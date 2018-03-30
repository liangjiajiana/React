import * as constants from '../../datagrid/datagridconstants.js'

export function refresh(_config){
    return {
        types: 'getuser',
        url: _config.url,
        method: _config.method || 'get',
        data: _config.data || {},
        name: _config.name
    }
}