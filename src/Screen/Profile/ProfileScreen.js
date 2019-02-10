import React, { Component } from 'react';
import { Profile, ProfileNav } from './ProfileExports.js';
import './profileScreen.css'

class ProfileScreen extends Component {
    render(){
        return(
            <div className="profileScreen-wrapper">
                <div><Profile /></div>
                <div><ProfileNav /></div>
            </div>
        )
    }
}

export default ProfileScreen;