import React from 'react'
import {GoogleLogout} from 'react-google-login'

import { useHistory } from 'react-router-dom'
const clientId = "266472049487-7vsuprhinvbqa2iubr5i3164tckkt3er.apps.googleusercontent.com"
const Logout = () => {
    const history = useHistory();
    const onSuccess= (res)=> {
        console.log("Log Out Successfully")
history.push('/')
    }
     
     
  return (
    <div id="signOutButtton">
    <GoogleLogout
    clientId={clientId}
    buttonText="LogOut"
    onLogoutSuccess={onSuccess}
    />
    </div>
  )
} 

export default Logout