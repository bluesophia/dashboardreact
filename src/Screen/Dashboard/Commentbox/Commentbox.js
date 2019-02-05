import React, { Component } from 'react';
import './Commentbox.css';
import CardCommentbox from '../../../Components/CardCommentbox/CardCommentbox'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class Commentbox extends Component {
    render(){
        var settings = {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            swipeToSlide: true,
            className: "commentBox-card",
            adaptiveHeight: true,
          };

        const carouselList = [
            {
                id: 0,
                name: "Govinda",
                avatar: "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",
                job: "Actor",
                comment: 'My Acting blown Your Mind and you also laugh at the moment'
            },
            {
                id: 1,
                name: "Govinda",
                avatar: "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/2.jpg",
                job: "Actor",
                comment: 'My Acting blown <span>Your Mind</span> and you <br />also <br />laugh at the moment'
            },
            {
                id: 2,
                name: "Govinda",
                avatar: "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/3.jpg",
                job: "Actor",
                comment: "My Acting blown <span>Your Mind</span> and you <br />also <br />laugh at the moment"
            },
        ]
        return(
            <div className="col-md-12">
            <Slider {...settings}>
            {
                carouselList.map((item, index) => (
                    <CardCommentbox
                        key={carouselList.id}
                        name={item.name}
                        avatar={item.avatar}
                        job={item.job}
                        comment={item.comment}
                    />
                ))
            }
            </Slider>
            </div>
        )
    }
}

export default Commentbox;