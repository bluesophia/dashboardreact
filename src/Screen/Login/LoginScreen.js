import React, { Component } from 'react';
import { Signin, Signup, LoginForgotPwd }  from '../Login/LoginExports';

class LoginScreen extends Component {
    render(){
        return(
            <div>
                <Signin />
                <Signup />
                <LoginForgotPwd />
            </div>
        )
    }
}

export default LoginScreen;