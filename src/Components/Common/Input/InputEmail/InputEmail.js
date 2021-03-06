import React, { Component } from 'react';
import './InputEmail.css';

class InputEmail extends Component {
  render() {
    const { value, onChange, className, onBlur, borderBottom } = this.props;
    return (
        <div className="inputemail-container">
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
                fontWeight: "400"
              }
            }
            value={value}
            type="text"
            name="email"
            label="email"
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
