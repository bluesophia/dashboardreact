import React, { Component } from 'react';
import './ProfileNav.css';

class ProfileNav extends Component {
    render(){
        return(
            <div className="col-lg-8 col-xlg-9 col-md-7">
                <div className="profile-nav-card">
                    <ul className="profile-nav-tabs" role="tablist">
                            <li className="profile-nav-item"> <a className="profile-nav-link active" data-toggle="tab" href="#home" role="tab">Timeline</a> </li>
                            <li className="profile-nav-item"> <a className="profile-nav-link" data-toggle="tab" href="#profile" role="tab">Profile</a> </li>
                            <li className="profile-nav-item"> <a className="profile-nav-link" data-toggle="tab" href="#settings" role="tab">Settings</a> </li>
                    </ul>
                </div>
            </div>
        )
    }
}


export default ProfileNav;