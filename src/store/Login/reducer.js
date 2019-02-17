import * as actions from './actions'
//create a reducer
export function loginSuccessReducer(state = [], action) {
    switch(action.type) {
        case actions.ACTION_LOGIN_SUBMIT_SUCCESS_SET: 
            state = action.loginResponse
            return state
        default:
          return state
    }
}

export function loginFailureReducer(state = [], action) {
    switch(action.type) {
        case actions.ACTION_LOGIN_SUBMIT_FAILURE_SET: 
            state = action.loginResponse
            return state
        default:
          return state
    }
}