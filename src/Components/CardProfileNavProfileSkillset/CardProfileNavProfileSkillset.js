import React, { Component } from 'react';
import './CardProfileNavProfileSkillset.css';
import '../../Assets/Styles/theme.css';
import SimpleLineIcon from 'react-simple-line-icons';

class CardProfileNavProfileSkillset extends Component {

    render () {

        const { title, percent, className, ariaValuenow } = this.props;

        return(
            <div className="skillset-card">
                <div className="skillset-body">
                    <div className="skillset-row">
                        <div className="col-md-12">
                            <div className="skillset-contentBox">
                                <p className="skillset-contentBox-title">{title}</p>
                                <p className="skillset-contentBox-title">{percent}%</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="skillset-progress">
                                <div className={className} style={{width: percent+'%'}}role="progressbar" aria-valuenow={ariaValuenow} aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

// SimpleLineIconStyle
const SimpleLineIconStyle = {
    fontSize: '24px'
}

export default CardProfileNavProfileSkillset;