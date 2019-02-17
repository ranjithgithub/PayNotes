
import {createStore, applyMiddleware, combineReducers} from 'redux'
import 'regenerator-runtime/runtime'
import createSagaMiddleware from 'redux-saga'
import {fork, all } from 'redux-saga/effects'
import {watchNotesCardsSaga, watchNoteSaga, watchDeleteNoteSaga} from './NotesCards/saga'
import { watchEditNoteSaga } from './NoteItem/sagas'
import {watchLoginSaga} from './Login/saga'
import {notesCardsReducer, getNoteReducer, getDeleteNoteReducer} from './NotesCards/reducer'
import {loginSuccessReducer, loginFailureReducer} from './Login/reducer'
import { editSubitReducer} from './NoteItem/reducer'


function *rootSaga(){
    yield all([
      fork (watchNotesCardsSaga),
      fork (watchNoteSaga),
      fork (watchLoginSaga),
      fork (watchEditNoteSaga),
      fork (watchDeleteNoteSaga)
    ])
}

export const createAppStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const appStore =  createStore(combineReducers({
        notesCardsReducer,
        loginSuccessReducer, 
        loginFailureReducer,
        getNoteReducer,
        editSubitReducer,
        getDeleteNoteReducer
    }), applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga)
    return appStore
}
