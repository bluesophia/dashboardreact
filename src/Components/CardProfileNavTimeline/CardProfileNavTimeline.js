import React, { Component } from 'react';
import './CardProfileNavTimeline.css';
import ImgCircle from '../Common/ImgCircle/ImgCircle';
import SimpleLineIcon from 'react-simple-line-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class CardProfileNavTimeline extends Component {
    render(){

        const { name, imgUrl, image1, image2, image3, image4, update, updateWhere, comment, commentNumber, like, time  } = this.props;
        
        return(
            <div className="profile-timeline-row">
                <div className="profile-timeline">
                <div className="profile-timeline-left-image">
                    <span> 
                        <ImgCircle src={imgUrl} width={"40px"}/>
                    </span>
                </div>
                <div className="profile-timeline-text">
                    <a href="#">{name}</a>
                    <span className="profile-timeline-date">{time}</span>
                    <p>{update}<a href="#" className="profile-timeline-updateWhere">  {updateWhere}</a></p>
                    <div className="profile-timeline-image-row">
                        { image1 ? <div className="profile-timeline-img-div col-lg-3 col-md-6"><img className="profile-timeline-img" src={image1}/></div> : null }
                        { image2 ? <div className="profile-timeline-img-div col-lg-3 col-md-6"><img className="profile-timeline-img" src={image2}/></div> : null }
                        { image3 ? <div className="profile-timeline-img-div col-lg-3 col-md-6"><img className="profile-timeline-img" src={image3}/></div> : null }
                        { image4 ? <div className="profile-timeline-img-div col-lg-3 col-md-6"><img className="profile-timeline-img" src={image4}/></div> : null }
                    </div>
                    <div className="profile-timeline-comment-div col-lg-3 col-md-6">
                        <p>{comment}</p>
                    </div>
                    <div className="profile-timeline-footer">
                        <span className="profile-timeline-action-icons">
                            <a herf="#"><p>{commentNumber} comment</p></a>
                            <a href="#" className="profile-timeline-footer-icon">
                                <FontAwesomeIcon icon={faHeart} style={FontAwesomeIconStyle}/>
                                <p>{like} love</p>
                            </a> 
                        </span>
                    </div>
                   
                </div>
                <hr className="profile-timeline-hr"/>
                </div>
            </div>
        )
    }
};
// SimpleLineIconStyle
const FontAwesomeIconStyle = {
    fontSize: '14px',
    color: '#e46a76',
}
export default CardProfileNavTimeline;