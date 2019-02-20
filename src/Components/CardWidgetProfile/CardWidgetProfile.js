import React, { Component } from 'react';
import ImgCircle from '../Common/ImgCircle/ImgCircle';
import './CardWidgetProfile.css';

class CardWidgetProfile extends Component {
    render(){

        const { id, imgUrl, name, followers, following, tweets, backgroundSrc, backgroundColor } = this.props;

        return(
            <div className="widgetprofile-card-body">
                <img src={backgroundSrc} className="widgetprofile-card-body-img"/>
                <div className="widgetprofile-card-header" style={{backgroundColor: backgroundColor}}>
                    <ImgCircle key={id} src={imgUrl} width={"100px"}/>
                    <div className="widgetprofile-card-title">
                        <h3 className="widgetprofile-card-name">{name}</h3>
                    </div>
                </div>
                <div className="widgetprofile-card-details">
                        <div className="widgetprofile-card-details-list">
                           <h2>{followers}</h2>
                           <h6>followers</h6>
                       </div>
                       <div className="widgetprofile-card-details-list">
                           <h2>{following}</h2>
                           <h6>following</h6>
                       </div>
                       <div className="widgetprofile-card-details-list">
                           <h2>{tweets}</h2>
                           <h6>tweets</h6>
                       </div>
                </div>
            </div>
        )
    }
}

export default CardWidgetProfile;