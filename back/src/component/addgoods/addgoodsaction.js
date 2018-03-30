export function refresh(_config){
    return {
        types: 'addgoods',
        url: _config.url,
        method: _config.method || 'get',
        data: _config.data || {},
        name: _config.name
    }
}