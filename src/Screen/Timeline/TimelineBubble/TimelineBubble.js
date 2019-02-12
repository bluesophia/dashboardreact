import React, { Component } from 'react';
import './TimelineBubble.css';
import CardTimelineBubble from '../../../Components/CardTimelineBubble/CardTimelineBubble'
import { faBomb, faSave, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

class TimelineBubble extends Component {
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
                 comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero laboriosam dolor perspiciatis omnis exercitationem. Beatae, officia pariatur? Est cum veniam excepturi. Maiores praesentium, porro voluptas suscipit facere rem dicta, debitis.',
                 updateWhere: 'Design weblayout',
                 Blockquote: '',
                 time: '11 hours ago via Twitter',
                 button: '',
                 backgroundColor: 'var(--green)',
                 icon: '',
                 className: 'even'
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
                icon: '',
                className: 'odd'
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
                icon: '',
                className: 'even'
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
                icon: faBomb,
                className: 'odd'
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
                icon: faSave,
                className: 'even'
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
                icon: faGraduationCap,
                className: 'odd'
            },
         ]
         
        return(
        <div className="timeline-card-wrapper">
            <div className="timeline-card">
                <div className="timeline-card-body">
                    <ul className="timeline-card-ul">
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
                            className={item.className}
                        />
                        ))
                    }
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}

export default TimelineBubble;