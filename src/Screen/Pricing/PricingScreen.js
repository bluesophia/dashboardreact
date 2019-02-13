import React, { Component } from 'react';
import { PopularPrice, RegularPrice } from './PricingExports';
import './PricingScreen.css';

class PricingScreen extends Component {
    render(){
        return(
            <div className="row col-12">
                <div className="regular-price-card">
                    <div className="regular-price-card-body">
                        <RegularPrice />
                        <RegularPrice 
                            title='Gold'
                            price='34'
                        />
                        <PopularPrice />
                        <RegularPrice 
                            title='Dimond'
                            price='54'
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default PricingScreen;