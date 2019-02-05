import React, { Component } from 'react';
import './CardCommentbox.css';
import ImgCircle from '../Common/ImgCircle/ImgCircle';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class CardCommentbox extends Component {
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
        return(
            <div className="col-md-12">
            <Slider {...settings}>
                    <div className="commentBox-card-body">
                        <div>
                            <div>
                                <div className="carousel-item active">
                                    <h4>My Acting blown <span>Your Mind</span> and you <br />also <br />laugh at the moment</h4>
                                    <div>
                                        <span><ImgCircle src={"http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg"} width={"50px"}/></span>
                                        <span className="commentBox-textBox">
                                        <h4>Govinda</h4>
                                        <p>Actor</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="commentBox-card-body">
                        <div>
                            <div>
                                <div className="carousel-item active">
                                    <h4>My Acting blown <span>Your Mind</span> and <br /> you also <br />laugh at the moment</h4>
                                    <div>
                                    <span><ImgCircle src={"http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/2.jpg"} width={"50px"}/></span>
                                        <span className="commentBox-textBox">
                                        <h4>Govinda</h4>
                                        <p>Actor</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="commentBox-card-body">
                        <div>
                            <div>
                                <div className="carousel-item active">
                                    <h4>My Acting blown <span>Your Mind</span> and <br /> you also <br />laugh at the moment</h4>
                                    <div>
                                        <span><ImgCircle src={"http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/3.jpg"} width={"50px"}/></span>
                                        <span className="commentBox-textBox">
                                        <h4>Govinda</h4>
                                        <p>Actor</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Slider>
            </div>
        )
    }
}

export default CardCommentbox;