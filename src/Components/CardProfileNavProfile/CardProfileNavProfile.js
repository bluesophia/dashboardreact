import React, { Component } from 'react'
import './CardProfileNavProfile.css'
import CardProfileNavProfileSkillset from '../CardProfileNavProfileSkillset/CardProfileNavProfileSkillset'
const skillsetList = [
    {
        id: 0,
        title:'Wordpress',
        percent:'80',
        className:'progress-bar-green',
        ariaValuenow:'80'
    },
    {
        id: 1,
        title:'HTML',
        percent:'90',
        className:'progress-bar-blue',
        ariaValuenow:'90'
    },
    {
        id: 2,
        title:'jQuery',
        percent:'50',
        className:'progress-bar-red',
        ariaValuenow:'50'
    },
    {
        id: 3,
        title:'Photoshop',
        percent:'70',
        className:'progress-bar-yellow',
        ariaValuenow:'70'
    }
]
class CardProfileNavProfile extends Component {
    render(){

        const { email, mobile, name, location, detail } = this.props;

        return(
            <div className="profilenavprofile-card-body">
                    <div className="profilenavprofile-card">
                        <div className="profilenavprofile-card-footer-address">
                            
                            {/* profile detail */}
                            <div>
                            <h5 className="profilenavprofile-card-h3">Full Name</h5>
                            <p className="profilenavprofile-card-p">{name}</p>
                            </div>
                            <div>
                            <h5 className="profilenavprofile-card-h3">Mobile</h5>
                            <p className="profilenavprofile-card-p">{mobile}</p>
                            </div>
                            <div>
                            <h5 className="profilenavprofile-card-h3">Email</h5>
                            <p className="profilenavprofile-card-p">{email}</p>
                            </div>
                            <div>
                            <h5 className="profilenavprofile-card-h3">Location</h5>
                            <p className="profilenavprofile-card-p">{location}</p>
                            </div>
                            <hr className="profilenavprofile-hr"/>
                            <p className="profilenavprofile-card-detail">{detail}</p>
                            <div className="profilenavprofile-card-skillset">
                            <h4 className="profilenavprofile-card-skillset-h4">Skill Set</h4>
                            <hr className="profilenavprofile-hr2"/>
                            {/* skillset map */}
                            {
                                skillsetList.map((item, index) => (
                                    <CardProfileNavProfileSkillset 
                                        title={item.title}
                                        percent={item.percent}
                                        className={item.className}
                                        ariaValuenow={item.ariaValuenow}
                                    />
                                ))
                            }
                            </div>
                        </div>
                    <div>
                </div>
            </div>
        </div>
        )
    }
}
const CircleButtonStyle = {
    fontSize: "13px"
}

export default CardProfileNavProfile;