import React, { Component } from 'react';
import './CardRecentcomments.css';
import ImgCircle from '../Common/ImgCircle/ImgCircle';
import Badge from '../Common/Badge/Badge'
class CardRecentcomments extends Component {
    render(){
        return(
            <div className="row">
                <div className="col-lg-6">
                    <div className="cardRecentcomments-card">
                        <div className="cardRecentcomments-card-body">
                            <h5 className="cardRecentcomments-card-title">Recent Comments</h5>
                        </div>
                        <div className="comment-widgets" id="comment">
                            {/* <!-- Comment Row --> */}
                            <div className="comment-row">
                                <div className="comment-row-image">
                                    <span className="round">
                                    <ImgCircle src={"http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg"} width={"50px"}/>
                                    </span>
                                </div>
                                <div className="comment-text">
                                    <h5>James Anderson</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                                    <div className="comment-footer">
                                        <span className="comment-footer-date">April 14, 2016</span><Badge backgroundColor={"#03a9f3"} value={"Pending"} color={"#fff"}/>
                                        <span class="action-icons">
                                                <a href="javascript:void(0)"><i class="ti-pencil-alt"></i></a>
                                                <a href="javascript:void(0)"><i class="ti-check"></i></a>
                                                <a href="javascript:void(0)"><i class="ti-heart"></i></a>    
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        )
    }
};

export default CardRecentcomments;