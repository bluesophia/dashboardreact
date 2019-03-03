import React, { Component } from 'react';
import { InputUsername, InputPassword } from '../../../Components/Common/Input/InputExports';
import { RectangleButton } from '../../../Components/Common/Button/ButtonExports';
import './WidgetSubscribe.css';
import '../../../Assets/Styles/theme.css';

class WidgetSubscribe extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handle submit
    handleSubmit(){
        // handlesubmit
    }

    render(){
        return(
            <div className="row">
                <div className="col-lg-6">
                    <div className="widgetsubscribe-card">
                        <div className="widgetsubscribe-card-body">
                            <h5 className="widgetsubscribe-card-title">Subscribe</h5>
                            {/* form */}
                            <form className="singin-card-body-form" id="loginform" action="#">
                                <div className="widgetsubscribe-input" id="comment">
                                    <div className="widgetsubscribe-form-group">
                                            <div class="col-xs-12">
                                                <InputUsername />
                                            </div>
                                            <div class="col-xs-12">
                                                <InputPassword />
                                            </div>
                                            <div className="widgetsubscribe-submit">
                                            <RectangleButton 
                                            value={"submit"} 
                                            backgroundColor={"var(--blue)"}
                                            onClick={this.handleSubmit}
                                            />
                                            </div>
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

export default WidgetSubscribe;