import React, { Component } from 'react';
import './CardSignup.css'
import { InputUsername, InputPassword, InputEmail, InputConfirmPassword } from '../Common/Input/InputExports';
import { CircleButton } from '../Common/Button/ButtonExports';

function validate(username, email, password, passwordconfirm) {
    return {
        // true if value is empty
        username: username.length === 0,
        email: email.length === 0, 
        password: password.length === 0,
        passwordconfirm: passwordconfirm.length === 0,
    }
}

class CardSignup extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordconfirm: '',

            touched: {
                username: false,
                email: false,
                password: false,
                passwordconfirm: false
            }
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handlepasswordConfirmChange = this.handlepasswordConfirmChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // username onchange
    handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        })
    }
    // email onchange
    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        })
    }
    // password onchange
    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        })
    }
    // password confirm onchange
    handlepasswordConfirmChange(e) {
        this.setState({
            passwordconfirm: e.target.value
        })
    }

    handleBlur = (field) =>(e) => {
        this.setState({
            touched: {
                ...this.state.touched,
                [field]: true
            }
        })
    }
    // submit
    handleSubmit(e) {
        // return된 canBeSubmitted에 에러가 없을 경우 
        if(!this.canBeSubmitted()) {
            e.preventDefault();
            return;
        }
        // 가져온 값을 보여준다.
        const { usernam, email, password, passwordconfirm } = this.state;
        alert(`Signed in with username: ${usernam} email: ${email} pawwsord: ${password} passwordconfirm: ${passwordconfirm}`)
    }

    // errors
    canBeSubmitted() {
        const errors = validate(
            this.state.username,
            this.state.email,
            this.state.password,
            this.state.passwordconfirm
        )
        //return errors.name 한개라도 조건을 만족하는지(만족하지 않을 경우 !isDisabled)
        const isDisabled = Object.keys(errors).some(x => errors[x])
        return !isDisabled;
    }
    
    render(){

        const errors = validate( this.state.username, this.state.email, this.state.password, this.state.passwordconfirm )
        const isDisabled = Object.keys(errors).some(x => errors[x])
        const shouldMarkError = (field) => {
            const hasError = errors[field];
            const shouldShow = this.state.touched[field];

            return hasError ? shouldShow : false;
    }

     return(
        <div className="row col-lg-6">
            <div className="singup-card">
                <div className="singup-card-body">
                    <div className="singup-card-body-form-div">

                        {/* form */}
                        <form className="singup-card-body-form" id="loginform" action="#" onSubmit={this.handleSubmit}>
                            <h3>Sign Up</h3>
                            <div className="singup-form-group">
                                {/* username */}
                                <div class="col-xs-12">
                                    <InputUsername 
                                        className={shouldMarkError('username') ? "error" : "" }
                                        value={this.state.username}
                                        onChange={this.handleUsernameChange}
                                        onBlur={this.handleBlur('username')}
                                        borderBottom={shouldMarkError('username') ? "1px solid #fb9678" : "1px solid #e9ecef"}
                                    />
                                    <span className={shouldMarkError('username') ? "error" : "error-hidden"} style={{fontWeight: 400}}>
                                        Please filled in this field.
                                    </span>
                                </div>
                                {/* email */}
                                <div class="col-xs-12">
                                    <InputEmail 
                                        className={shouldMarkError('email') ? "error" : "" }
                                        value={this.state.email}
                                        onChange={this.handleEmailChange}
                                        onBlur={this.handleBlur('email')}
                                        borderBottom={shouldMarkError('email') ? "1px solid #fb9678" : "1px solid #e9ecef"}
                                    />
                                    <span className={shouldMarkError('email') ? "error" : "error-hidden"} style={{fontWeight: 400}}>
                                        Please filled in this field.
                                    </span>
                                </div>
                                {/* password */}
                                <div class="col-xs-12">
                                    <InputPassword 
                                            className={shouldMarkError('password') ? "error" : "" }
                                            value={this.state.password}
                                            onChange={this.handlePasswordChange}
                                            onBlur={this.handleBlur('password')}
                                            borderBottom={shouldMarkError('password') ? "1px solid #fb9678" : "1px solid #e9ecef"}
                                    />
                                    <span className={shouldMarkError('password') ? "error" : "error-hidden"} style={{fontWeight: 400}}>
                                        Please filled in this field.
                                    </span>
                                </div>
                                {/* confirm password */}
                                <div class="col-xs-12">
                                    <InputConfirmPassword 
                                        className={shouldMarkError('passwordconfirm') ? "error" : "" }
                                        value={this.state.passwordconfirm}
                                        onChange={this.handlepasswordConfirmChange}
                                        onBlur={this.handleBlur('passwordconfirm')}
                                        borderBottom={shouldMarkError('passwordconfirm') ? "1px solid #fb9678" : "1px solid #e9ecef"}
                                    />
                                    <span className={shouldMarkError('passwordconfirm') ? "error" : "error-hidden"} style={{fontWeight: 400}}>
                                            Please filled in this field.
                                    </span>
                                </div>
                            </div>
                            {/* terms */}
                            <div className="singup-form-group-row">
                                <div className="col-md-12">
                                    <div className="singup-form-group-checkbox">
                                        <div className="singup-form-control">
                                            <input type="checkbox" className="singup-form-control-input" id="customCheck1" />
                                            <label className="signin-form-control-label" for="customCheck1">I agree to all <a href="#" className="singup-form-control-label-a">Terms</a></label>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                            {/* signup button */}
                            <div className="singup-form-group">
                                <div className="col-xs-12">
                                    <CircleButton 
                                        value={"SIGN UP"}
                                        width={"100%"}
                                        height={"50px"}
                                        borderRadius={"2rem"}
                                        backgroundColor={"var(--blue)"}
                                        padding={".75rem 1.5rem;"}
                                        fontSize={"17.5px"}
                                        marginBottom={"20px"}
                                        fontWeight={"500"}
                                    />
                                </div>
                            </div>
                            <div className="singup-form-group-footer">
                                <div className="singup-form-group-footer-signup col-sm-12">
                                    Don't have an account? 
                                    <a href="#" className="singup-form-group-footer-signup-a">
                                        <b className="singup-form-group-footer-signup-b">Sign In</b>
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>        
                </div>        
            </div>            
        </div>
        )
    }   
}

export default CardSignup;