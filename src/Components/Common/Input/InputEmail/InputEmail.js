import React, { Component } from 'react';
import './InputEmail.css';

class InputEmail extends Component {
  constructor(props){
    super(props);
    // this.state = {value: ''};
  }
  render() {
    const { value, onChange, className, onBlur, borderBottom } = this.props;
    return (
        <div className="inputPassword-container">
            <input
            className={className}
            style={
              {
                boxSizing: "border-box",
                width: "100%",
                height: "30px",
                background: "none",
                borderRadius: 0,
                border: 0,
                borderBottom: borderBottom,
                color: "#6c757d",
                padding: "0.5em",
                marginTop: "10px",
                fontWeight: "500"
              }
            }
            value={value}
            type="text"
            name="email"
            label="Email"
            onChange={onChange}
            onBlur={onBlur}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            placeholder="Email"
            autocomplete="off"
            required
            />
        </div>
    )
  }
}

export default InputEmail;
