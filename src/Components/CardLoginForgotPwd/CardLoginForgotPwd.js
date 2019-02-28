import React, { Component } from 'react';
import './CardLoginForgotPwd.css'
import { InputEmail } from '../Common/Input/InputExports';
import { CircleButton } from '../Common/Button/ButtonExports';

class CardLoginForgotPwd extends Component {
 render(){
     return(
        <div className="row col-lg-6">
            <div className="singin-card">
                <div className="singin-card-body">
                    <div className="singin-card-body-form-div">
                        {/* form */}
                        <form className="singin-card-body-form" id="loginform" action="#">
                            <h3 className="singin-card-body-form-h3">Recover Password</h3>
                            <h5 className="singin-card-body-form-h5">Enter your Email and instructions will be sent to you!</h5>
                            <div className="singin-form-group">
                                <div class="col-xs-12">
                                    <InputEmail />
                                </div>
                            </div>
                            <div className="singin-form-group">
                                <div className="col-xs-12">
                                    <CircleButton 
                                        value={"RESET"}
                                        width={"100%"}
                                        height={"50px"}
                                        borderRadius={"0.3rem"}
                                        backgroundColor={"var(--primary)"}
                                        backgroundColorHover={"#fa7953"}
                                        padding={".75rem 1.5rem;"}
                                        fontSize={"17.5px"}
                                        marginBottom={"0"}
                                    />
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
export default CardLoginForgotPwd;