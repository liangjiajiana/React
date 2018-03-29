export function registerTest(params){
    return{
        type:"register",
        url:"register",
        methods:'get',
        data:params
    }
}