import {take, put} from 'redux-saga/effects'
import *as actions from './actions'

const API_GET_NOTES_CARDS = 'http://localhost:5000/api/get_cards'
const API_GET_NOTES = 'http://localhost:5000/api/get_note'
const API_GET_DELETE_NOTE = 'http://localhost:5000/api/note_delete'
export const watchNotesCardsSaga=  function *() {
  while (1) {
    yield take(actions.ACTION_GET_NOTES_CARDS)
    try {
      let response = yield fetch(API_GET_NOTES_CARDS, { method : 'GET',
      headers: { "Content-Type": "application/json" }
     })
     response = yield response.json()
     yield put(actions.setNotesCardsData(response));
    } catch (e) {
      console.log(e)
    }
  }
}

export const watchNoteSaga=  function *() {
  while(1) {
  let action = yield take(actions.ACTION_GET_NOTE)
  try {
    let response = yield fetch(API_GET_NOTES, { method : 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({id: action.noteID})
   })
   response = yield response.json()
   yield put(actions.setNotes(response));
  } catch (e) {
    console.log(e)
  }
}
}

export const watchDeleteNoteSaga=  function *() {
  while(1) {
  let action = yield take(actions.ACTION_GET_DELETE_NOTE)
  try {
    let response = yield fetch(API_GET_DELETE_NOTE, { method : 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({id: action.noteID})
   })
   response = yield response.json()
   yield put(actions.setDeleteNote(response));
  } catch (e) {
    console.log(e)
  }
}
}
