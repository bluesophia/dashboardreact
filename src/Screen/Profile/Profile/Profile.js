import React, { Component } from 'react';
import './Profile.css';
import CardProfileHeader from '../../../Components/CardProfileHeader/CardProfileHeader'
import CircleButton from '../../../Components/Common/CircleButton/CircleButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

class Profile extends Component {
    constructor(props){
        super(props);
        
        this.state={
            id: 1,
            imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/5.jpg',
            name: 'Hanna Gover',
            subtitle: 'Accounts Manager Amix corp',
            follower: 254,
            images: 54,
            email: 'hannagover@gmail.com',
            phone: '+91 654 784 547',
            address: '71 Pilgrim Avenue Chevy Chase, MD 20815'
        }
    }
    render(){
        return(
            <div className="profile-card">
                <div className="profile-card-body">
                    <CardProfileHeader 
                        id={this.state.id}
                        imgUrl={this.state.imgUrl}
                        name={this.state.name}
                        subtitle={this.state.subtitle}
                        follower={this.state.follower}
                        images={this.state.images}
                    />
                </div>
                <div className="profile-card-body-bottom">
                    <div className="profile-card-footer">
                        <div className="profile-card-footer-address">
                            <small className="profile-card-small">Email address</small>
                            <h6>{this.state.email}</h6>
                            <small className="profile-card-small">Phone</small>
                            <h6>{this.state.phone}</h6>
                            <small className="profile-card-small">Address</small>
                            <h6>{this.state.address}</h6>
                        </div>
                        <div className="map-box">
                            <iframe className="profile-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470029.1604841957!2d72.29955005258641!3d23.019996818380896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C+Gujarat!5e0!3m2!1sen!2sin!4v1493204785508" frameborder="0"  allowfullscreen=""></iframe>
                        </div>
                        <div>
                            <small className="profile-card-small">Social Profile</small>
                            <div className="profile-card-body-bottom-button">
                                <CircleButton 
                                    width={"40px"}
                                    height={"40px"}
                                    border={"1px solid #dee2e6"}
                                    backgroundColor={"#f8f9fa"}
                                    color={"#212529"}
                                    icon={faFacebookF}
                                    fontSize={"13px"}
                                    style={CircleButtonStyle}
                                />
                                <CircleButton 
                                    width={"40px"}
                                    height={"40px"}
                                    border={"1px solid #dee2e6"}
                                    backgroundColor={"#f8f9fa"}
                                    color={"#212529"}
                                    icon={faTwitter}
                                    fontSize={"13px"}
                                    style={CircleButtonStyle}
                                />
                                <CircleButton 
                                    width={"40px"}
                                    height={"40px"}
                                    border={"1px solid #dee2e6"}
                                    backgroundColor={"#f8f9fa"}
                                    color={"#212529"}
                                    icon={faYoutube}
                                    fontSize={"13px"}
                                    style={CircleButtonStyle}
                                />
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}
const CircleButtonStyle = {
    fontSize: "13px"
}

export default Profile;