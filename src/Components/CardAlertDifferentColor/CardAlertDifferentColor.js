import React, { Component } from 'react';
import './CardAlertDifferentColor.css'
import { AlertDefault } from '../Common/Alert/AlertExports';

class CardAlertDifferentColor extends Component {
 render(){
     return(
        <div className="row col-lg-6">
            <div className="alert-card">
                <div className="alert-card-body">
                    <h3>Alert with different color</h3>
                        <div className="alert-card-toaster-btn">
                            <AlertDefault/> 
                            <AlertDefault
                                backgroundColor="#fae1e4"
                                border="1px solid #f7d5d9"
                                color="#77373d"
                            />
                            <AlertDefault
                                backgroundColor="#fff3cd"
                                border="1px solid #ffeeba"
                                color="#846404"
                            />
                            <AlertDefault
                                backgroundColor="#cdeefd"
                                border="1px solid #b8e7fc"
                                color="#02587e"
                            />
                        </div>
                </div>        
            </div>            
        </div>
        )
    }   
}
export default CardAlertDifferentColor;