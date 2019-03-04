import React, { Component } from 'react';
import './InputConfirmPassword.css';

class InputConfirmPassword extends Component {
  render() {

    const { value, onChange, className, onBlur, borderBottom } = this.props;

    return (
        <div className="inputPassword-container">
            <input 
            className={className}
            style={{
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
            }}
            type="password"
            value={value}
            name="passwordconfirm"
            label="passwordconfirm"
            placeholder="Confirm Password"
            onChange={onChange}
            onBlur={onBlur}
            autocomplete="off"
            />
        </div>
    )
  }
}

export default InputConfirmPassword;
