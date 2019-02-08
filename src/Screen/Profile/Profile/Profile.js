import React, { Component } from 'react';
import './Profile.css';
import SimpleLineIcon from 'react-simple-line-icons';
import ImgCircle from '../../../Components/Common/ImgCircle/ImgCircle'

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
                    <div className="profile-card-header">
                        <ImgCircle key={this.state.id} src={this.state.imgUrl} width={"150px"}/>
                        <div className="profile-card-title">
                            <h4 className="profile-card-name">{this.state.name}</h4>
                            <h6 className="profile-card-subtitle">{this.state.subtitle}</h6>
                        </div>
                        <div className="profile-card-followers">
                            <a href="#" className="profile-card-followers-icon"><SimpleLineIcon name="people" style={SimpleLineIconStyle}/>{this.state.follower}</a>
                            <a href="#" className="profile-card-followers-icon"><SimpleLineIcon name="picture" style={SimpleLineIconStyle}/>{this.state.images}</a>
                        </div>
                    </div>
                    <div className="profile-card-footer">
                    </div>
                </div>
            </div>  
        )
    }
}

const SimpleLineIconStyle = {
    fontSize: "14px",
    marginTop: "4px",
    marginRight: "5px"
}
export default Profile;