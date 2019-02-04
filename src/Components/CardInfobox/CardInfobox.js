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
                                        <SimpleLineIcon name="screen-desktop" size="Large"/>
                                    </h3>
                                    <p className="ptextMuted">MYNEW CLIENTS</p>
                                </div>
                                <div className="counterBox">
                                    <h2 className="counter">23</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
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
                                    <SimpleLineIcon name="note" size="Large"/>
                                    </h3>
                                    <p className="ptextMuted">NEW PROJECTS</p>
                                </div>
                                <div className="counterBox">
                                    <h2 className="counter">169</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
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
                                        <SimpleLineIcon name="doc" size="Large"/>
                                    </h3>
                                    <p className="ptextMuted">NEW INVOICES</p>
                                </div>
                                <div className="counterBox">
                                    <h2 className="counter">157</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
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
                                        <SimpleLineIcon name="bag" size="Large"/>
                                    </h3>
                                    <p className="ptextMuted">ALL PROJECTS</p>
                                </div>
                                <div className="counterBox">
                                    <h2 className="counter">431</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
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

export default CardInfobox;