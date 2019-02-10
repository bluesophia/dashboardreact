import React, { Component } from 'react';
import { Profile, ProfileNav } from './ProfileExports.js';

class ProfileScreen extends Component {
    render(){
        return(
            <div>
                <Profile />
                <ProfileNav />
            </div>
        )
    }
}

export default ProfileScreen;