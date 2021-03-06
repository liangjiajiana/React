import * as constants from '../../datagrid/datagridconstants.js'

export default function datagrid(state = {}, action){
    let _state = JSON.parse(JSON.stringify(state));

    switch(action.type){
        case constants.Requesting:
            _state.show = true;
            break;
        case constants.Requested:
            _state.show = false;
             console.log(action)
            if(action.name){
                _state[action.name] = _state[action.name] || {};
                _state[action.name].dataset = action.result.data;
                _state[action.name].rowsCount = action.result.rowsCount;
            } else {
                _state.dataset = action.result.data;
            }
            break;
        case constants.RequestError:
            _state.show =false;
            _state.error = action.error;
            break
    }
    return _state;
}