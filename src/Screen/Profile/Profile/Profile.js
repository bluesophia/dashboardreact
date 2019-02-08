import React, { Component } from 'react';
import './Profile.css';
import SimpleLineIcon from 'react-simple-line-icons';
import ImgCircle from '../../../Components/Common/ImgCircle/ImgCircle'
import CardProfileHeader from '../../../Components/CardProfileHeader/CardProfileHeader'

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
                    <div className="profile-card-footer">
                    </div>
                </div>
            </div>  
        )
    }
}

export default Profile;