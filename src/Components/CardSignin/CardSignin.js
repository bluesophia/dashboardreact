import React, { Component } from 'react';
import './CardSignin.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendar, faPrint } from '@fortawesome/free-solid-svg-icons';
import InputUsername from '../Common/InputUsername/InputUsername';
import InputPassword from '../Common/InputPassword/InputPassword';

class CardSignin extends Component {
 render(){
     return(
        <div className="row col-lg-6">
            <div className="singin-card">
                <div className="singin-card-body">
                    <div className="singin-card-body-printableArea">
                        {/* form */}
                        <form class="form-horizontal form-material" id="loginform" action="index.html">
                            <h3>Sign In</h3>
                            <div class="form-group">
                                <div class="col-xs-12">
                                    <InputUsername />
                                </div>
                                <div class="col-xs-12">
                                    <InputPassword />
                                </div>
                            </div>
                            {/* <div class="form-group">
                                <div class="col-xs-12">
                                    <input class="form-control" type="password" required="" placeholder="Password" /> </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-12">
                                    <div class="d-flex no-block align-items-center">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                            <label class="custom-control-label" for="customCheck1">Remember me</label>
                                        </div> 
                                        <div class="ml-auto">
                                            <a id="to-recover" onclick="showRecover()" class="text-muted"><i class="fas fa-lock m-r-5"></i> Forgot pwd?</a> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group text-center">
                                <div class="col-xs-12 p-b-20">
                                    <button class="btn btn-block btn-lg btn-info btn-rounded" type="submit">Log In</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
                                    <div class="social">
                                        <button class="btn  btn-facebook" data-toggle="tooltip" title="" data-original-title="Login with Facebook"> <i aria-hidden="true" class="fab fa-facebook-f"></i> </button>
                                        <button class="btn btn-googleplus" data-toggle="tooltip" title="" data-original-title="Login with Google"> <i aria-hidden="true" class="fab fa-google-plus-g"></i> </button>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group m-b-0">
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