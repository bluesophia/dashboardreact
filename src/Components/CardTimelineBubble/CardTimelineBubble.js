import React, { Component } from 'react';
import ImgTimelineBadge from '../Common/ImgTimelineBadge/ImgTimelineBadge';
import SimpleLineIcon from 'react-simple-line-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { RectangleButton } from '../Common/Button/ButtonExports';
import ImgColorCircle from '../Common/ImgColorCircle/ImgColorCircle';

class CardTimelineBubble extends Component {
    static defaultProps=[
        {
            id: 0,
            name: 'John Doe',
            imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg',
            image1: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/big/img1.jpg',
            image2: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/big/img2.jpg',
            image3: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/big/img3.jpg',
            image4: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/big/img4.jpg',
            updateWhere: 'Design weblayout',
            Blockquote: '',
            time: '5 minutes ago',
            button: ''
        },
    ]
    render(){

        const { name, imgUrl, image1, image2, image3, image4, 
            updateWhere, comment, time, button, Blockquote, backgroundColor, icon  } = this.props;
        
        return(
            <div className="profile-timeline-row">
                <div className="profile-timeline">
                <div className="profile-timeline-left-image">
                    <span> 
                        { imgUrl ? 
                        <ImgTimelineBadge 
                            src={imgUrl} 
                            width={"50px"}
                            height={"50px"}
                            margin={"3px 0 0 0"}
                            backgroundColor={backgroundColor}
                        /> 
                        :
                        <ImgColorCircle 
                        width={"50px"}
                        height={"50px"} 
                        icon={icon}
                        backgroundColor={backgroundColor}
                        />

                        }
                    </span>
                </div>
                <div className="profile-timeline-text">
                    <div>
                        <h4 className="profile-timeline-text-h4">{name}</h4>
                        <span className="profile-timeline-date">{time}</span>
                    </div>
                    <div className="profile-timeline-contents">
                        <div className="profile-timeline-image-row">
                            { image1 ? <div className="profile-timeline-img-div col-lg-3 col-md-6"><img className="profile-timeline-img" src={image1}/></div> : null }
                            { image2 ? <div className="profile-timeline-img-div col-lg-3 col-md-6"><img className="profile-timeline-img" src={image2}/></div> : null }
                            { image3 ? <div className="profile-timeline-img-div col-lg-3 col-md-6"><img className="profile-timeline-img" src={image3}/></div> : null }
                            { image4 ? <div className="profile-timeline-img-div col-lg-3 col-md-6"><img className="profile-timeline-img" src={image4}/></div> : null }
                            { comment ? <p className="profile-timeline-text-comment">{comment}<a href="#" className="profile-timeline-updateWhere">  {updateWhere}</a></p> : null }
                            <div className="profile-timeline-comments-right">
                            { button ? <RectangleButton marginBottom={"20px"}/> : null }
                            </div>
                        </div>
                        <div className="profile-timeline-comment-div col-lg-3 col-md-6">
                            
                            { Blockquote ? <p className="profile-timeline-blockquote">{Blockquote}</p> : null }
                            
                        </div>
                    </div>
                </div>
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
export default CardTimelineBubble;