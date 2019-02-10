import React, { Component } from 'react';
import './CardProfileNavTimeline.css';
import ImgCircle from '../Common/ImgCircle/ImgCircle';
import Badge from '../Common/Badge/Badge'
import SimpleLineIcon from 'react-simple-line-icons';

class CardProfileNavTimeline extends Component {
    render(){

        const { name, imgUrl, image1, image2, image3, image4, comment, commentNumber, like, time  } = this.props;
        
        return(
            <div className="profile-timeline-row">
                <div className="profile-timeline">
                <div className="profile-timeline-left-image">
                    <span> 
                        <ImgCircle src={imgUrl} width={"40px"}/>
                    </span>
                </div>
                <div className="profile-timeline-text">
                    <a href="">{name}</a>
                    <span className="profile-timeline-date">{time}</span>
                    <p>{comment}</p>
                    <div className="profile-timeline-image-row">
                        <div className="profile-timeline-img-div col-lg-3 col-md-6"><img className="profile-timeline-img" src={image1}/></div>
                        <div className="profile-timeline-img-div col-lg-3 col-md-6"><img className="profile-timeline-img" src={image2}/></div>
                        <div className="profile-timeline-img-div col-lg-3 col-md-6"><img className="profile-timeline-img" src={image3}/></div>
                        <div className="profile-timeline-img-div col-lg-3 col-md-6"><img className="profile-timeline-img" src={image4}/></div>
                    </div>
                    <div className="profile-timeline-footer">
                        <span className="profile-timeline-action-icons">
                            <p>{commentNumber}</p>
                            <p>{like}</p>
                            <a href="#"><SimpleLineIcon name="heart" style={SimpleLineIconStyle} /></a>    
                        </span>
                    </div>
                </div>
                </div>
            </div>
        )
    }
};
// SimpleLineIconStyle
const SimpleLineIconStyle = {
    fontSize: '14px'
}
export default CardProfileNavTimeline;