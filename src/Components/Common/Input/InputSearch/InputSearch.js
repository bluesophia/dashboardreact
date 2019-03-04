import React, { Component } from 'react';
import './InputSearch.css';

class InputSearch extends Component {
  constructor(props){
    super(props);
    this.state = {value: ''};
    this.filterList = this.filterList.bind(this);
  }

  filterList(e) {
    let updateList = this.state.initialItems;
    // updateList = updateList.filter(function(item){
    //   return item.toLowerCase().search(
    //     e.target.value.toLowerCase()) ! == -1;
    // });
    this.setState({value: e.target.value});
  }
  getInitialState() {
    return{
      initialItems: [],
      items: []
    }
  }
  componentWillMount(){
    this.setState({items: this.state.initialItems})
  }
  
  render() {

    const { value } = this.state;

    return (
        <div className="inputsearch-container">
          <form>
            <fieldset className="inputsearch-form-group">
            <input
            style={InputStyle}
            value={value}
            type="text"
            name="search"
            label="search"
            onChange={this.filterList}
            placeholder="Type to search..."
            autoComplete="off"
            required
            />
            </fieldset>
          </form>
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
