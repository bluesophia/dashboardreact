import React, { Component } from 'react';
import './ProfileNav.css';
import CardProfileHeader from '../../../Components/CardProfileHeader/CardProfileHeader'
import CardProfileBottom from '../../../Components/CardProfileBottom/CardProfileBottom';

class ProfileNav extends Component {
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
                <CardProfileHeader 
                    id={this.state.id}
                    imgUrl={this.state.imgUrl}
                    name={this.state.name}
                    subtitle={this.state.subtitle}
                    follower={this.state.follower}
                    images={this.state.images}
                />
                <CardProfileBottom 
                    email={this.state.email}
                    phone={this.state.phone}
                    address={this.state.address}
                />
            </div>  
        )
    }
}


export default ProfileNav;