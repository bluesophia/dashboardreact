import React, { Component } from 'react';
import './WidgetProfileDetail.css';
import CardWidgetProfileDetailHeader from '../../../Components/CardWidgetProfileDetailHeader/CardWidgetProfileDetailHeader'
import CardProfileBottom from '../../../Components/CardProfileBottom/CardProfileBottom';
import Plus from '../../../Assets/Images/plus.svg';

class WidgetProfileDetail extends Component {
    constructor(props){
        super(props);
        
        this.state={
            id: 1,
            imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg',
            name: 'Daniel Kristeen',
            subtitle: 'UIUX Designer',
            photos: 14,
            videos: 54,
            tasks: 145,
            email: 'hannagover@gmail.com',
            phone: '+91 654 784 547',
            address: '71 Pilgrim Avenue Chevy Chase, MD 20815'
        }
    }
    render(){
        return(
            <div className="widgetprofile-card">
                <CardWidgetProfileDetailHeader 
                    id={this.state.id}
                    imgUrl={this.state.imgUrl}
                    iconsrc={Plus}
                    name={this.state.name}
                    subtitle={this.state.subtitle}
                    photos={this.state.photos}
                    videos={this.state.videos}
                    tasks={this.state.tasks}
                />
                <CardProfileBottom 
                    email={this.state.email}
                    phone={this.state.phone}
                    address={this.state.address}
                />
            </div>  
        )
    }
}


export default WidgetProfileDetail;