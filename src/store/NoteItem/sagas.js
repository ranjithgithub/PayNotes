import {take, put} from 'redux-saga/effects'
import *as actions from './actions'

const API_EDIT_SUBMIT = 'http://localhost:5000/api/note_edit'

export const watchEditNoteSaga =  function *() {
  while(1) {
    let action = yield take(actions.ACTION_EDIT_SUBMIT_GET)
    try {
      let response = yield fetch(API_EDIT_SUBMIT, { method : 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(action.payLoad)
     })
     response = yield response.json()
     yield put(actions.setEditSubmit(response));
    } catch (e) {
      console.log(e)
    }
  }
}