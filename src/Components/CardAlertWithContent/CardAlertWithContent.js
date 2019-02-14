import React, { Component } from 'react';
import './CardAlertWithContent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { AlertIconWithContent } from '../Common/Alert/AlertExports';

class CardAlertWithContent extends Component {
    constructor(props){
        super(props);
        const AlertDissmissalList=[
            {
               id:0,
            },
            {
               id:1,
               title: "Danger",
               titleColor: "var(--red)",
               backgroundColor: "#fae1e4",
               border: "1px solid #f7d5d9",
               color: "#77373d",
               icon: faExclamationCircle
            },
            {
               id:2,
               title: "Warning",
               titleColor: "var(--yellow)",
               backgroundColor: "#fff3cd",
               border: "1px solid #ffeeba",
               color: "#846404",
               icon: faExclamationTriangle
            },
            {
               id:3,
               title: "Information",
               titleColor: "var(--blue)",
               backgroundColor: "#cdeefd",
               border: "1px solid #b8e7fc",
               color: "#02587e",
               icon: faExclamationCircle
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
                <div className="withcontent-alert-card">
                    <div className="withcontent-alert-card-body">
                        <h3>Alert with content</h3>
                            <div className="withcontent-alert-card-toaster-btn">
                                {
                                    AlertDissmissalList.map((item, index)=> (
                                        <AlertIconWithContent
                                            onClick={this.removeCard}
                                            key={item.id}
                                            icon={item.icon}
                                            title={item.title}
                                            titleColor={item.titleColor}
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