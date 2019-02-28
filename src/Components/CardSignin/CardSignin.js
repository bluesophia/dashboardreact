import React, { Component } from 'react';
import './CardSignin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { InputEmail, InputPassword } from '../Common/Input/InputExports';
import { CircleButton } from '../Common/Button/ButtonExports';

function validate(email, password) {
    return {
        // true if value is empty
        email: email.length === 0, 
        password: password.length === 0
    }
}

class CardSignin extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',

            touched: {
                email: false,
                password: false
            }
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleBlur = (field) =>(e) => {
        this.setState({
            touched: {
                ...this.state.touched,
                [field]: true
            }
        })
    }
    handleSubmit(e) {
        // return된 canBeSubmitted에 에러가 없을 경우 
        if(!this.canBeSubmitted()) {
            e.preventDefault();
            return;
        }
        // 가져온 값을 보여준다.
        const { email, password } = this.state;
        alert(`Signed in with email: ${email} pawwsord: ${password}`)
    }

    // errors
    canBeSubmitted() {
        const errors = validate(
            this.state.email,
            this.state.password
        )
        //return errors.name 한개라도 조건을 만족하는지(만족하지 않을 경우 !isDisabled)
        const isDisabled = Object.keys(errors).some(x => errors[x])
        return !isDisabled;
    }
    
 render(){

    const errors = validate( this.state.email, this.state.password )
    const isDisabled = Object.keys(errors).some(x => errors[x])
    const shouldMarkError = (field) => {
        const hasError = errors[field];
        const shouldShow = this.state.touched[field];

        return hasError ? shouldShow : false;
    }

     return(
        <div className="row col-lg-6">
            <div className="singin-card">
                <div className="singin-card-body">
                    <div className="singin-card-body-form-div">

                        {/* form */}
                        <form className="singin-card-body-form" id="loginform" action="#" onSubmit={this.handleSubmit}>
                            <h3>Sign In</h3>
                            <div className="singin-form-group">

                                {/* email */}
                                <div className="col-xs-12">
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
                                <div className="col-xs-12">
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
                            </div>

                            {/* rememeber me & forgot PWD */}    
                            <div className="singin-form-group-row">
                                <div className="col-md-12">
                                    <div className="singin-form-group-checkbox">
                                        <div className="singin-form-control">
                                            <input type="checkbox" className="signin-form-control-input" id="customCheck1" />
                                            <label className="signin-form-control-label" for="customCheck1">Remember me</label>
                                        </div> 
                                        <div className="singin-form-group-forgot">
                                            <a id="to-recover" onClick="showRecover()">
                                            <FontAwesomeIcon icon={faLock} style={FontAwesomeIconStyle}/>
                                            Forgot pwd?</a> 
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* submit button */}
                            <div className="singin-form-group">
                                <div className="col-xs-12">
                                    <CircleButton 
                                        value={"Log In"}
                                        width={"100%"}
                                        height={"50px"}
                                        borderRadius={"2rem"}
                                        backgroundColor={"var(--blue)"}
                                        backgroundColorHover={"#038fcd"}
                                        padding={".75rem 1.5rem;"}
                                        fontSize={"17.5px"}
                                        marginBottom={"20px"}
                                        disabled={isDisabled}
                                    />
                                </div>
                            </div>

                            {/* social login */}
                            <div className="singin-form-group-row">
                                <div className="singin-form-group-social col-xs-12 col-sm-12 col-md-12">
                                    <div className="singin-form-group-social-btn-div">
                                        <button className="singin-form-group-social-btn-facebook" data-toggle="tooltip" title="" data-original-title="Login with Facebook"><FontAwesomeIcon icon={faFacebookF}/></button>
                                        <button className="singin-form-group-social-btn-google" data-toggle="tooltip" title="" data-original-title="Login with Google"><FontAwesomeIcon icon={faGooglePlusG}/></button>
                                    </div>
                                </div>
                            </div>

                            {/* Don't have an account? */}
                            <div className="singin-form-group-footer">
                                <div className="singin-form-group-footer-signup col-sm-12">
                                    Don't have an account?
                                    <a href="#" className="singin-form-group-footer-signup-a">
                                        <b className="singin-form-group-footer-signup-b">Sign Up</b>
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

// FontAwesomeIconStyle
const FontAwesomeIconStyle = {
    marginLeft: '5px',  
    marginRight: '5px'
}

export default CardSignin;

