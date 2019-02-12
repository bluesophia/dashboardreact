import React, { Component } from 'react';
import './TimelineBubble.css';
import CardTimelineBubble from '../../../Components/CardTimelineBubble/CardTimelineBubble'
import { faBomb, faSave, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

class TimelineBubble extends Component {
    constructor(props){
        super(props);
        this.showTimelinePage = this.showTimelinePage.bind(this);
        this.showProfilePage = this.showProfilePage.bind(this);
        this.showSettingsPage = this.showSettingsPage.bind(this);
        this.state = {
            showTimeline: true,
            showProfile: false,
            showSettings: false
        }
    }
    showTimelinePage() {
        this.setState({
            showTimeline: true, 
            activeshowTimeline: true
        });
    }
    showProfilePage() {
        this.setState({
            showProfile: true,
            activeshowProfile: true
        });
    }
    showSettingsPage() {
        this.setState({
            showSettings: true, 
            activeshowSettings: true
        });
    }
    render(){
         const dataList = [
             {
                 id: 0,
                 name: 'Genelia',
                 imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg',
                 image1: '',
                 image2: '',
                 image3: '',
                 image4: '',
                 comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
                 updateWhere: 'Design weblayout',
                 Blockquote: '',
                 time: '5 minutes ago',
                 button: '',
                 backgroundColor: 'var(--green)',
                 icon: ''
             },
             {
                id: 1,
                name: 'Ritesh Deshmukh',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/2.jpg',
                image1: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/3.jpg',
                image2: '',
                image3: '',
                image4: '',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores odit qui est tempora eos, nostrum provident explicabo dignissimos debitis vel! Adipisci eius voluptates, ad aut recusandae minus eaque facere.',
                Blockquote: '',
                time: '5 minutes ago',
                button: 'Design Weblayout',
                backgroundColor: 'var(--yellow)',
                icon: ''
            },
            {
                id: 2,
                name: 'Lorem ipsum dolor',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/3.jpg',
                image1: '',
                image2: '',
                image3: '',
                image4: '',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam facilis enim eaque, tenetur nam id qui vel velit similique nihil iure molestias aliquam, voluptatem totam quaerat, magni commodi quisquam.',
                Blockquote: '',
                time: '5 minutes ago',
                button: '',
                backgroundColor: 'var(--green)',
                icon: ''
            },
            {
                id: 3,
                name: 'Lorem ipsum dolor',
                imgUrl: '',
                image1: '',
                image2: '',
                image3: '',
                image4: '',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates est quaerat asperiores sapiente, eligendi, nihil. Itaque quos, alias sapiente rerum quas odit! Aperiam officiis quidem delectus libero, omnis ut debitis!',
                Blockquote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
                time: '5 minutes ago',
                button: '',
                backgroundColor: 'var(--red)',
                icon: faBomb
            },
            {
                id: 4,
                name: 'Lorem ipsum dolor',
                imgUrl: '',
                image1: '',
                image2: '',
                image3: '',
                image4: '',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates est quaerat asperiores sapiente, eligendi, nihil. Itaque quos, alias sapiente rerum quas odit! Aperiam officiis quidem delectus libero, omnis ut debitis!',
                Blockquote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
                time: '5 minutes ago',
                button: '',
                backgroundColor: 'var(--blue)',
                icon: faSave
            },
            {
                id: 5,
                name: 'Lorem ipsum dolor',
                imgUrl: '',
                image1: '',
                image2: '',
                image3: '',
                image4: '',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates est quaerat asperiores sapiente, eligendi, nihil. Itaque quos, alias sapiente rerum quas odit! Aperiam officiis quidem delectus libero, omnis ut debitis!',
                Blockquote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
                time: '5 minutes ago',
                button: '',
                backgroundColor: 'var(--green)',
                icon: faGraduationCap
            },
         ]
        
         const timelinePage =(
            
            <div className="profile-nav-timeline-card">
                {
                    dataList.map((item, index) => (
                        <CardTimelineBubble 
                        key={index}
                        name={item.name}
                        updateWhere={item.updateWhere}
                        image1={item.image1}
                        image2={item.image2}
                        image3={item.image3}
                        image4={item.image4}
                        imgUrl={item.imgUrl}
                        comment={item.comment}
                        Blockquote={item.Blockquote}
                        time={item.time}
                        button={item.button}
                        backgroundColor={item.backgroundColor}
                        icon={item.icon}
                    />
                    ))
                }

            </div>
         )
         
        return(
            <div className="profile-nav col-lg-8 col-xlg-9 col-md-6">
                {this.state.showTimeline ? timelinePage : null }
            </div>
        )
    }
}


export default TimelineBubble;