import {take, put} from 'redux-saga/effects'
import *as actions from './actions'

const API_LOGIN_SUBMIT = 'http://localhost:5000/api/submit'

export const watchLoginSaga =  function *() {
  while(1) {
    let action = yield take(actions.ACTION_LOGIN_SUBMIT_GET)
    try {
      const {username, password} = action.authDetails
      let response = yield fetch(API_LOGIN_SUBMIT, { method : 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password })
     })
     response = yield response.json()
     
     if(response.ok === true) {
      yield put(actions.loginAuthSucessResposne(response));
     } else if(response.ok === false) {
      yield put(actions.loginAuthFailureResposne(response));
     }
     
    } catch (e) {
      console.log(e)
    }
  }
}