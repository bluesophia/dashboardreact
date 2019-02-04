import React, { Component } from 'react';
import './CardInfobox.css';
import '../Assets/Styles/theme.css';
import SimpleLineIcon from 'react-simple-line-icons';

class CardInfobox extends Component {
    render () {
        return(
        <div className="wrapper">
        <div className="card-group">
            {/* card1 */}
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="contentBox">
                                <div>
                                    <h3>
                                        <SimpleLineIcon name="screen-desktop" style={SimpleLineIconStyle}/>
                                    </h3>
                                    <p className="ptextMuted">MYNEW CLIENTS</p>
                                </div>
                                <div className="counterBox">
                                    <h2 className="counter-orange">23</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="progress">
                                <div className="progress-bar-orange" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* card2 */}
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="contentBox">
                                <div>
                                    <h3>
                                    <SimpleLineIcon name="note" style={SimpleLineIconStyle}/>
                                    </h3>
                                    <p className="ptextMuted">NEW PROJECTS</p>
                                </div>
                                <div className="counterBox">
                                    <h2 className="counter-cyan">169</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="progress">
                                <div className="progress-bar-cyan" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           {/* card3 */}
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="contentBox">
                                <div>
                                    <h3>
                                        <SimpleLineIcon name="doc" style={SimpleLineIconStyle}/>
                                    </h3>
                                    <p className="ptextMuted">NEW INVOICES</p>
                                </div>
                                <div className="counterBox">
                                    <h2 className="counter-purple">157</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="progress">
                                <div className="progress-bar-purple" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* card4 */}  
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="contentBox">
                                <div>
                                    <h3>
                                        <i><SimpleLineIcon name="bag" style={SimpleLineIconStyle}/></i>
                                    </h3>
                                    <p className="ptextMuted">ALL PROJECTS</p>
                                </div>
                                <div className="counterBox">
                                    <h2 className="counter-green">431</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="progress">
                                <div className="progress-bar-green" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
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