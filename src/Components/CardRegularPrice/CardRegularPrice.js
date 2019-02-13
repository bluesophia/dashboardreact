import React, { Component } from 'react';
import './CardRegularPrice.css'
import { RectangleButton } from '../Common/Button/ButtonExports';
import SimpleLineIcon from 'react-simple-line-icons';

class CardRegularPrice extends Component {
 render(){
     const { icon1, icon2, icon3, icon4, title, price, text1, text2, text3, text4 } = this.props;
     return(
        
                    <div className="regular-price-card-body-plan">
                        <div className="regular-price-card-body-plan-list col-md-3 col-xs-12 col-sm-6 ">
                            <div className="regular-price-card-pricingbox">
                                 <div className="regular-price-card-pricingbox-body">
                                    <div className="regular-price-card-title">
                                        <h4 className="regular-price-card-title-h4">{title}</h4>
                                        <h2 className="regular-price-card-title-h2">
                                            <span className="regular-price-card-title-span">$</span>
                                            {price}</h2>
                                        <p className="regular-price-card-title-p">per month</p>
                                    </div>
                                    <div className="regular-price-card-content">
                                        <div className="regular-price">
                                            <SimpleLineIcon 
                                                name={icon1} 
                                                style={SimpleLineIconStyle}
                                            />
                                            {text1}
                                        </div>
                                        <div className="regular-price">
                                            <SimpleLineIcon 
                                                name={icon2} 
                                                style={SimpleLineIconStyle}
                                            />
                                            {text2}
                                        </div>
                                        <div className="regular-price">
                                            <SimpleLineIcon 
                                                name={icon3} 
                                                style={SimpleLineIconStyle}
                                            />
                                            {text3}
                                        </div>
                                        <div className="regular-price">
                                            <SimpleLineIcon 
                                                name={icon4} 
                                                style={SimpleLineIconStyle}
                                            />
                                            {text4}
                                        </div>
                                        <div className="regular-price-btn">
                                            <RectangleButton 
                                                value="Sign up"
                                                marginTop="20px"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
        )
    }   
}
// SimpleLineIconStyle
const SimpleLineIconStyle = {
    marginLeft: '5px',  
    marginRight: '5px',
    marginTop: '3px',
    fontSize: '14px'
}
export default CardRegularPrice;