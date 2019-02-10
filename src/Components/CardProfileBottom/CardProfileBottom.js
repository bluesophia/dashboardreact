import React, { Component } from 'react'
import './CardProfileBottom.css'
import CircleButton from '../../Components/Common/CircleButton/CircleButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

class CardProfileBottom extends Component {
    render(){

        const { email, phone, address } = this.props;
        const icon = [
            {
                id: 1,
                icon: faFacebookF
            },
            {
                id: 2,
                icon: faTwitter
            },
            {
                id: 3,
                icon: faYoutube
            },
        ]
        
        return(
            <div className="profile-card-body-bottom">
                    <div className="profile-card-footer">
                        <div className="profile-card-footer-address">
                            <small className="profile-card-small">Email address</small>
                            <h6>{email}</h6>
                            <small className="profile-card-small">Phone</small>
                            <h6>{phone}</h6>
                            <small className="profile-card-small">Address</small>
                            <h6>{address}</h6>
                        </div>
                        <div className="map-box">
                            <iframe className="profile-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470029.1604841957!2d72.29955005258641!3d23.019996818380896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C+Gujarat!5e0!3m2!1sen!2sin!4v1493204785508" frameBorder="0"  allowFullScreen=""></iframe>
                        </div>
                        <div>
                            <small className="profile-card-small">Social Profile</small>
                            <div className="profile-card-body-bottom-button">
                            {
                                icon.map((item, index) => (
                                    <CircleButton 
                                    key={index}
                                    width={"40px"}
                                    height={"40px"}
                                    border={"1px solid #dee2e6"}
                                    backgroundColor={"#f8f9fa"}
                                    color={"#212529"}
                                    icon={item.icon}
                                    fontSize={"13px"}
                                    style={CircleButtonStyle}
                                />
                                ))
                            }    
                            </div>
                        </div>
                    <div>
                </div>
            </div>
        </div>
        )
    }
}
const CircleButtonStyle = {
    fontSize: "13px"
}

export default CardProfileBottom;