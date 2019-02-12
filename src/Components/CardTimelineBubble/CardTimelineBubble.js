import React, { Component } from 'react';
import ImgTimelineBadge from '../Common/ImgTimelineBadge/ImgTimelineBadge';
import SimpleLineIcon from 'react-simple-line-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { RectangleButton } from '../Common/Button/ButtonExports';
import ImgTimelneBadgeColor from '../Common/ImgTimelneBadgeColor/ImgTimelneBadgeColor';
import './CardTimelineBubble.css';
    
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

        const { name, imgUrl, image1, image2, image3, image4, comment, time, backgroundColor, icon, className  } = this.props;
        
        return(
            <div>
            <li className="timeline-li">
                    { imgUrl ? 
                            <ImgTimelineBadge 
                                src={imgUrl} 
                                width={"50px"}
                                height={"50px"}
                                margin={"3px 0 0 0"}
                                backgroundColor={backgroundColor}
                            /> 
                            :
                            <ImgTimelneBadgeColor 
                                width={"50px"}
                                height={"50px"} 
                                icon={icon}
                                backgroundColor={backgroundColor}
                            />

                    }
                <div className={'timeline-panel ' + className}>
                    <div className="timeline-heading">
                        <h4 className="timeline-title">{name}</h4>
                        <p>
                            { time ? <small className="timeline-text-small">{time}</small> : null }
                        </p>
                    </div>
                    <div className="timeline-body">
                        { image1 ? <img className="timeline-img-responsive" src={image1} /> : null }
                        <p className="timeline-text-p" >{comment}</p>
                    </div>
                </div>
            </li>
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