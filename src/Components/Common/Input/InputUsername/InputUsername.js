import React, { Component } from 'react';
import './InputUsername.css';

class InputUsername extends Component {
  constructor(props){
    super(props);
  }

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
              fontWeight: "500"
            }}
            value={value}
            type="text"
            name="username"
            label="username"
            onChange={onChange}
            onBlur={onBlur}
            placeholder="Username"
            required
            autocomplete="off"
            />
        </div>
    )
  }
}

export default InputUsername;
