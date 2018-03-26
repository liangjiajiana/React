import http from 'superagent'

const apiBaseUrl = 'http://10.3.136.36:8080/';

function filterUrl(url){
    if(url.startsWith('http')){
        return url;
    } else {
        return apiBaseUrl + url;
    }
}

export default {
    get(url, params){
        return new Promise((resolve, reject) => {
            http.get(filterUrl(url)).query(params || {}).end((error, res) => {
                if(error){
                    reject(error)
                } else {
                    resolve(res.body)
                }
            })
        })
    },
    post(url, params){
        return new Promise((resolve, reject) => {
             http.post(filterUrl(url)).send(params||{}).set('X-API-Key', 'foobar').set('Accept', 'application/json').end(function(res){
              if (res.ok) {
                resolve(res.body);
              } else {
                reject(error);
              }
            });
        })
    }
    
}