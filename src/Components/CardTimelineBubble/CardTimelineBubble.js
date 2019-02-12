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

        const { name, imgUrl, image1, image2, image3, image4, 
            updateWhere, comment, time, button, Blockquote, backgroundColor, icon  } = this.props;
        
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
                <div class="timeline-panel">
                    <div class="timeline-heading">
                        <h4 class="timeline-title">{name}</h4>
                        <p>
                            <small class="text-muted">
                                <i class="fa fa-clock-o"></i>{time}</small>
                        </p>
                    </div>
                    <div class="timeline-body">
                        <p>{comment}</p>
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