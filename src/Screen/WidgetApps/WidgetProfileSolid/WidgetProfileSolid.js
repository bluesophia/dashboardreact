import React, { Component } from 'react';
import './WidgetProfileSolid.css';
import CardWidgetProfile from '../../../Components/CardWidgetProfile/CardWidgetProfile'
import Plus from '../../../Assets/Images/plus.svg';

class WidgetProfileSolid extends Component {
    constructor(props){
        super(props);
        
        this.state={
            id: 0,
            imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg',
            backgroundSrc: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/big/img1.jpg',
            name: 'John Doe',
            followers: "12k",
            following: "420",
            tweets: "128",
            email: 'hannagover@gmail.com',
            phone: '+91 654 784 547',
            address: '71 Pilgrim Avenue Chevy Chase, MD 20815',
            backgroundColor: 'var(--blue)'
        }
    }
    render(){
        return(
            <div className="widgetprofile-card">
                <CardWidgetProfile 
                    id={this.state.id}
                    imgUrl={this.state.imgUrl}
                    iconsrc={Plus}
                    name={this.state.name}
                    subtitle={this.state.subtitle}
                    followers={this.state.followers}
                    following={this.state.following}
                    tweets={this.state.tweets}
                    backgroundColor={this.state.backgroundColor}
                    backgroundSrc={this.state.backgroundSrc}
                />
            </div>  
        )
    }
}


export default WidgetProfileSolid;