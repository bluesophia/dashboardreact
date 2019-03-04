import React, { Component } from 'react';
import './ProfileNav.css';
import CardProfileNavTimeline from '../../../Components/CardProfileNavTimeline/CardProfileNavTimeline'
import CardProfileNavProfile from '../../../Components/CardProfileNavProfile/CardProfileNavProfile'
import CardProfileNavSettings from '../../../Components/CardProfileNavSettings/CardProfileNavSettings'

const timelineDataList = [
    {
        id: 0,
        name: 'John Doe',
        imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg',
        image1: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/big/img1.jpg',
        image2: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/big/img2.jpg',
        image3: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/big/img3.jpg',
        image4: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/big/img4.jpg',
        update: 'assign a new task',
        updateWhere: 'Design weblayout',
        Blockquote: '',
        commentNumber: '2',
        like: '5',
        time: '5 minutes ago',
        button: ''
    },
    {
       id: 1,
       name: 'John Doe',
       imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/2.jpg',
       image1: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/big/img1.jpg',
       image2: '',
       image3: '',
       image4: '',
       comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
       Blockquote: '',
       commentNumber: '2',
       like: '5',
       time: '5 minutes ago',
       button: 'Design Weblayout'
   },
   {
       id: 2,
       name: 'John Doe',
       imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/3.jpg',
       image1: '',
       image2: '',
       image3: '',
       image4: '',
       comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper',
       Blockquote: '',
       commentNumber: '2',
       like: '5',
       time: '5 minutes ago',
       button: ''
   },
   {
       id: 3,
       name: 'John Doe',
       imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg',
       image1: '',
       image2: '',
       image3: '',
       image4: '',
       comment: '',
       Blockquote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
       commentNumber: '',
       like: '',
       time: '5 minutes ago',
       button: ''
   }
]

const profileDataList ={
       id: 0,
       name: 'Johnathan Deo',
       mobile: '(123) 456 7890',
       email: 'johnathan@admin.com',
       location: 'London',
       detail: `Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
       It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
       `
}

const SettingsDataList ={
    id: 0,
    name: 'Johnathan Deo',
    email: 'johnathan@admin.com',
    password: '11111111',
    phone: '(123) 456 7890',
    Message: ''
}


class ProfileNav extends Component {
    constructor(props){
        super(props);
        this.showTimelinePage = this.showTimelinePage.bind(this);
        this.showProfilePage = this.showProfilePage.bind(this);
        this.showSettingsPage = this.showSettingsPage.bind(this);
        this.state = {
            showTimeline: true,
            showProfile: false,
            showSettings: false,
            activeshowTimeline: true,
            activeshowProfile: false,
            activeshowSettings: false
        }
    }
    showTimelinePage() {
        this.setState({
            showTimeline: true, 
            showSettings: false,
            showProfile: false,
            activeshowTimeline: true,
            activeshowProfile: false,
            activeshowSettings: false
        });
    }
    showProfilePage() {
        this.setState({
            showTimeline: false,
            showSettings: false,
            showProfile: true,
            activeshowProfile: true,
            activeshowTimeline: false,
            activeshowSettings: false
        });
    }
    showSettingsPage() {
        this.setState({
            showSettings: true, 
            showTimeline: false,
            showProfile: false,
            activeshowSettings: true,
            activeshowProfile: false,
            activeshowTimeline: false,
        });
    }
    render(){
         
        const timelinePage =(
            
            <div className="profile-nav-timeline-card">
                {
                    timelineDataList.map((item, index) => (
                        <CardProfileNavTimeline 
                        key={item.id}
                        name={item.name}
                        update={item.update}
                        updateWhere={item.updateWhere}
                        image1={item.image1}
                        image2={item.image2}
                        image3={item.image3}
                        image4={item.image4}
                        imgUrl={item.imgUrl}
                        comment={item.comment}
                        Blockquote={item.Blockquote}
                        commentNumber={item.commentNumber}
                        like={item.like}
                        time={item.time}
                        button={item.button}
                    />
                    ))
                }
            </div>
         )
         const profilePage = (
            <div className="profile-nav-timeline-card">
                <CardProfileNavProfile 
                    name={profileDataList.name}
                    mobile={profileDataList.mobile}
                    email={profileDataList.email}
                    location={profileDataList.location}
                    detail={profileDataList.detail}
                />
            </div>
         )
         const settingsPage = (
            <div className="profile-nav-timeline-card">
                <CardProfileNavSettings
                    name={SettingsDataList.name}
                    phone={SettingsDataList.phone}
                    password={SettingsDataList.password}
                    email={SettingsDataList.email}
                    Message={SettingsDataList.Message}
                    detail={SettingsDataList.detail}
                />
            </div>
        )
        
        const { showTimeline, showProfile, showSettings, activeshowTimeline, activeshowProfile, activeshowSettings } = this.state;

        return(
            <div className="profile-nav">
                <div className="profile-nav-card">
                    <ul className="profile-nav-tabs" role="tablist">
                            <li className="profile-nav-item">
                                <a className={ 
                                    activeshowTimeline ? "profile-nav-link active" : "profile-nav-link" 
                                    } 
                                    data-toggle="tab" 
                                    href="#home" 
                                    role="tab" 
                                    onClick={this.showTimelinePage}
                                >
                                Timeline
                                </a>
                            </li>
                            <li className="profile-nav-item">
                                <a className={ 
                                    activeshowProfile ? "profile-nav-link active" : "profile-nav-link" 
                                    } 
                                    data-toggle="tab" 
                                    href="#profile" 
                                    role="tab" 
                                    onClick={this.showProfilePage}
                                >
                                Profile
                                </a>
                            </li>
                            <li className="profile-nav-item">
                                <a className={ 
                                    activeshowSettings ? "profile-nav-link active" : "profile-nav-link" 
                                    } 
                                    data-toggle="tab" 
                                    href="#settings" 
                                    role="tab" 
                                    onClick={this.showSettingsPage}
                                >
                                Settings
                                </a>
                            </li>
                    </ul>
                </div>
                { showTimeline ? timelinePage : null }
                { showProfile ? profilePage : null  }
                { showSettings ? settingsPage : null }
            </div>
        )
    }
}


export default ProfileNav;