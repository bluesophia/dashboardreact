import React, { Component } from 'react';
import './CardSignin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { InputUsername, InputPassword } from '../Common/Input/InputExports';
import { CircleButton } from '../Common/Button/ButtonExports';

class CardSignin extends Component {
 render(){
     return(
        <div className="row col-lg-6">
            <div className="singin-card">
                <div className="singin-card-body">
                    <div className="singin-card-body-form-div">
                        {/* form */}
                        <form className="singin-card-body-form" id="loginform" action="#">
                            <h3>Sign In</h3>
                            <div className="singin-form-group">
                                <div class="col-xs-12">
                                    <InputUsername />
                                </div>
                                <div class="col-xs-12">
                                    <InputPassword />
                                </div>
                            </div>
                            <div className="singin-form-group-row">
                                <div className="col-md-12">
                                    <div className="singin-form-group-checkbox">
                                        <div className="singin-form-control">
                                            <input type="checkbox" className="signin-form-control-input" id="customCheck1" />
                                            <label className="signin-form-control-label" for="customCheck1">Remember me</label>
                                        </div> 
                                        <div className="singin-form-group-forgot">
                                            <a id="to-recover" onclick="showRecover()">
                                            <FontAwesomeIcon icon={faLock} style={FontAwesomeIconStyle}/>
                                            Forgot pwd?</a> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="singin-form-group">
                                <div className="col-xs-12">
                                    <CircleButton 
                                        value={"Log In"}
                                        width={"100%"}
                                        height={"50px"}
                                        borderRadius={"2rem"}
                                        backgroundColor={"var(--blue)"}
                                        padding={".75rem 1.5rem;"}
                                        fontSize={"17.5px"}
                                        marginBottom={"20px"}
                                    />
                                </div>
                            </div>
                            <div className="singin-form-group-row">
                                <div className="singin-form-group-social col-xs-12 col-sm-12 col-md-12">
                                    <div className="singin-form-group-social-btn-div">
                                        <button className="singin-form-group-social-btn-facebook" data-toggle="tooltip" title="" data-original-title="Login with Facebook"><FontAwesomeIcon icon={faFacebookF}/></button>
                                        <button className="singin-form-group-social-btn-google" data-toggle="tooltip" title="" data-original-title="Login with Google"><FontAwesomeIcon icon={faGooglePlusG}/></button>
                                    </div>
                                </div>
                            </div>
                            <div class="singin-form-group-footer">
                                <div class="singin-form-group-footer-signup col-sm-12">
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