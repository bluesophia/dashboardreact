import React, { Component } from 'react';
import './InputPhone.css';

class InputPhone extends Component {
  render() {
    const { value, onChange, className, onBlur, borderBottom } = this.props;
    return (
        <div className="inputphone-container">
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
            name="phone"
            label="phone"
            onChange={onChange}
            onBlur={onBlur}
            placeholder="phone"
            autoComplete="off"
            />
        </div>
    )
  }
}

export default InputPhone;
