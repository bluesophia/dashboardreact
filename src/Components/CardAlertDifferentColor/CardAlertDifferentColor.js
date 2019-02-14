import React, { Component } from 'react';
import './CardAlertDifferentColor.css'
import { AlertDefault } from '../Common/Alert/AlertExports';

class CardAlertDifferentColor extends Component {
 render(){
    const alertlist = [
        {
            id: 0
        },
        {
            id: 1,
            backgroundColor: "#fae1e4",
            border: "1px solid #f7d5d9",
            color: "#77373d"
        },
        {
            id: 2,
            backgroundColor: "#fff3cd",
            border: "1px solid #ffeeba",
            color: "#846404"
        },
        {
            id: 3,
            backgroundColor: "#cdeefd",
            border: "1px solid #b8e7fc",
            color: "#02587e"
        }
    ]
     return(
        <div className="row col-lg-6">
            <div className="differentcolor-alert-card">
                <div className="differentcolor-alert-card-body">
                    <h3>Alert with different color</h3>
                        <div className="differentcolor-alert-card-toaster-btn">
                            {
                                alertlist.map((item, index) => (
                                    <AlertDefault
                                        key={index}
                                        backgroundColor={item.backgroundColor}
                                        border={item.border}
                                        color={item.color}
                                    /> 
                                ))
                            }
                        </div>
                </div>        
            </div>            
        </div>
        )
    }   
}
export default CardAlertDifferentColor;