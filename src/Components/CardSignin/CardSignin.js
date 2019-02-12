import React, { Component } from 'react';
import './CardSignin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
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
                        <form class="singin-card-body-form" id="loginform" action="#">
                            <h3>Sign In</h3>
                            <div class="singin-form-group">
                                <div class="col-xs-12">
                                    <InputUsername />
                                </div>
                                <div class="col-xs-12">
                                    <InputPassword />
                                </div>
                            </div>
                            <div class="singin-form-group-row">
                                <div class="col-md-12">
                                    <div class="singin-form-group-checkbox">
                                        <div class="singin-form-control">
                                            <input type="checkbox" class="signin-form-control-input" id="customCheck1" />
                                            <label class="signin-form-control-label" for="customCheck1">Remember me</label>
                                        </div> 
                                        <div class="singin-form-group-forgot">
                                            <a id="to-recover" onclick="showRecover()">
                                            <FontAwesomeIcon icon={faLock} style={FontAwesomeIconStyle}/>
                                            Forgot pwd?</a> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group text-center">
                                <div class="col-xs-12 p-b-20">
                                    <CircleButton 
                                        value={"Log In"}
                                        width={"100%"}
                                        height={"50px"}
                                        borderRadius={"2rem"}
                                        backgroundColor={"var(--blue)"}
                                        padding={".75rem 1.5rem;"}
                                        fontSize={"17.5px"}
                                    />
                                </div>
                            </div>
                            {/* <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
                                    <div class="social">
                                        <button class="btn  btn-facebook" data-toggle="tooltip" title="" data-original-title="Login with Facebook"> <i aria-hidden="true" class="fab fa-facebook-f"></i> </button>
                                        <button class="btn btn-googleplus" data-toggle="tooltip" title="" data-original-title="Login with Google"> <i aria-hidden="true" class="fab fa-google-plus-g"></i> </button>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div class="form-group m-b-0">
                                <div class="col-sm-12 text-center">
                                    Don't have an account? <a href="pages-register.html" class="text-info m-l-5"><b>Sign Up</b></a>
                                </div>
                            </div> */}
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