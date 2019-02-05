import React, { Component } from 'react';
import './CardInfobox.css';
import '../../Assets/Styles/theme.css';
import SimpleLineIcon from 'react-simple-line-icons';

class CardInfobox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: {icon: null}
        }
    }
    render () {
        const { icon, title, counter, counterColor, className, ariaValuenow } = this.props;

        return(
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="contentBox">
                                <div>
                                    <h3>
                                        <SimpleLineIcon name={icon} style={SimpleLineIconStyle}/>
                                    </h3>
                                    <p className="ptextMuted">{title}</p>
                                </div>
                                <div className="counterBox">
                                    <h2 className={counterColor}>{counter}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="progress">
                                <div className={className} role="progressbar" aria-valuenow={ariaValuenow} aria-valuemin="0" aria-valuemax="100"></div>
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

export default CardInfobox;