import React, { Component } from 'react'
import {connect} from "react-redux"

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

import {getNotesCardsData, getNote, deleteNote} from '../../store/NotesCards/actions'
import './NoteCards.css'

class NoteCards extends Component {
  componentDidMount() {
    const { getNotesCardsData } = this.props
    getNotesCardsData()
  }

  componentDidUpdate() {
    const { getNotesCardsData } = this.props
    if(this.isDelete === true) {
      this.isDelete =  false
      getNotesCardsData()
    }
    
  }

    render() { 
       const { notesCardsData } = this.props;

       let output =  null;
        if (notesCardsData.length > 0) {
            output = notesCardsData.map((note) => {
              return (<div key={note.id} className="note-card-container">
              <div className="note-card-title">
                {note.title}
              </div>
              <div className="note-card-content">
              {note.content}
              </div>
              <span className="note-card-delete" onClick={() => this.deleteNote(note.id)}>
                <i className="material-icons">close</i>
              </span>
              <span className="note-card-edit" onClick={() => this.getNote(note.id)}>
                <i className="material-icons">mode_edit</i>
              </span>
            </div>)
            })
        } else {
            output = null;
        }

        return( <MuiThemeProvider>
          <AppBar title='Notes Cards' showMenuIconButton={false} >
            <button className='nav-button' onClick={() => this.handleNewNote()}>+ Note </button>
          </AppBar>
            <div className="note-list-container">
             {output}
           </div>
          </MuiThemeProvider>
        )
    }

    handleNewNote = () => {
      const {toggleNotes, setView} = this.props
      setView('NEW_NOTE_ITEM')
      toggleNotes()
    }

    deleteNote = id => {
      this.isDelete = true
      const {deleteNote, setView} = this.props
      setView('NOTES_CARDS')
      deleteNote(id)
    }

    getNote = id => {
      const {getNote, setView} = this.props
      setView('NOTE_ITEM')
      getNote(id)
    }
}

const mapStateToProps = state => ({
  notesCardsData: state.notesCardsReducer,
  deleteNoteId: state.getDeleteNoteReducer
})

const mapDispacthToProps = dispatch =>({
  getNotesCardsData: () => dispatch(getNotesCardsData()),
  getNote: id => dispatch(getNote(id)),
  deleteNote: id => dispatch(deleteNote(id))
})
   
export default connect(mapStateToProps, mapDispacthToProps)(NoteCards)