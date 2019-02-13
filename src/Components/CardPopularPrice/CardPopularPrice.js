import React, { Component } from 'react';
import './CardPopularPrice.css'
import { RectangleButton } from '../Common/Button/ButtonExports';
import SimpleLineIcon from 'react-simple-line-icons';

class CardPopularPrice extends Component {
 render(){
     const { icon1, icon2, icon3, icon4, title, price, text1, text2, text3, text4 } = this.props;
     return(
        <div className="popular-price-card-body-plan-list">
            <div className="popular-price-card-pricingbox">
                    <div className="popular-price-card-pricingbox-body">
                    <div className="popular-price-card-title">
                        <h4 className="popular-price-card-title-header">Popular</h4>
                        <h4 className="popular-price-card-title-h4">{title}</h4>
                        <h2 className="popular-price-card-title-h2">
                            <span className="popular-price-card-title-span">$</span>
                            {price}</h2>
                        <p className="popular-price-card-title-p">per month</p>
                    </div>
                    <div className="popular-price-card-content">
                        <div className="popular-price">
                            <SimpleLineIcon 
                                name={icon1} 
                                style={SimpleLineIconStyle}
                            />
                            {text1}
                        </div>
                        <div className="popular-price">
                            <SimpleLineIcon 
                                name={icon2} 
                                style={SimpleLineIconStyle}
                            />
                            {text2}
                        </div>
                        <div className="popular-price">
                            <SimpleLineIcon 
                                name={icon3} 
                                style={SimpleLineIconStyle}
                            />
                            {text3}
                        </div>
                        <div className="popular-price">
                            <SimpleLineIcon 
                                name={icon4} 
                                style={SimpleLineIconStyle}
                            />
                            {text4}
                        </div>
                        <div className="popular-price-btn">
                            <RectangleButton 
                                value="Sign up"
                                marginTop="20px"
                                backgroundColor="var(--blue)"
                                fontSize="17.5px"
                            />
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
export default CardPopularPrice;