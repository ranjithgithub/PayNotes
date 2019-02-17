import * as actions from './actions'
//create a reducer
export function editSubitReducer(state = [], action) {
    switch(action.type) {
        case actions.ACTION_EDIT_SUBMIT_SET: 
            state = action.updatedResponse
            return state
        default:
          return state
    }
}
