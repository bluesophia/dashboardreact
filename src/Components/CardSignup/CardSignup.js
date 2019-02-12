import React, { Component } from 'react';
import './CardSignup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { InputUsername, InputPassword, InputEmail, InputConfirmPassword } from '../Common/Input/InputExports';
import { CircleButton } from '../Common/Button/ButtonExports';

class CardSignup extends Component {
 render(){
     return(
        <div className="row col-lg-6">
            <div className="singin-card">
                <div className="singin-card-body">
                    <div className="singin-card-body-form-div">
                        {/* form */}
                        <form className="singin-card-body-form" id="loginform" action="#">
                            <h3>Sign Up</h3>
                            <div className="singin-form-group">
                                <div class="col-xs-12">
                                    <InputUsername />
                                </div>
                                <div class="col-xs-12">
                                    <InputEmail />
                                </div>
                                <div class="col-xs-12">
                                    <InputPassword />
                                </div>
                                <div class="col-xs-12">
                                    <InputConfirmPassword />
                                </div>
                            </div>
                            <div className="singin-form-group-row">
                                <div className="col-md-12">
                                    <div className="singin-form-group-checkbox">
                                        <div className="singin-form-control">
                                            <input type="checkbox" className="signin-form-control-input" id="customCheck1" />
                                            <label className="signin-form-control-label" for="customCheck1">I agree to all <a href="#" className="signin-form-control-label-a">Terms</a></label>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                            <div className="singin-form-group">
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
                            <div class="singin-form-group-footer">
                                <div class="singin-form-group-footer-signup col-sm-12">
                                    Don't have an account? 
                                    <a href="#" className="singin-form-group-footer-signup-a">
                                        <b className="singin-form-group-footer-signup-b">Sign In</b>
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

export default CardSignup;