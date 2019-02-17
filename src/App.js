import React, { Component } from 'react';
import { connect } from 'react-redux'
import Login from './componets/Login/Login'
import NoteCards from './componets/NoteCards/NoteCards'
import NoteItem from './componets/NoteItem/NoteItem'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.css'

class App extends Component {
 constructor(props) {
    super(props)
    this.state = {showNotes: false,
      title: 'Login'
    }
    this.showView = 'LOGIN'
 }

 setView = (view) => {
   this.showView = view
 }

 toggleNotes = () => {
  this.setState({
    showNotes: ! this.state.showNotes
  })
}


getAppContent = (loginSucess) => {
  if(this.firstTime) {
    this.firstTime = false
    return <Login toggleNotes={this.toggleNotes}/>
  } else {
    return this.state.showNotes ? <NoteCards toggleNotes={this.toggleNotes} /> : 
    <NoteItem  toggleNotes={this.toggleNotes} />
  }
}

  render() {
    let view = null
    switch (this.showView) {
      case 'NOTES_CARDS':
      view = <NoteCards toggleNotes={this.toggleNotes} setView={this.setView} />
      break;
      case 'NOTE_ITEM':
      view = <NoteItem  toggleNotes={this.toggleNotes} setView={this.setView} isNewNote={false}/>
      break
      case 'NEW_NOTE_ITEM':
      view = <NoteItem  toggleNotes={this.toggleNotes} setView={this.setView} isNewNote={true}/>
      break
      case 'LOGIN':
      default:
      view = <Login toggleNotes={this.toggleNotes}  setView={this.setView}/>
      break
    }
    return  <MuiThemeProvider>
     {view}
    </MuiThemeProvider> 
  }
}

const mapStateToProps = state => ({
  loginData: state.loginSuccessReducer,
  note: state.getNoteReducer,
  editNote: state.editSubitReducer
})

export default connect(mapStateToProps, null)(App)

