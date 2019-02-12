import React, { Component } from 'react';
import { Signin, Signup }  from '../Login/LoginExports';

class LoginScreen extends Component {
    render(){
        return(
            <div>
                <Signin />
                {/* <Signup /> */}
            </div>
        )
    }
}

export default LoginScreen;