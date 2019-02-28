import React, { Component } from 'react';
import './InputPassword.css';

class InputPassword extends Component {
  constructor(props){
    super(props);
    this.state = {value: ''};
    this.handleUserPasswordInput = this.handleUserPasswordInput.bind(this);
  }

  handleUserPasswordInput(e) {
    const password = e.target.password;
    const value = e.target.value;
    this.setState(
      {[password]: value},
      () => { this.validateField(password, value)}
      );
    // this.setState({value: event.target.value});
  }
  
  render() {
    return (
        <div className="inputPassword-container">
            <input 
            style={InputStyle}
            type="password"
            value={this.state.password}
            name="input-text"
            label="password"
            placeholder="Password"
            onChange={(e) => this.handleUserPasswordInput(e)}
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
export default InputPassword;
