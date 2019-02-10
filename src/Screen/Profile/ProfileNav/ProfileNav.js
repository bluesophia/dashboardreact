import React, { Component } from 'react';
import './ProfileNav.css';
import CardProfileNavTimeline from '../../../Components/CardProfileNavTimeline/CardProfileNavTimeline'

class ProfileNav extends Component {
    render(){
         const dataList = [
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
        return(
            <div className="profile-nav col-lg-8 col-xlg-9 col-md-6">
                <div className="profile-nav-card">
                    <ul className="profile-nav-tabs" role="tablist">
                            <li className="profile-nav-item"> <a className="profile-nav-link active" data-toggle="tab" href="#home" role="tab">Timeline</a> </li>
                            <li className="profile-nav-item"> <a className="profile-nav-link" data-toggle="tab" href="#profile" role="tab">Profile</a> </li>
                            <li className="profile-nav-item"> <a className="profile-nav-link" data-toggle="tab" href="#settings" role="tab">Settings</a> </li>
                    </ul>
                </div>
                <div className="profile-nav-timeline-card">
                    {
                        dataList.map((item, index) => (
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
            </div>
        )
    }
}


export default ProfileNav;