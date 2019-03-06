import React, { Component } from 'react';
import './TreeviewSearchableTreeInput.css';
import { InputSearch } from '../../../Components/Common/Input/InputExports'
import { RectangleButton } from '../../../Components/Common/Button/ButtonExports'
class TreeviewSearchableTreeInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            results: '',
            exactMatch : false
        }

    }

    render(){
        const { onClick, value, onChange } = this.props;
        return(
            <div className="treeviewsearchableinput-card-body-content">
                <h2 className="treeviewsearchableinput-card-title-name">Input</h2>
                {/* input search */}
                <div className="inputsearch-container">
                    <form>
                        <fieldset className="inputsearch-form-group">
                        <input
                        style={InputStyle}
                        value={value} 
                        type="text"
                        name="search"
                        label="search"
                        onChange={onChange}
                        placeholder="Type to search..."
                        autoComplete="off"
                        required
                        />
                        </fieldset>
                    </form>
                </div>
                {/* search options */}
                <div className="treeviewsearchableinput-card-body-content-input">
                    <div className="treeviewsearchableinput-card-body-content-input-div">
                        <input type="checkbox" 
                            value="Ignore Case"
                            // checked={this.state.todoDone ? "checked" : null}
                        />
                            Ignore Case
                    </div>
                    <div className="treeviewsearchableinput-card-body-content-input-div">
                        <input type="checkbox" 
                            value="Exact Match"
                            checked={this.state.exactMatch ? "checked" : null}
                            onClick={this.exactMatchHandleClick}
                        />
                            Exact Match
                    </div>
                    <div className="treeviewsearchableinput-card-body-content-input-div">
                        <input type="checkbox" 
                            value="Reveal Results"
                            // checked={this.state.todoDone ? "checked" : null}
                        />
                            Reveal Results
                    </div>
                </div>
                {/* search & clear button */}
                <div className="treeviewsearchableinput-card-body-content-button">
                    <RectangleButton value="Search" onClick={onClick.bind(this)}/>
                    <RectangleButton value="Clear" 
                    backgroundColor="var(--white)"
                    color="var(--black)"
                    fontWeight="400"/>
                </div>
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
  
export default TreeviewSearchableTreeInput;