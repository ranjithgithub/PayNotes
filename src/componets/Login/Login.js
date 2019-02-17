import React, { Component } from 'react'
import {connect} from "react-redux"

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField' 
import AppBar from 'material-ui/AppBar'
import { loginSubmit } from '../../store/Login/actions'

import  './Login.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
 
  render() {
    const {ok, message} =  this.props.loginData 
    let error =  null
    if(ok === false) {
      error =  <div className='error'> {message} </div>
    } 
      return <MuiThemeProvider>
        <AppBar title='Login' showMenuIconButton={false} />
          <div className='login'>
           {error}
           <TextField
             hintText="Enter your username"
             floatingLabelText="User Name"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true}  onClick={() => this.handleClick()}/>
         </div>
         </MuiThemeProvider>
    }
    
    handleClick() {
        const { loginSubmit, setView } = this.props
        const {username, password} =  this.state
        setView('NOTES_CARDS')
        loginSubmit(username, password)
    }
}

const mapStateToProps = state => ({
  loginData: state.loginFailureReducer
})

const mapDispacthToProps = dispatch =>({
  loginSubmit: (username, password) => dispatch(loginSubmit(username, password))
})
   
export default connect(mapStateToProps, mapDispacthToProps)(Login)

