import React, { Component } from 'react';
import './InputPassword.css';

class InputPassword extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
      const { value, onChange, onBlur, borderBottom} = this.props;
    return (
        <div className="inputPassword-container">
            <input 
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
            type="password"
            value={value}
            name="input-text"
            label="password"
            placeholder="Password"
            onChange={onChange}
            onBlur={onBlur}
            />
        </div>
    )
  }
}

export default InputPassword;
