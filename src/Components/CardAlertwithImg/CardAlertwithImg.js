import React, { Component } from 'react';
import './CardAlertwithImg.css'
import { AlertImgDissmissal } from '../Common/Alert/AlertExports';

class CardAlertwithImg extends Component {
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
               src: "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",
               color: "#77373d"
            },
            {
               id:2,
               backgroundColor: "#fff3cd",
               src: "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/2.jpg",
               border: "1px solid #ffeeba",
               color: "#846404"
            },
            {
               id:3,
               backgroundColor: "#cdeefd",
               src: "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/3.jpg",
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
                        <h3>Alert with image / icon</h3>
                            <div className="alert-card-toaster-btn">
                                {
                                    AlertDissmissalList.map((item, index)=> (
                                        <AlertImgDissmissal
                                            onClick={this.removeCard}
                                            key={item.id}
                                            src={item.src}
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
export default CardAlertwithImg;