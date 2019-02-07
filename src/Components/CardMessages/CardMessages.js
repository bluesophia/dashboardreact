import React, { Component } from 'react';
import './CardMessages.css';
import ImgCircle from '../Common/ImgCircle/ImgCircle';


class CardMessages extends Component {
    render(){
        const { avatar, name, job } = this.props;
        return(
            <div className="commentBox-card-body">
                <div>
                    <div>
                        <div className="carousel-item">
                            <h4>My Acting blown <span>Your Mind</span> and <br /> you also <br />laugh at the moment</h4>
                            <div>
                                <span><ImgCircle src={avatar} width={"50px"}/></span>
                                <span className="commentBox-textBox">
                                <h4>{name}</h4>
                                <p>{job}</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardMessages;