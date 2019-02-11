import React, { Component } from 'react';
import './CardProfileNavTimeline.css';
import ImgCircle from '../Common/ImgCircle/ImgCircle';
import SimpleLineIcon from 'react-simple-line-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import RectangleButton from '../Common/RectangleButton/RectangleButton';

class CardProfileNavTimeline extends Component {
    render(){

        const { name, imgUrl, image1, image2, image3, image4, update, updateWhere, comment, commentNumber, like, time, button, Blockquote  } = this.props;
        
        return(
            <div className="profile-timeline-row">
                <div className="profile-timeline">
                <div className="profile-timeline-left-image">
                    <span> 
                        <ImgCircle src={imgUrl} width={"40px"}/>
                    </span>
                </div>
                <div className="profile-timeline-text">
                    <div>
                        <a href="#">{name}</a>
                        <span className="profile-timeline-date">{time}</span>
                        { update ? <p className="profile-timeline-text-update">{update}<a href="#" className="profile-timeline-updateWhere">  {updateWhere}</a></p> : null }
                    </div>
                    <div className="profile-timeline-contents">
                        <div className="profile-timeline-image-row">
                            { image1 ? <div className="profile-timeline-img-div col-lg-3 col-md-6"><img className="profile-timeline-img" src={image1}/></div> : null }
                            { image2 ? <div className="profile-timeline-img-div col-lg-3 col-md-6"><img className="profile-timeline-img" src={image2}/></div> : null }
                            { image3 ? <div className="profile-timeline-img-div col-lg-3 col-md-6"><img className="profile-timeline-img" src={image3}/></div> : null }
                            { image4 ? <div className="profile-timeline-img-div col-lg-3 col-md-6"><img className="profile-timeline-img" src={image4}/></div> : null }
                            <div className="profile-timeline-comments-right">
                            { comment ? <p className="profile-timeline-comment">{comment}</p> : null }
                            { button ? <RectangleButton marginBottom={"20px"}/> : null }
                            </div>
                        </div>
                        <div className="profile-timeline-comment-div col-lg-3 col-md-6">
                            
                            { Blockquote ? <p className="profile-timeline-blockquote">{Blockquote}</p> : null }
                            
                        </div>
                    </div>
                    <div className="profile-timeline-footer">
                        <span className="profile-timeline-action-icons">
                            { commentNumber ? <a herf="#"><p>{commentNumber} comment</p></a> : null }
                            { like ? 
                                <a href="#" className="profile-timeline-footer-icon">
                                    <FontAwesomeIcon icon={faHeart} style={FontAwesomeIconStyle}/>
                                    <p>{like} love</p> 
                                </a> 
                            : null }
                        </span>
                    </div>
                </div>
                    <hr className="profile-timeline-hr"/>
                </div>
            </div>
        )
    }
};
// FontAwesomeIconStyle
const FontAwesomeIconStyle = {
    fontSize: '14px',
    color: '#e46a76',
}
export default CardProfileNavTimeline;