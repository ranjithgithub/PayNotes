
import * as actions from './actions'
//create a reducer
export function notesCardsReducer(state = [], action) {
    switch(action.type) {
        case actions.ACTION_SET_NOTES_CARDS: 
            state = [...action.notesCardsData.notes]
            return state
        default:
          return state
    }
}

export function getNoteReducer(state = {}, action) {
    switch(action.type) {
        case actions.ACTION_SET_NOTE: 
            state = action.note
            return state
        default:
          return state
    }
}

export function getDeleteNoteReducer(state = {}, action) {
    switch(action.type) {
        case actions.ACTION_SET_DELETE_NOTE: 
            state = action.id
            return state
        default:
          return state
    }
}