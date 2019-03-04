import React, { Component } from 'react'
import './CardProfileNavSettings.css'
import CardProfileNavProfileSkillset from '../CardProfileNavProfileSkillset/CardProfileNavProfileSkillset'
import { InputUsername, InputEmail, InputPassword, InputPhone } from '../Common/Input/InputExports';
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
class CardProfileNavSettings extends Component {
    render(){

        const { name, email, password, phone, Message } = this.props;

        return(
            <div className="profilenavsettings-card-body">
                    <div className="profilenavsettings-card">
                        <div className="profilenavsettings-card-footer-address">
                            
                            {/* profile detail */}
                            <div>
                            <h5 className="profilenavsettings-card-h3">Full Name</h5>
                            <InputUsername 
                                value={name}
                                borderBottom="1px solid var(--border-bottom-color)"
                                style={InputFontStyle}
                            />
                            </div>
                            <div>
                            <h5 className="profilenavsettings-card-h3">Email</h5>
                            <InputEmail 
                                value={email}
                                borderBottom="1px solid var(--border-bottom-color)"
                            />
                            </div>
                            <div>
                            <h5 className="profilenavsettings-card-h3">Password</h5>
                            <InputPassword 
                                value={password}
                                borderBottom="1px solid var(--border-bottom-color)"
                            />
                            </div>
                            <div>
                            <h5 className="profilenavsettings-card-h3">Phone</h5>
                            <InputPhone 
                                value={phone}
                                borderBottom="1px solid var(--border-bottom-color)"
                            />
                            </div>
                            <div>
                            <h5 className="profilenavsettings-card-h3">Message</h5>
                            <textarea className="profilenavsettings-form-control" value={Message}></textarea>
                            </div>
                            <div>
                            <h5 className="profilenavsettings-card-h3">Select Country</h5>
                            <div className="salestable-card-option">
                                <select className="salestable-form-control">
                                    <option>January</option>
                                    <option value="1">February</option>
                                    <option value="2">March</option>
                                    <option value="3">April</option>
                                </select>
                            </div>
                            {/* <p className="profilenavsettings-card-p">{location}</p> */}
                            </div>
                        </div>
                    <div>
                </div>
            </div>
        </div>
        )
    }
}

const InputFontStyle = {
    fontWeight: 100
}
export default CardProfileNavSettings;