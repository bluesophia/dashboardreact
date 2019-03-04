import React, { Component } from 'react';
import './InputSearch.css';

class InputSearch extends Component {
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
        <div className="inputsearch-container">
            <input
            style={InputStyle}
            value={this.state.value}
            name="search"
            label="search"
            onChange={this._handleChange}
            placeholder="Type to search..."
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
    borderRadius: '4px',
    border: "1px solid #e9ecef",
    color: "#6c757d",
    padding: "1.25em 1em",
    marginTop: "10px",
    fontWeight: "400"
  }

export default InputSearch;
