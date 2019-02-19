import React, { Component } from 'react'
import ImgCircle from '../Common/ImgCircle/ImgCircle'
import './CardWidgetProfileDetailHeader.css'
import SimpleLineIcon from 'react-simple-line-icons';
import { RectangleButton } from '../Common/Button/ButtonExports';

class CardWidgetProfileDetailHeader extends Component {
    render(){

        const { id, imgUrl, name, subtitle, photos, videos, tasks, iconsrc } = this.props;

        return(
            <div className="widgetprofiledetail-card-body">
                <div className="widgetprofiledetail-card-header">
                    <ImgCircle key={id} src={imgUrl} width={"100px"}/>
                    <div className="widgetprofiledetail-card-title">
                        <h3 className="widgetprofiledetail-card-name">{name}</h3>
                        <h6 className="widgetprofiledetail-card-subtitle">{subtitle}</h6>
                        <RectangleButton 
                            iconsrc={iconsrc}
                            value={"Follow"}
                        />
                    </div>
                </div>
                <div className="widgetprofiledetail-card-details">
                        <div className="widgetprofiledetail-card-details-list">
                           <h2>{photos}</h2>
                           <h6>Photos</h6>
                       </div>
                       <div className="widgetprofiledetail-card-details-list">
                           <h2>{videos}</h2>
                           <h6>Videos</h6>
                       </div>
                       <div className="widgetprofiledetail-card-details-list">
                           <h2>{tasks}</h2>
                           <h6>Tasks</h6>
                       </div>
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
export default CardWidgetProfileDetailHeader;