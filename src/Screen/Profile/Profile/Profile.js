import React, { Component } from 'react';
import './Profile.css';
import CardProfileHeader from '../../../Components/CardProfileHeader/CardProfileHeader'
import CircleButton from '../../../Components/Common/CircleButton/CircleButton'
class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
            id: 1,
            imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/5.jpg',
            name: 'Hanna Gover',
            subtitle: 'Accounts Manager Amix corp',
            follower: 254,
            images: 54
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
                <div className="profile-card-body">
                    <div className="profile-card-footer">
                        <div className="profile-card-footer-address">
                            <small>Email address</small>
                            <h6>hannagover@gmail.com</h6>
                            <small>Phone</small>
                            <h6>+91 654 784 547</h6>
                            <small>Address</small>
                            <h6>71 Pilgrim Avenue Chevy Chase, MD 20815</h6>
                        </div>
                        <div>
                            <small>Social Profile</small>
                            <CircleButton 
                                width={"40px"}
                                height={"40px"}
                                backgroundColor={"#dee2e6"}
                                color={"#212529"}
                            />
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}

export default Profile;