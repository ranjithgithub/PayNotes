import React , { Component } from 'react'
import { connect }from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import './NoteItem.css'

import { editSubmit } from '../../store/NoteItem/actions'
class NoteItem extends Component {
    render () {
      const { isNewNote } = this.props
       let note 
       if(isNewNote === true ){
         note = {}
       } else {
         note = this.props.note
         this.id = note.id
       }
       
    return(<MuiThemeProvider>
      <AppBar title='Note' showMenuIconButton={false} >
      <button className='nav-button' onClick={() => this.handleCancel()}>Cancel </button>
      </AppBar>
    <div className="note-container">
        <h2>Add/Eddit Note</h2>
        <form
          className="note-form"
          onSubmit={(e) => this.onSubmit(e)}
        >
          <div className="note-title">
            <input
              className="note-title-input"
              type="text"
              placeholder="Note Title..."
              defaultValue={note.title}
              ref={(input) => this.title = input}
            />
          </div>
          <div className="note-textarea-container">
            <textarea
              className="note-textarea"
              placeholder="Type Here..."
              defaultValue={note.content}
              ref={(input) => this.content = input}
            />
          </div>
          <input className="note-button" type="submit" value="Submit" />
        </form>
      </div>
      </MuiThemeProvider>
    );
  }
  
  handleCancel() {
    const {setView, toggleNotes} = this.props
    setView('NOTES_CARDS')
    toggleNotes()
  }
  onSubmit(e) {
    e.preventDefault();
    const {setView, editSubmit} = this.props
    setView('NOTES_CARDS')
    editSubmit({
      id: this.id,
      title: this.title.value,
      content: this.content.value
    })
  }
}

const mapStateToProps = state => ({
  note: state.getNoteReducer
})

const mapDispacthToProps = dispatch =>({
  editSubmit: (payload) => dispatch(editSubmit(payload))
})
   
export default connect(mapStateToProps, mapDispacthToProps)(NoteItem)