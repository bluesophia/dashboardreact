import React, { Component } from 'react';
import './InputPassword.css';

class InputPassword extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputOnClick: false
    }
    this.inputOnClick=this.inputOnClick.bind(this);
  }
  inputOnClick(){
    this.setState({
      inputOnClick: true
    })
  }
  render() {
      const { value, onChange, onBlur, borderBottom } = this.props;
      const inputOnClick = this.state;
    return (
        <div className={ inputOnClick ? "input-form-control inputPassword-container" : "inputPassword-container"}>
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
                fontWeight: "400"
              }
            }
            type="password"
            value={value}
            name="input-text"
            label="password"
            placeholder="Password"
            onChange={onChange}
            onBlur={onBlur}
            onClick={this.inputOnClick}
            autocomplete="off"
            />
        </div>
    )
  }
}

export default InputPassword;
