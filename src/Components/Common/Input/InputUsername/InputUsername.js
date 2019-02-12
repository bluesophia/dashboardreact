import React, { Component } from 'react';
import './InputUsername.css';

class InputUsername extends Component {
  constructor(props){
    super(props);
    this.state = {value: ''};
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  render() {
    return (
        <div className="inputPassword-container">
            <input
            style={InputStyle}
            value={this.state.value}
            name="username"
            label="username"
            onChange={this._handleChange}
            placeholder="Username"
            required
            />
        </div>
    )
  }
}

const InputStyle = {
    boxSizing: "border-box",
    width: "100%",
    height: "30px",
    background: "none",
    borderRadius: 0,
    border: 0,
    borderBottom: "1px solid #e9ecef",
    color: "#6c757d",
    padding: "0.5em",
    marginTop: "10px",
    fontWeight: "500"
  }

export default InputUsername;