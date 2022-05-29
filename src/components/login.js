import React from 'react'
import {GoogleLogin} from 'react-google-login'
import { useHistory } from 'react-router-dom'
const Login = () => {
  const history = useHistory();
    const onSuccess= (res)=> {
        console.log("LOGIN SUCCESS! Current user: ", res.profileObj)
        history.push("/dashboard")
    }
        const onFailure = (res) => {
        console.log("LOGIN FAILED! res : ", res)
      }
      const clientId = "266472049487-7vsuprhinvbqa2iubr5i3164tckkt3er.apps.googleusercontent.com"
     
  return (
    <div id="signInButtton">
    <GoogleLogin
    clientId={clientId}
    buttonText="Login"
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy={'single_host_origin'}
    isSignedIn={true}
    />
    </div>
  )
}

export default Login