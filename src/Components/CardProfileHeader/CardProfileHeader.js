import React, { Component } from 'react'
import ImgCircle from '../Common/ImgCircle/ImgCircle'
import './CardProfileHeader.css'
import SimpleLineIcon from 'react-simple-line-icons';

class CardProfileHeader extends Component {
    render(){

        const { id, imgUrl, name, subtitle, follower, images } = this.props;

        return(
                <div className="profile-card-header">
                    <ImgCircle key={id} src={imgUrl} width={"150px"}/>
                    <div className="profile-card-title">
                        <h4 className="profile-card-name">{name}</h4>
                        <h6 className="profile-card-subtitle">{subtitle}</h6>
                    </div>
                    <div className="profile-card-followers">
                        <a href="#" className="profile-card-followers-icon"><SimpleLineIcon name="people" style={SimpleLineIconStyle}/>{follower}</a>
                        <a href="#" className="profile-card-followers-icon"><SimpleLineIcon name="picture" style={SimpleLineIconStyle}/>{images}</a>
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
export default CardProfileHeader;