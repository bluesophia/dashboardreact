import React, { Component } from 'react';
import './CardAlertWithContent.css'
import { AlertDissmissal } from '../Common/Alert/AlertExports';

class CardAlertWithContent extends Component {
    constructor(props){
        super(props);
        const AlertDissmissalList=[
            {
               id:0,
            },
            {
               id:1,
               backgroundColor: "#fae1e4",
               border: "1px solid #f7d5d9",
               color: "#77373d"
            },
            {
               id:2,
               backgroundColor: "#fff3cd",
               border: "1px solid #ffeeba",
               color: "#846404"
            },
            {
               id:3,
               backgroundColor: "#cdeefd",
               border: "1px solid #b8e7fc",
               color: "#02587e"
            }
        ];
        this.state = {
            AlertDissmissalList
        }
        this.removeCard = this.removeCard.bind(this);
    }
    //  remove card
    removeCard = (id) => {
        const removeCard = this.state.AlertDissmissalList.slice();
        removeCard.splice(id, 1);
        this.setState({
            AlertDissmissalList: removeCard
        })
    }   

    render(){

        const { AlertDissmissalList }  = this.state;
        
        return(
            <div className="row col-lg-6">
                <div className="alert-card">
                    <div className="alert-card-body">
                        <h3>Dissmissal Alert</h3>
                            <div className="alert-card-toaster-btn">
                                {
                                    AlertDissmissalList.map((item, index)=> (
                                        <AlertDissmissal
                                            onClick={this.removeCard}
                                            key={item.id}
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
export default CardAlertWithContent;